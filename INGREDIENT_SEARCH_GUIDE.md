# Advanced Ingredient Search Guide

This guide explains how to use the complex ingredient search functionality in the sustainable database API.

## Overview

The API supports two types of ingredient-based recipe searches:
1. **Basic Ingredient Search** - Using special operators
2. **Advanced Recipe Search** - Using multiple parameters

## 1. Basic Ingredient Search

**Endpoint:** `GET /api/recipes/by-ingredient/`

### Special Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `@` | Must include (AND) | `@chicken` - recipes MUST contain chicken |
| `!` | Must exclude (NOT) | `!beef` - recipes MUST NOT contain beef |
| `|` | Any of (OR) | `|fish` - recipes can contain fish (used with other OR conditions) |

### Query Parameters

- `ingredient` (string, required): Ingredient query with operators
- `include` (string, optional): Comma-separated ingredients to include (alternative to @)
- `exclude` (string, optional): Comma-separated ingredients to exclude (alternative to !)
- `page` (integer, optional): Page number (default: 1)
- `limit` (integer, optional): Results per page (default: 10)

### Examples

#### Using Operators
```
# Must have chicken AND rice, must NOT have beef
GET /api/recipes/by-ingredient/?ingredient=@chicken @rice !beef

# Must have ANY of these: chicken OR fish OR shrimp
GET /api/recipes/by-ingredient/?ingredient=|chicken |fish |shrimp

# Complex: Must have rice AND (chicken OR fish), must NOT have beef
GET /api/recipes/by-ingredient/?ingredient=@rice |chicken |fish !beef
```

#### Using Simple Parameters
```
# Must include chicken and rice, must exclude beef
GET /api/recipes/by-ingredient/?include=chicken,rice&exclude=beef

# Only exclude beef (include anything else)
GET /api/recipes/by-ingredient/?exclude=beef
```

#### Response Format
```json
{
  "success": true,
  "message": "Recipes fetched successfully",
  "query": {
    "mustHave": ["chicken", "rice"],
    "mustNotHave": ["beef"],
    "anyOf": []
  },
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalResults": 45,
    "totalPages": 5
  },
  "data": [...]
}
```

## 2. Advanced Recipe Search

**Endpoint:** `GET /api/recipes/advanced-search/`

This endpoint provides more sophisticated filtering options beyond just ingredients.

### Query Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `include` | string | Comma-separated ingredients that MUST be present | `chicken,rice` |
| `exclude` | string | Comma-separated ingredients that MUST NOT be present | `beef,pork` |
| `anyOf` | string | Comma-separated ingredients where ANY can be present | `fish,shrimp,crab` |
| `vegetarian` | boolean | Filter for vegetarian recipes | `true` or `false` |
| `region` | string | Filter by cuisine region | `Asian`, `Mediterranean` |
| `maxCookTime` | integer | Maximum cooking time in minutes | `30` |
| `minCarbonFootprint` | float | Minimum carbon footprint | `0.5` |
| `maxCarbonFootprint` | float | Maximum carbon footprint | `2.0` |
| `page` | integer | Page number | `1` |
| `limit` | integer | Results per page | `10` |

### Examples

#### Basic Ingredient Filtering
```
# Recipes with chicken and rice, but no beef
GET /api/recipes/advanced-search/?include=chicken,rice&exclude=beef

# Vegetarian recipes with any type of beans
GET /api/recipes/advanced-search/?anyOf=black beans,kidney beans,chickpeas&vegetarian=true
```

#### Complex Multi-Criteria Search
```
# Asian vegetarian recipes under 30 minutes with low carbon footprint
GET /api/recipes/advanced-search/?vegetarian=true&region=Asian&maxCookTime=30&maxCarbonFootprint=1.0

# Seafood recipes (any of these fish) excluding shellfish
GET /api/recipes/advanced-search/?anyOf=salmon,tuna,cod&exclude=shrimp,crab,lobster
```

#### Response Format
```json
{
  "success": true,
  "message": "Advanced recipe search completed successfully",
  "query": {
    "include": ["chicken", "rice"],
    "exclude": ["beef"],
    "anyOf": [],
    "filters": {
      "vegetarian": "true",
      "region": "Asian",
      "maxCookTime": "30",
      "maxCarbonFootprint": "1.0"
    }
  },
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalResults": 23,
    "totalPages": 3
  },
  "data": [...]
}
```

## Common Use Cases

### 1. Dietary Restrictions
```
# Gluten-free recipes
GET /api/recipes/advanced-search/?exclude=wheat,flour,bread&vegetarian=true

# Dairy-free recipes  
GET /api/recipes/advanced-search/?exclude=milk,cheese,butter,cream
```

### 2. Protein Alternatives
```
# Plant-based protein recipes
GET /api/recipes/advanced-search/?anyOf=tofu,tempeh,lentils,chickpeas&exclude=meat,chicken,fish

# High-protein vegetarian recipes
GET /api/recipes/advanced-search/?anyOf=eggs,beans,quinoa,nuts&vegetarian=true
```

### 3. Quick Cooking
```
# Quick Asian stir-fries
GET /api/recipes/advanced-search/?region=Asian&maxCookTime=15&anyOf=vegetables,noodles
```

### 4. Low Carbon Footprint
```
# Eco-friendly vegetarian recipes
GET /api/recipes/advanced-search/?vegetarian=true&maxCarbonFootprint=0.5
```

## Error Handling

### Invalid Queries
- Conflicting conditions (same ingredient in include and exclude)
- No search criteria specified
- Invalid parameter formats

### Example Error Response
```json
{
  "message": "Invalid query: Ingredient(s) \"chicken\" cannot be in both include (@) and exclude (!) conditions."
}
```

## Tips for Best Results

1. **Be Specific**: Use exact ingredient names when possible
2. **Use Alternatives**: For protein searches, include multiple options with `anyOf`
3. **Combine Filters**: Use multiple criteria to narrow down results effectively
4. **Test Queries**: Start with simple queries and add complexity gradually
5. **Check Results**: Use pagination to explore all matching recipes

## Migration from Old Format

If you were using the old ingredient search format, here's how to migrate:

### Old Format
```
GET /api/recipes/by-ingredient/?ingredient=chicken rice -beef
```

### New Format (Recommended)
```
GET /api/recipes/advanced-search/?include=chicken,rice&exclude=beef
```

Or using operators:
```
GET /api/recipes/by-ingredient/?ingredient=@chicken @rice !beef
```

The new format is more reliable and handles edge cases better while providing more detailed responses and error messages.