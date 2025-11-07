const axios = require("axios");
const { athenaExpress } = require('../config/athena');

// Helper function to validate pagination parameters
const validatePagination = (page, limit) => {
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);

  if (isNaN(pageNum) || pageNum <= 0 || isNaN(limitNum) || limitNum <= 0) {
    throw new Error(
      "Invalid pagination parameters. Page and limit must be positive integers."
    );
  }

  return { pageNum, limitNum };
};

// Controller function to search by recipe name
const searchRecipeByName = async (req, res) => {
  try {
    const { recipeName, page = 1, limit = 10 } = req.query;

    if (!recipeName) {
      return res.status(400).send({ message: "Recipe name is required" });
    }

    const { pageNum, limitNum } = validatePagination(page, limit);
    
    // Escape the recipe name for SQL query safety
    const safeRecipeName = recipeName.replace(/'/g, "''");
    
    // Calculate pagination values
    const offset = (pageNum - 1) * limitNum;
    
    // Count total matching recipes
    const countQuery = `
      SELECT COUNT(*) as total
      FROM cutoff10_recipes_veg_non_veg_sm
      WHERE LOWER("recipe name") LIKE LOWER('%${safeRecipeName}%')
    `;
    
    const countResult = await athenaExpress.query({ sql: countQuery });
    const totalResults = parseInt(countResult.Items[0].total);
    
    if (totalResults === 0) {
      return res.status(404).send({ message: "No recipes found" });
    }
    
    const totalPages = Math.ceil(totalResults / limitNum);
    
    if (pageNum > totalPages) {
      return res.status(400).send({
        message: `Page number exceeds total pages. Maximum page number is ${totalPages}.`,
      });
    }
    
    // Query to get paginated results using ROW_NUMBER
    const dataQuery = `
      SELECT *
      FROM (
        SELECT 
          "recipe id",
          "recipe name",
          "recipe ingredient",
          "total ingredient",
          "available ingredients",
          "available count",
          "not available ingredients",
          "not available count",
          "available percentage",
          carbon_footprint_sum,
          vegetarian_recipe,
          non_vegetarian_recipe,
          miscellaneous_recipe,
          continent,
          region,
          sub_region,
          instructions,
          ingredient_phrase,
          ROW_NUMBER() OVER (ORDER BY "recipe id") as row_num
        FROM cutoff10_recipes_veg_non_veg_sm
        WHERE LOWER("recipe name") LIKE LOWER('%${safeRecipeName}%')
      ) AS ranked
      WHERE row_num > ${offset} AND row_num <= ${offset + limitNum}
    `;
    
    const recipesResult = await athenaExpress.query({ sql: dataQuery });
    const recipes = recipesResult.Items;
    
    res.status(200).send({
      page: pageNum,
      limit: limitNum,
      totalResults,
      totalPages,
      recipes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message || "Internal Server Error" });
  }
};

// Controller function to get recipe details by ID
const getRecipeDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const recipeID = parseInt(id, 10);

    if (isNaN(recipeID)) {
      return res.status(400).send({ message: "Invalid Recipe ID" });
    }

    // Query recipe details from Athena
    const query = `
      SELECT *
      FROM cutoff10_recipes_veg_non_veg_sm
      WHERE "recipe id" = ${recipeID}
    `;
    
    const result = await athenaExpress.query({ sql: query });
    
    // Check if recipe was found
    if (!result.Items || result.Items.length === 0) {
      return res.status(404).send({ message: "Recipe not found" });
    }
    
    const recipe = result.Items[0];

    if (!recipe) {
      return res.status(404).send({ message: "Recipe not found" });
    }

    res.status(200).send(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const searchRecipeByIngredients = async (req, res) => {
  try {
    const { ingredient, include, exclude, page = 1, limit = 10 } = req.query;

    // Handle different input formats for backward compatibility
    let ingredientQuery = ingredient;
    
    // New simplified format support
    if (!ingredient && (include || exclude)) {
      let queryParts = [];
      
      if (include) {
        const includeList = include.split(',').map(ing => `@${ing.trim()}`);
        queryParts = queryParts.concat(includeList);
      }
      
      if (exclude) {
        const excludeList = exclude.split(',').map(ing => `!${ing.trim()}`);
        queryParts = queryParts.concat(excludeList);
      }
      
      ingredientQuery = queryParts.join(' ');
    }

    // Validate ingredient parameter
    if (!ingredientQuery) {
      return res
        .status(400)
        .send({ 
          message: "Ingredient parameter is required. Use 'ingredient' parameter with operators (@include, !exclude, |or) or use 'include'/'exclude' parameters.",
          examples: {
            "Advanced syntax": "?ingredient=@chicken @rice !beef |fish",
            "Simple syntax": "?include=chicken,rice&exclude=beef"
          }
        });
    }

    // Validate and parse pagination
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    if (pageNum < 1 || limitNum < 1) {
      return res
        .status(400)
        .send({ message: "Page and limit must be positive integers." });
    }

    // Handle both space-separated and comma-separated ingredients
    const ingredientsArray = ingredientQuery.includes(',') ? 
      ingredientQuery.split(',').map(ing => ing.trim()) : 
      ingredientQuery.split(' ').filter(ing => ing.trim() !== '');
      
    let mustHaveIngredients = [];
    let mustNotHaveIngredients = [];
    let orConditions = [];

    // Parse ingredients into respective categories
    ingredientsArray.forEach((ing) => {
      ing = ing.trim();
      if (ing === '') return; // Skip empty strings
      
      if (ing.startsWith("@")) {
        const ingredient = ing.slice(1).trim();
        if (ingredient) mustHaveIngredients.push(ingredient);
      } else if (ing.startsWith("!")) {
        const ingredient = ing.slice(1).trim();
        if (ingredient) mustNotHaveIngredients.push(ingredient);
      } else if (ing.startsWith("|")) {
        const ingredient = ing.slice(1).trim();
        if (ingredient) orConditions.push(ingredient);
      } else {
        // If no operator, treat as must-have ingredient for backward compatibility
        if (ing) mustHaveIngredients.push(ing);
      }
    });

    // Validate that we have at least one condition
    if (mustHaveIngredients.length === 0 && mustNotHaveIngredients.length === 0 && orConditions.length === 0) {
      return res.status(400).send({
        message: "At least one ingredient condition must be specified.",
        help: {
          "Include ingredients": "Use @ prefix or include parameter",
          "Exclude ingredients": "Use ! prefix or exclude parameter", 
          "OR conditions": "Use | prefix",
          "Examples": [
            "?ingredient=@chicken @rice !beef",
            "?include=chicken,rice&exclude=beef",
            "?ingredient=|chicken |fish |beef (any of these)"
          ]
        }
      });
    }

    // Check for conflicts between @ and !
    const conflictingAndNot = mustHaveIngredients.filter((ing) =>
      mustNotHaveIngredients.some(notIng => 
        ing.toLowerCase() === notIng.toLowerCase()
      )
    );
    if (conflictingAndNot.length > 0) {
      return res.status(400).send({
        message: `Invalid query: Ingredient(s) "${conflictingAndNot.join(
          '", "'
        )}" cannot be in both include (@) and exclude (!) conditions.`,
      });
    }

    // Check for conflicts between ! and |
    const conflictingNotOr = mustNotHaveIngredients.filter((ing) =>
      orConditions.some(orIng => 
        ing.toLowerCase() === orIng.toLowerCase()
      )
    );
    if (conflictingNotOr.length > 0) {
      return res.status(400).send({
        message: `Invalid query: Ingredient(s) "${conflictingNotOr.join(
          '", "'
        )}" cannot be in both exclude (!) and OR (|) conditions.`,
      });
    }

    // Note: @ and | can coexist - it means "must have this AND (one of these OR conditions)"
    
    // Calculate offset for pagination
    const offset = (pageNum - 1) * limitNum;
    
    // Helper function to sanitize ingredient names for SQL
    const sanitizeIngredient = (ingredient) => {
      return ingredient
        .replace(/'/g, "''")           // Escape single quotes
        .replace(/[%_]/g, '\\$&')      // Escape SQL LIKE wildcards
        .trim();
    };

    // Build SQL WHERE conditions for Athena
    let whereClauses = [];
    let whereClause = '';
    
    // Handle must have ingredients (AND) - all must be present
    if (mustHaveIngredients.length > 0) {
      const andConditions = mustHaveIngredients.map(ing => {
        const safeIng = sanitizeIngredient(ing);
        return `LOWER("recipe ingredient") LIKE LOWER('%${safeIng}%')`;
      });
      whereClauses.push(`(${andConditions.join(' AND ')})`);
    }
    
    // Handle must not have ingredients (NOT) - none should be present
    if (mustNotHaveIngredients.length > 0) {
      const notConditions = mustNotHaveIngredients.map(ing => {
        const safeIng = sanitizeIngredient(ing);
        return `LOWER("recipe ingredient") NOT LIKE LOWER('%${safeIng}%')`;
      });
      whereClauses.push(`(${notConditions.join(' AND ')})`);
    }
    
    // Handle OR conditions - at least one must be present
    if (orConditions.length > 0) {
      const orClause = orConditions.map(ing => {
        const safeIng = sanitizeIngredient(ing);
        return `LOWER("recipe ingredient") LIKE LOWER('%${safeIng}%')`;
      }).join(' OR ');
      whereClauses.push(`(${orClause})`);
    }
    
    if (whereClauses.length > 0) {
      whereClause = `WHERE ${whereClauses.join(' AND ')}`;
    }
    
    // Count total matching recipes
    const countQuery = `
      SELECT COUNT(*) as total
      FROM cutoff10_recipes_veg_non_veg_sm
      ${whereClause}
    `;
    
    // Execute the count query
    const countResult = await athenaExpress.query({ sql: countQuery });
    const totalResults = parseInt(countResult.Items[0].total);
    
    if (totalResults === 0) {
      return res.status(200).send({ message: "No results found." });
    }
    
    // Calculate total pages
    const totalPages = Math.ceil(totalResults / limitNum);
    
    // Check if requested page is within bounds
    if ((pageNum - 1) * limitNum >= totalResults) {
      return res.status(400).send({
        message: `Page number exceeds the total number of pages (${totalPages}). Please provide a valid page number.`,
      });
    }
    
    // Query to fetch paginated recipes
    const dataQuery = `
      SELECT *
      FROM (
        SELECT 
          "recipe id",
          "recipe name", 
          "recipe ingredient", 
          "total ingredient",
          "available ingredients",
          "available count",
          "not available ingredients",
          "not available count",
          "available percentage",
          carbon_footprint_sum,
          vegetarian_recipe,
          non_vegetarian_recipe,
          miscellaneous_recipe,
          continent,
          region,
          sub_region,
          instructions,
          ingredient_phrase,
          ROW_NUMBER() OVER (ORDER BY "Recipe ID") as row_num
        FROM cutoff10_recipes_veg_non_veg_sm
        ${whereClause}
      ) AS ranked
      WHERE row_num > ${offset} AND row_num <= ${offset + limitNum}
    `;
    
    // Execute the data query
    const dataResult = await athenaExpress.query({ sql: dataQuery });
    const recipes = dataResult.Items;
    
    // Return the results with query info
    res.status(200).send({
      success: true,
      message: "Recipes fetched successfully",
      query: {
        mustHave: mustHaveIngredients,
        mustNotHave: mustNotHaveIngredients,
        anyOf: orConditions
      },
      pagination: {
        page: pageNum,
        limit: limitNum,
        totalResults,
        totalPages
      },
      data: recipes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message || "Internal Server Error." });
  }
};

const getRecipeIngredientsCarbonFootprint = async (req, res) => {
  try {
    const { id, recipeName } = req.query;
    if (!id && !recipeName) {
      return res
        .status(400)
        .send({ message: "Either Recipe ID or Name is required" });
    }

    // Build query to fetch recipe details
    let recipeQuery;
    if (id) {
      const recipeId = parseInt(id, 10);
      if (isNaN(recipeId)) {
        return res.status(400).send({ message: "Invalid Recipe ID" });
      }
      recipeQuery = `
        SELECT "recipe id", "recipe name", "recipe ingredient"
        FROM cutoff10_recipes_veg_non_veg_sm
        WHERE "recipe id" = ${recipeId}
      `;
    } else {
      const safeRecipeName = recipeName.replace(/'/g, "''");
      recipeQuery = `
        SELECT "recipe id", "recipe name", "recipe ingredient"
        FROM cutoff10_recipes_veg_non_veg_sm
        WHERE LOWER("recipe name") LIKE LOWER('%${safeRecipeName}%')
        LIMIT 1
      `;
    }
    
    // Execute the recipe query
    const recipeResult = await athenaExpress.query({ sql: recipeQuery });
    
    // Check if recipe was found
    if (!recipeResult.Items || recipeResult.Items.length === 0) {
      return res.status(404).send({ message: "Recipe not found" });
    }
    
    const recipe = recipeResult.Items[0];
    
    // Parse ingredient list from recipe
    let ingredients;
    try {
      ingredients = JSON.parse(recipe["recipe ingredient"].replace(/'/g, '"'));
    } catch (error) {
      console.error("Invalid Recipe Ingredient JSON:", recipe["recipe ingredient"]);
      return res.status(500).send({ message: "Invalid Recipe Ingredient format" });
    }
    
    if (ingredients.length === 0) {
      return res.status(400).send({ message: "No ingredients found in the recipe" });
    }
    
    // Create an array to store ingredient data with carbon footprints
    const ingredientFootprints = [];
    
    // For each ingredient, fetch carbon footprint data from Athena
    for (const ingredient of ingredients) {
      const safeIngredient = ingredient.replace(/'/g, "''");
      
      // Query ingredient carbon footprint
      const ingredientQuery = `
        SELECT "RecipeDB Ingredient", "Carbon Footprint"
        FROM ingredient_details_server
        WHERE LOWER("recipedb_ingredient") LIKE LOWER('%${safeIngredient}%')
        LIMIT 1
      `;
      
      try {
        const ingredientResult = await athenaExpress.query({ sql: ingredientQuery });
        
        if (ingredientResult.Items && ingredientResult.Items.length > 0) {
          const dbIngredient = ingredientResult.Items[0];
          ingredientFootprints.push({
            ingredient: dbIngredient["RecipeDB Ingredient"],
            carbonFootprint: parseFloat(dbIngredient["Carbon Footprint"])
          });
        } else {
          // If not found, try checking in a second table (similar to MongoDB mapped CF search)
          const splitIngredient = ingredient.split(/\s+/).join('|');
          const mappedQuery = `
            SELECT "Sueatable Ingredient", "CF"
            FROM recipedb_mapped_ing_cf_count
            WHERE LOWER("sueatable_ingredient") LIKE LOWER('%${splitIngredient}%')
            LIMIT 1
          `;
          
          const mappedResult = await athenaExpress.query({ sql: mappedQuery });
          
          if (mappedResult.Items && mappedResult.Items.length > 0) {
            const mappedIngredient = mappedResult.Items[0];
            ingredientFootprints.push({
              ingredient: mappedIngredient["Sueatable Ingredient"],
              carbonFootprint: parseFloat(mappedIngredient["CF"])
            });
          } else {
            ingredientFootprints.push({
              ingredient,
              carbonFootprint: "Data not available"
            });
          }
        }
      } catch (err) {
        console.error(`Error fetching carbon footprint for: ${ingredient}`, err.message);
        ingredientFootprints.push({
          ingredient,
          carbonFootprint: "Data not available"
        });
      }
    }
    
    // Calculate total carbon footprint
    const totalCarbonFootprint = ingredientFootprints.reduce(
      (sum, item) => typeof item.carbonFootprint === "number" ? sum + item.carbonFootprint : sum,
      0
    );
    
    // Return the response
    res.status(200).send({
      recipeName: recipe["Recipe Name"],
      ingredients: ingredientFootprints,
      totalCarbonFootprint,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// Controller function to get recipes by carbon footprint sum with filter range
const getRecipesByCarbonFootprintSumWithFilterRange = async (req, res) => {
  try {
    const { min, max, page = 1, limit = 10 } = req.query;

    // Parse min and max values as floats
    const minCarbonFootprint = min ? parseFloat(min) : null;
    const maxCarbonFootprint = max ? parseFloat(max) : null;

    // Validate pagination inputs
    const { pageNum, limitNum } = validatePagination(page, limit);

    // Validate min and max query parameters
    if (
      (min && isNaN(minCarbonFootprint)) ||
      (max && isNaN(maxCarbonFootprint))
    ) {
      return res
        .status(400)
        .send({
          message:
            "Invalid query parameters. Please provide valid numeric values for min and max.",
        });
    }

    // Ensure at least one of min or max is specified
    if (minCarbonFootprint === null && maxCarbonFootprint === null) {
      return res
        .status(400)
        .send({
          message:
            "At least one of min or max carbon footprint must be specified.",
        });
    }

    // Ensure min is not greater than max
    if (
      minCarbonFootprint !== null &&
      maxCarbonFootprint !== null &&
      minCarbonFootprint > maxCarbonFootprint
    ) {
      return res
        .status(400)
        .send({
          message:
            "The min carbon footprint cannot be greater than the max carbon footprint.",
        });
    }

    // Build WHERE clause for Athena
    let whereClause = '';
    let conditions = [];
    
    if (minCarbonFootprint !== null) {
      conditions.push(`Carbon_footprint_sum >= ${minCarbonFootprint}`);
    }
    
    if (maxCarbonFootprint !== null) {
      conditions.push(`Carbon_footprint_sum <= ${maxCarbonFootprint}`);
    }
    
    if (conditions.length > 0) {
      whereClause = `WHERE ${conditions.join(' AND ')}`;
    }
    
    // Calculate offset for pagination
    const offset = (pageNum - 1) * limitNum;
    
    // Count total matching documents
    const countQuery = `
      SELECT COUNT(*) as total
      FROM cutoff10_recipes_veg_non_veg_sm
      ${whereClause}
    `;
    
    // Execute count query
    const countResult = await athenaExpress.query({ sql: countQuery });
    const totalResults = parseInt(countResult.Items[0].total);
    
    // Calculate total pages
    const totalPages = Math.ceil(totalResults / limitNum);
    
    // Handle pagination out-of-bounds
    if (pageNum > totalPages) {
      return res.status(400).send({
        message: `Page number exceeds total pages. Maximum page number is ${totalPages}.`,
      });
    }
    
    // If no results found
    if (totalResults === 0) {
      return res
        .status(404)
        .send({
          message: "No recipes found for the specified carbon footprint range.",
        });
    }

    // Query to get paginated results
    const dataQuery = `
      SELECT *
      FROM (
        SELECT 
          "recipe id",
          "recipe name", 
          "recipe ingredient", 
          "total ingredient",
          "available ingredients",
          "available count",
          "not available ingredients",
          "not available count",
          "available percentage",
          carbon_footprint_sum,
          vegetarian_recipe,
          non_vegetarian_recipe,
          miscellaneous_recipe,
          continent,
          region,
          sub_region,
          instructions,
          ingredient_phrase,
          ROW_NUMBER() OVER (ORDER BY "Carbon_footprint_sum") as row_num
        FROM cutoff10_recipes_veg_non_veg_sm
        ${whereClause}
      ) AS ranked
      WHERE row_num > ${offset} AND row_num <= ${offset + limitNum}
    `;
    
    // Execute data query
    const dataResult = await athenaExpress.query({ sql: dataQuery });
    const recipes = dataResult.Items;
    
    // Respond with results
    res.status(200).send({
      page: pageNum,
      limit: limitNum,
      totalResults,
      totalPages,
      recipes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message || "Internal Server Error" });
  }
};

// Advanced recipe search with multiple criteria
const advancedRecipeSearch = async (req, res) => {
  try {
    const { 
      include,           // Comma-separated ingredients that MUST be included
      exclude,           // Comma-separated ingredients that MUST NOT be included
      anyOf,             // Comma-separated ingredients where ANY can be present
      vegetarian,        // Filter for vegetarian recipes
      region,            // Filter by region
      maxCookTime,       // Maximum cooking time
      minCarbonFootprint, // Minimum carbon footprint
      maxCarbonFootprint, // Maximum carbon footprint
      page = 1, 
      limit = 10 
    } = req.query;

    const { pageNum, limitNum } = validatePagination(page, limit);
    
    // Build ingredient conditions
    let ingredientClauses = [];
    
    if (include) {
      const includeList = include.split(',').map(ing => ing.trim()).filter(ing => ing);
      if (includeList.length > 0) {
        const includeConditions = includeList.map(ing => {
          const safeIng = ing.replace(/'/g, "''").replace(/[%_]/g, '\\$&');
          return `LOWER("recipe ingredient") LIKE LOWER('%${safeIng}%')`;
        });
        ingredientClauses.push(`(${includeConditions.join(' AND ')})`);
      }
    }
    
    if (exclude) {
      const excludeList = exclude.split(',').map(ing => ing.trim()).filter(ing => ing);
      if (excludeList.length > 0) {
        const excludeConditions = excludeList.map(ing => {
          const safeIng = ing.replace(/'/g, "''").replace(/[%_]/g, '\\$&');
          return `LOWER("recipe ingredient") NOT LIKE LOWER('%${safeIng}%')`;
        });
        ingredientClauses.push(`(${excludeConditions.join(' AND ')})`);
      }
    }
    
    if (anyOf) {
      const anyOfList = anyOf.split(',').map(ing => ing.trim()).filter(ing => ing);
      if (anyOfList.length > 0) {
        const anyOfConditions = anyOfList.map(ing => {
          const safeIng = ing.replace(/'/g, "''").replace(/[%_]/g, '\\$&');
          return `LOWER("recipe ingredient") LIKE LOWER('%${safeIng}%')`;
        });
        ingredientClauses.push(`(${anyOfConditions.join(' OR ')})`);
      }
    }
    
    // Build additional filters
    let additionalClauses = [];
    
    if (vegetarian === 'true') {
      additionalClauses.push(`vegetarian_recipe = 1`);
    } else if (vegetarian === 'false') {
      additionalClauses.push(`non_vegetarian_recipe = 1`);
    }
    
    if (region) {
      const safeRegion = region.replace(/'/g, "''");
      additionalClauses.push(`LOWER("region") LIKE LOWER('%${safeRegion}%')`);
    }
    
    if (maxCookTime) {
      const cookTime = parseInt(maxCookTime, 10);
      if (!isNaN(cookTime)) {
        additionalClauses.push(`CAST("Cook Time" AS INTEGER) <= ${cookTime}`);
      }
    }
    
    if (minCarbonFootprint || maxCarbonFootprint) {
      if (minCarbonFootprint) {
        const minCF = parseFloat(minCarbonFootprint);
        if (!isNaN(minCF)) {
          additionalClauses.push(`"Carbon_footprint_sum" >= ${minCF}`);
        }
      }
      if (maxCarbonFootprint) {
        const maxCF = parseFloat(maxCarbonFootprint);
        if (!isNaN(maxCF)) {
          additionalClauses.push(`"Carbon_footprint_sum" <= ${maxCF}`);
        }
      }
    }
    
    // Combine all conditions
    let allClauses = [...ingredientClauses, ...additionalClauses];
    let whereClause = allClauses.length > 0 ? `WHERE ${allClauses.join(' AND ')}` : '';
    
    if (!whereClause) {
      return res.status(400).send({
        message: "At least one search criterion must be specified.",
        availableFilters: {
          "include": "Ingredients that must be present (comma-separated)",
          "exclude": "Ingredients that must not be present (comma-separated)",
          "anyOf": "Ingredients where any can be present (comma-separated)",
          "vegetarian": "true/false for vegetarian filter",
          "region": "Cuisine region filter",
          "maxCookTime": "Maximum cooking time in minutes",
          "minCarbonFootprint": "Minimum carbon footprint",
          "maxCarbonFootprint": "Maximum carbon footprint"
        }
      });
    }
    
    const offset = (pageNum - 1) * limitNum;
    
    // Count query
    const countQuery = `
      SELECT COUNT(*) as total
      FROM cutoff10_recipes_veg_non_veg_sm
      ${whereClause}
    `;
    
    const countResult = await athenaExpress.query({ sql: countQuery });
    const totalResults = parseInt(countResult.Items[0].total);
    
    if (totalResults === 0) {
      return res.status(200).send({ 
        success: true,
        message: "No recipes found matching the specified criteria.",
        query: req.query,
        totalResults: 0
      });
    }
    
    const totalPages = Math.ceil(totalResults / limitNum);
    
    // Data query
    const dataQuery = `
      SELECT *
      FROM (
        SELECT 
          "recipe id",
          "recipe name", 
          "recipe ingredient", 
          "total ingredient",
          "available ingredients",
          "available count",
          "not available ingredients", 
          "not available count",
          "available percentage",
          carbon_footprint_sum,
          vegetarian_recipe,
          non_vegetarian_recipe,
          "Miscellaneous_Recipe",
          continent,
          region,
          sub_region,
          instructions,
          ingredient_phrase,
          ROW_NUMBER() OVER (ORDER BY "Recipe ID") as row_num
        FROM cutoff10_recipes_veg_non_veg_sm
        ${whereClause}
      ) AS ranked
      WHERE row_num > ${offset} AND row_num <= ${offset + limitNum}
    `;
    
    const dataResult = await athenaExpress.query({ sql: dataQuery });
    const recipes = dataResult.Items;
    
    res.status(200).send({
      success: true,
      message: "Advanced recipe search completed successfully",
      query: {
        include: include?.split(',').map(s => s.trim()).filter(s => s) || [],
        exclude: exclude?.split(',').map(s => s.trim()).filter(s => s) || [],
        anyOf: anyOf?.split(',').map(s => s.trim()).filter(s => s) || [],
        filters: {
          vegetarian,
          region,
          maxCookTime,
          minCarbonFootprint,
          maxCarbonFootprint
        }
      },
      pagination: {
        page: pageNum,
        limit: limitNum,
        totalResults,
        totalPages
      },
      data: recipes
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message || "Internal Server Error" });
  }
};

module.exports = {
  searchRecipeByName,
  getRecipeDetails,
  searchRecipeByIngredients,
  getRecipeIngredientsCarbonFootprint,
  getRecipesByCarbonFootprintSumWithFilterRange,
  advancedRecipeSearch,
};
