const express = require('express');
const { 
  searchRecipeByName,
  getRecipeDetails,
  searchRecipeByIngredients,
  getRecipeIngredientsCarbonFootprint,
  getRecipesByCarbonFootprintSumWithFilterRange,
  advancedRecipeSearch
} = require('../controllers/recipeController');
const router = express.Router();

// Define the route for searching by recipe name
router.get('/search', searchRecipeByName);

// Enhanced ingredient-based searches
router.get('/by-ingredient/', searchRecipeByIngredients);
router.get('/advanced-search/', advancedRecipeSearch);

// Other recipe endpoints
router.get('/recipe/:id', getRecipeDetails); // Get recipe details
router.get('/ingredient-cf/', getRecipeIngredientsCarbonFootprint);
router.get('/carbon-footprint-sum', getRecipesByCarbonFootprintSumWithFilterRange);

module.exports = router;
