// This file contains configuration settings for the application

// Port configuration
const port = process.env.PORT || 3000;

// Database configuration
module.exports = {
  port,
  // These are placeholder values that maintain compatibility with existing code
  // but aren't used when working with Athena
  mongoCollections: {
    recipesCollection: 'cutoff10_recipes_veg_non_veg_sm',
    ingredientCollection: 'ingredient_details_server',
    ingredientCarbonFootprintCollection: 'recipedb_mapped_ing_cf_count'
  },
  api: {
    server: `http://localhost:${port}`,
  }
};