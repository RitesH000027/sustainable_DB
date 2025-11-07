# Postman Test Queries for Ingredient Search

## Base URL
```
http://localhost:3000/api/recipes
```

## 1. Basic Ingredient Search Tests (`/by-ingredient/`)

### Test 1: Simple Include with Operators
```
Method: GET
URL: http://localhost:3000/api/recipes/by-ingredient/?ingredient=@chicken
Expected: Recipes that MUST contain chicken
```

### Test 2: Multiple Includes
```
Method: GET
URL: http://localhost:3000/api/recipes/by-ingredient/?ingredient=@chicken @rice
Expected: Recipes that MUST contain both chicken AND rice
```

### Test 3: Include and Exclude
```
Method: GET
URL: http://localhost:3000/api/recipes/by-ingredient/?ingredient=@chicken !beef
Expected: Recipes with chicken but NO beef
```

### Test 4: OR Conditions
```
Method: GET
URL: http://localhost:3000/api/recipes/by-ingredient/?ingredient=|chicken |fish |tofu
Expected: Recipes with ANY of: chicken OR fish OR tofu
```

### Test 5: Complex Mixed Query
```
Method: GET
URL: http://localhost:3000/api/recipes/by-ingredient/?ingredient=@rice |chicken |fish !beef !pork
Expected: Recipes that MUST have rice AND (chicken OR fish) but NO beef or pork
```

### Test 6: Simple Parameter Format
```
Method: GET
URL: http://localhost:3000/api/recipes/by-ingredient/?include=chicken,rice&exclude=beef
Expected: Same as Test 2 + 3 combined, using simple format
```

### Test 7: Only Exclusions
```
Method: GET
URL: http://localhost:3000/api/recipes/by-ingredient/?exclude=beef,pork,lamb
Expected: All recipes except those with beef, pork, or lamb
```

### Test 8: Pagination Test
```
Method: GET
URL: http://localhost:3000/api/recipes/by-ingredient/?ingredient=@chicken&page=2&limit=5
Expected: Second page with 5 results per page
```

### Test 9: Error Test - Conflicting Ingredients
```
Method: GET
URL: http://localhost:3000/api/recipes/by-ingredient/?ingredient=@chicken !chicken
Expected: Error message about conflicting conditions
```

### Test 10: Error Test - No Criteria
```
Method: GET
URL: http://localhost:3000/api/recipes/by-ingredient/
Expected: Error message requesting search criteria
```

## 2. Advanced Search Tests (`/advanced-search/`)

### Test 11: Basic Include/Exclude
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?include=chicken,rice&exclude=beef
Expected: Recipes with chicken and rice, no beef
```

### Test 12: Vegetarian Filter
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?vegetarian=true&anyOf=beans,lentils,chickpeas
Expected: Vegetarian recipes with any type of legumes
```

### Test 13: Regional Cuisine
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?region=Asian&include=rice
Expected: Asian recipes that contain rice
```

### Test 14: Quick Cooking Filter
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?maxCookTime=30&anyOf=pasta,noodles
Expected: Quick recipes (≤30 min) with pasta or noodles
```

### Test 15: Low Carbon Footprint
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?maxCarbonFootprint=1.0&vegetarian=true
Expected: Eco-friendly vegetarian recipes
```

### Test 16: High Carbon Footprint Filter
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?minCarbonFootprint=2.0
Expected: Recipes with higher carbon footprint (≥2.0)
```

### Test 17: Complex Multi-Criteria
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?include=vegetables&exclude=meat,dairy&vegetarian=true&region=Mediterranean&maxCookTime=45&maxCarbonFootprint=0.8
Expected: Mediterranean vegetarian veggie recipes, quick cooking, low carbon footprint
```

### Test 18: Seafood Specific
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?anyOf=salmon,tuna,cod,shrimp&exclude=chicken,beef&maxCookTime=25
Expected: Quick seafood recipes, no land meat
```

### Test 19: Protein Alternatives
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?anyOf=tofu,tempeh,seitan&vegetarian=true&region=Asian
Expected: Asian vegetarian recipes with plant-based proteins
```

### Test 20: Dietary Restrictions
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?exclude=gluten,wheat,dairy,nuts&vegetarian=true
Expected: Gluten-free, dairy-free, nut-free vegetarian recipes
```

## 3. Edge Case Tests

### Test 21: Empty Results
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?include=dragon,unicorn
Expected: No results (unless you have mythical ingredients!)
```

### Test 22: Invalid Parameters
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?maxCookTime=abc
Expected: Error handling for invalid number format
```

### Test 23: Conflicting Advanced Criteria
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?include=chicken&vegetarian=true
Expected: No results or handled gracefully (chicken + vegetarian conflict)
```

### Test 24: Large Page Number
```
Method: GET
URL: http://localhost:3000/api/recipes/by-ingredient/?ingredient=@rice&page=999
Expected: Empty results or last available page
```

## 4. Performance Tests

### Test 25: Large Limit
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?limit=100
Expected: Up to 100 results (test pagination handling)
```

### Test 26: Multiple OR Conditions
```
Method: GET
URL: http://localhost:3000/api/recipes/by-ingredient/?ingredient=|chicken |beef |pork |fish |shrimp |tofu |beans |lentils
Expected: Recipes with any protein source
```

## 5. Real-World Scenario Tests

### Test 27: Meal Planning - Dinner Party
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?region=Italian&maxCookTime=60&exclude=nuts&anyOf=pasta,rice
Expected: Italian dinner recipes without nuts, reasonable cooking time
```

### Test 28: Diet Plan - Keto-Friendly
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?exclude=rice,pasta,bread,sugar&include=meat,cheese
Expected: Low-carb, high-fat recipes
```

### Test 29: Budget Cooking
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?anyOf=beans,lentils,rice,pasta&maxCarbonFootprint=0.5
Expected: Affordable, eco-friendly recipes with cheap staples
```

### Test 30: Quick Breakfast
```
Method: GET
URL: http://localhost:3000/api/recipes/advanced-search/?anyOf=eggs,oats,fruit&maxCookTime=15
Expected: Quick breakfast options
```

## Expected Response Format

Each successful response should include:
```json
{
  "success": true,
  "message": "...",
  "query": {
    "mustHave": [...],
    "mustNotHave": [...],
    "anyOf": [...],
    "filters": {...}
  },
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalResults": 50,
    "totalPages": 5
  },
  "data": [
    {
      "recipe_id": "...",
      "name": "...",
      "ingredients": [...],
      "cooking_time": 30,
      "carbon_footprint": 1.2,
      "region": "...",
      "vegetarian": true
    }
  ]
}
```

## Testing Tips

1. **Start Simple**: Begin with Test 1-10 to verify basic functionality
2. **Check Responses**: Verify the response format matches expectations
3. **Test Errors**: Run error tests (9, 10, 22, 23) to ensure proper error handling
4. **Performance**: Try larger datasets with Tests 25-26
5. **Real Usage**: Use Tests 27-30 to simulate actual user scenarios

## Environment Variables for Postman

Create these variables in your Postman environment:
- `baseUrl`: `http://localhost:3000`
- `apiPath`: `/api/recipes`

Then use: `{{baseUrl}}{{apiPath}}/by-ingredient/`