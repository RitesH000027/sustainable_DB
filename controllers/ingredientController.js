const { athenaExpress } = require('../config/athena');

// Controller function to get the carbon footprint of an ingredient
const getCarbonFootprintByIngredient = async (req, res) => {
  try {
    const { quantity=1 } = req.query;
    const { name } = req.params;

    // Validate the ingredient name parameter
    if (!name || name.trim() === '') {
      return res.status(400).send({ message: 'Ingredient name is required and cannot be empty.' });
    }

    // Validate the quantity parameter (if provided)
    if (quantity && (isNaN(quantity) || parseFloat(quantity) <= 0)) {
      return res.status(400).send({ message: 'Quantity must be a valid number greater than 0.' });
    }
    
    // Escape the ingredient name for SQL query safety (prevent SQL injection)
    const safeName = name.replace(/'/g, "''");
    
    // Build the Athena query to find the ingredient by name (case-insensitive)
    const query = `
      SELECT "RecipeDB Ingredient", "Carbon Footprint"
      FROM ingredient_details_server
      WHERE LOWER("RecipeDB Ingredient") LIKE LOWER('%${safeName}%')
      LIMIT 1
    `;
    
    // Execute the query using Athena
    const result = await athenaExpress.query({ sql: query });
    
    // Handle case where no matching ingredient is found
    if (!result.Items || result.Items.length === 0) {
      return res.status(404).send({ message: 'Ingredient not found.' });
    }
    
    // Extract the exact ingredient name and carbon footprint
    const ingredient = result.Items[0];
    const exactIngredientName = ingredient['RecipeDB Ingredient'];
    const carbonFootprintPerKg = parseFloat(ingredient['Carbon Footprint']);

    // Prepare the response object
    const response = {
      ingredient: exactIngredientName,
      carbonFootprintPerKg
    };

    // If quantity is provided, calculate and add total carbon footprint to the response
    if (quantity) {
      const totalCarbonFootprint = parseFloat(quantity) * carbonFootprintPerKg;
      response.quantity = parseFloat(quantity);
      response.totalCarbonFootprint = totalCarbonFootprint;
    }

    // Respond with the appropriate data
    res.status(200).send(response);
  } catch (err) {
    console.error(err);

    // Catch unexpected errors
    res.status(500).send({ message: err.message || 'Internal Server Error' });
  }
};

const getIngredientsByCarbonFootprint = async (req, res) => {
  try {
    const { min, max, page = 1, limit = 10 } = req.query;

    // Parse query parameters
    const minCarbonFootprint = min ? parseFloat(min) : null;
    const maxCarbonFootprint = max ? parseFloat(max) : null;

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
   
    // Validate query parameters
    if ((min && isNaN(minCarbonFootprint)) || (max && isNaN(maxCarbonFootprint))) {
      return res.status(400).send({ message: 'Invalid query parameters. Please provide valid numeric values for min and max.' });
    }

    // Check at least one parameter is provided
    if (minCarbonFootprint === null && maxCarbonFootprint === null) {
      return res.status(400).send({ message: 'At least one of min or max carbon footprint must be specified.' });
    }

    // Check if the min and max values are logically correct
    if (minCarbonFootprint !== null && maxCarbonFootprint !== null && minCarbonFootprint > maxCarbonFootprint) {
      return res.status(400).send({ message: 'The min carbon footprint cannot be greater than the max carbon footprint.' });
    }

    // Validate pagination query parameters
    if (isNaN(pageNum) || pageNum <= 0 || isNaN(limitNum) || limitNum <= 0) {
      return res.status(400).send({ message: 'Invalid pagination parameters. Page and limit must be positive integers.' });
    }

    // Build the WHERE clause for Athena
    let whereClause = [];
    if (minCarbonFootprint !== null) {
      whereClause.push(`"Carbon Footprint" >= ${minCarbonFootprint}`);
    }
    if (maxCarbonFootprint !== null) {
      whereClause.push(`"Carbon Footprint" <= ${maxCarbonFootprint}`);
    }
    
    const whereStatement = whereClause.length > 0 ? `WHERE ${whereClause.join(' AND ')}` : '';
    
    // Calculate offset for pagination
    const offset = (pageNum - 1) * limitNum;
    
    // Query for counting total matching documents
    const countQuery = `
      SELECT COUNT(*) as total
      FROM ingredient_details_server
      ${whereStatement}
    `;
    
    // Query for fetching paginated results with ROW_NUMBER pagination
    const dataQuery = `
      SELECT *
      FROM (
        SELECT 
          "RecipeDB Ingredient",
          "Category",
          "Sueatable_Ingredient",
          "Food_Commodity_Group",
          "Food_Commodity_Typology",
          "Region",
          "Country",
          "Carbon Footprint",
          "Full Reference",
          "Publication Year",
          "Source Type",
          ROW_NUMBER() OVER (ORDER BY "Carbon Footprint") as row_num
        FROM ingredient_details_server
        ${whereStatement}
      ) AS ranked
      WHERE row_num > ${offset} AND row_num <= ${offset + limitNum}
    `;
    
    // Execute queries using Athena
    const countResult = await athenaExpress.query({ sql: countQuery });
    const totalResults = parseInt(countResult.Items[0].total);
    
    // Calculate total pages
    const totalPages = Math.ceil(totalResults / limitNum);
    
    // Check if results exist
    if (totalResults === 0) {
      return res.status(404).send({ message: 'No ingredients found within the specified carbon footprint range.' });
    }
    
    // Check if requested page is valid
    if (pageNum > totalPages) {
      return res.status(400).send({
        message: `Page number exceeds the total number of pages (${totalPages}). Please provide a valid page number.`,
      });
    }
    
    // Fetch the actual data
    const dataResult = await athenaExpress.query({ sql: dataQuery });
    const ingredients = dataResult.Items;
    
    // Respond with paginated ingredients and total results
    res.status(200).send({
      page: pageNum,
      limit: limitNum,
      totalResults: totalResults,
      totalPages: totalPages,
      ingredients,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message || 'Internal Server Error' });
  }
};

module.exports = { getCarbonFootprintByIngredient, getIngredientsByCarbonFootprint };
