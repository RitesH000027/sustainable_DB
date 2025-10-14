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
      WHERE LOWER("Recipe Name") LIKE LOWER('%${safeRecipeName}%')
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
          "Recipe ID",
          "Recipe Name",
          "Recipe Ingredient",
          "Total Ingredient",
          "Available Ingredients",
          "Available Count",
          "Not Available Ingredients",
          "Not Available Count",
          "Available Percentage",
          "Carbon_footprint_sum",
          "Vegetarian_Recipe",
          "Non_Vegetarian_Recipe",
          "Miscellaneous_Recipe",
          continent,
          region,
          sub_region,
          instructions,
          ingredient_phrase,
          ROW_NUMBER() OVER (ORDER BY "Recipe ID") as row_num
        FROM recipes_veg_non_veg
        WHERE LOWER("Recipe Name") LIKE LOWER('%${safeRecipeName}%')
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
      WHERE "Recipe ID" = ${recipeID}
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
    const { ingredient, page = 1, limit = 10 } = req.query;

    // Validate ingredient parameter
    if (!ingredient) {
      return res
        .status(400)
        .send({ message: "Ingredient parameter is required." });
    }

    // Validate and parse pagination
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    if (pageNum < 1 || limitNum < 1) {
      return res
        .status(400)
        .send({ message: "Page and limit must be positive integers." });
    }

    const ingredientsArray = ingredient.split(" ");
    let mustHaveIngredients = [];
    let mustNotHaveIngredients = [];
    let orConditions = [];

    // Parse ingredients into respective categories
    ingredientsArray.forEach((ing) => {
      ing = ing.trim();
      if (ing.startsWith("@")) {
        mustHaveIngredients.push(ing.slice(1).trim());
      } else if (ing.startsWith("!")) {
        mustNotHaveIngredients.push(ing.slice(1).trim());
      } else if (ing.startsWith("|")) {
        orConditions.push(ing.slice(1).trim());
      }
    });

    // Check for conflicts between @ and !
    const conflictingAndNot = mustHaveIngredients.filter((ing) =>
      mustNotHaveIngredients.includes(ing)
    );
    if (conflictingAndNot.length > 0) {
      return res.status(400).send({
        message: `Invalid query: Ingredient(s) ${conflictingAndNot.join(
          ", "
        )} cannot be in both AND (@) and NOT (!) conditions.`,
      });
    }

    // Check for conflicts between ! and |
    const conflictingNotOr = mustNotHaveIngredients.filter((ing) =>
      orConditions.includes(ing)
    );
    if (conflictingNotOr.length > 0) {
      return res.status(400).send({
        message: `Invalid query: Ingredient(s) ${conflictingNotOr.join(
          ", "
        )} cannot be in both NOT (!) and OR (|) conditions.`,
      });
    }

    // Check for conflict @ and | (optional)
    const conflictingAndOr = mustHaveIngredients.filter((ing) =>
      orConditions.includes(ing)
    );
    if (conflictingAndOr.length > 0) {
      return res.status(400).send({
        message: `Invalid query: Ingredient(s) ${conflictingAndOr.join(
          ", "
        )} cannot be in both AND (@) and OR (|) conditions. Please clarify the query.`,
      });
    }
    
    // Calculate offset for pagination
    const offset = (pageNum - 1) * limitNum;
    
    // Build SQL WHERE conditions for Athena
    let whereClauses = [];
    let whereClause = '';
    
    // Handle must have ingredients (AND)
    if (mustHaveIngredients.length > 0) {
      const andConditions = mustHaveIngredients.map(ing => {
        const safeIng = ing.replace(/'/g, "''");
        return `LOWER("Recipe Ingredient") LIKE LOWER('%${safeIng}%')`;
      });
      whereClauses.push(`(${andConditions.join(' AND ')})`);
    }
    
    // Handle must not have ingredients (NOT)
    if (mustNotHaveIngredients.length > 0) {
      const notConditions = mustNotHaveIngredients.map(ing => {
        const safeIng = ing.replace(/'/g, "''");
        return `LOWER("Recipe Ingredient") NOT LIKE LOWER('%${safeIng}%')`;
      });
      whereClauses.push(`(${notConditions.join(' AND ')})`);
    }
    
    // Handle OR conditions
    if (orConditions.length > 0) {
      const orClause = orConditions.map(ing => {
        const safeIng = ing.replace(/'/g, "''");
        return `LOWER("Recipe Ingredient") LIKE LOWER('%${safeIng}%')`;
      }).join(' OR ');
      whereClauses.push(`(${orClause})`);
    }
    
    if (whereClauses.length > 0) {
      whereClause = `WHERE ${whereClauses.join(' AND ')}`;
    }
    
    // Count total matching recipes
    const countQuery = `
      SELECT COUNT(*) as total
      FROM recipes_veg_non_veg
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
          "Recipe ID",
          "Recipe Name", 
          "Recipe Ingredient", 
          "Total Ingredient",
          "Available Ingredients",
          "Available Count",
          "Not Available Ingredients",
          "Not Available Count",
          "Available Percentage",
          "Carbon_footprint_sum",
          "Vegetarian_Recipe",
          "Non_Vegetarian_Recipe",
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
    
    // Execute the data query
    const dataResult = await athenaExpress.query({ sql: dataQuery });
    const recipes = dataResult.Items;
    
    // Return the results
    res.status(200).send({
      page: pageNum,
      limit: limitNum,
      totalResults,
      totalPages,
      recipes,
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
        SELECT "Recipe ID", "Recipe Name", "Recipe Ingredient"
        FROM cutoff10_recipes_veg_non_veg_sm
        WHERE "Recipe ID" = ${recipeId}
      `;
    } else {
      const safeRecipeName = recipeName.replace(/'/g, "''");
      recipeQuery = `
        SELECT "Recipe ID", "Recipe Name", "Recipe Ingredient"
        FROM cutoff10_recipes_veg_non_veg_sm
        WHERE LOWER("Recipe Name") LIKE LOWER('%${safeRecipeName}%')
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
      ingredients = JSON.parse(recipe["Recipe Ingredient"].replace(/'/g, '"'));
    } catch (err) {
      console.error("Invalid Recipe Ingredient JSON:", recipe["Recipe Ingredient"]);
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
        WHERE LOWER("RecipeDB Ingredient") LIKE LOWER('%${safeIngredient}%')
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
            WHERE LOWER("Sueatable Ingredient") LIKE LOWER('%${splitIngredient}%')
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
          "Recipe ID",
          "Recipe Name", 
          "Recipe Ingredient", 
          "Total Ingredient",
          "Available Ingredients",
          "Available Count",
          "Not Available Ingredients",
          "Not Available Count",
          "Available Percentage",
          "Carbon_footprint_sum",
          "Vegetarian_Recipe",
          "Non_Vegetarian_Recipe",
          "Miscellaneous_Recipe",
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

module.exports = {
  searchRecipeByName,
  getRecipeDetails,
  searchRecipeByIngredients,
  getRecipeIngredientsCarbonFootprint,
  getRecipesByCarbonFootprintSumWithFilterRange,
};
