const express = require('express');
const { getCarbonFootprintByIngredient,getIngredientsByCarbonFootprint } = require('../controllers/ingredientController');

const router = express.Router();

router.get('/carbon-footprint',getIngredientsByCarbonFootprint)
router.get('/:name/carbon-footprint', getCarbonFootprintByIngredient); // Get carbon footprint


module.exports = router;
