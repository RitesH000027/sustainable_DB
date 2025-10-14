const mongoose = require("mongoose");
const axios = require("axios");
const config = require("../../config/config");
const Recipe = require("../../models/recipeModel");
const Ingredient = require("../../models/ingredientModel");

// Mock the models
jest.mock("../../models/recipeModel");
jest.mock("../../models/ingredientModel");

// Import the controllers
const {
  searchRecipeByName,
  getRecipeDetails,
  searchRecipeByIngredients,
  getRecipeIngredientsCarbonFootprint,
  getRecipesByCarbonFootprintSumWithFilterRange,
} = require("../../controllers/recipeController");

// Mock axios
jest.mock("axios");

// Mock config file
jest.mock("../../config/config", () => ({
  mongoCollections: {
    recipesCollection: "Cutoff10_Recipes_Veg_Non_Veg",
    ingredientCollection: "Ingredients",
  },
}));

describe("Recipe Controllers", () => {
  let req;
  let res;
  let consoleErrorSpy;

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    jest.clearAllMocks();
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  describe("searchRecipeByName", () => {
    beforeEach(() => {
      Recipe.find.mockImplementation(() => ({
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        lean: jest.fn().mockResolvedValue([]),
      }));
    });

    it("should successfully return paginated recipes by name", async () => {
      const mockRecipes = [
        { "Recipe Name": "Spaghetti", "Recipe ID": 1 },
        { "Recipe Name": "Spaghetti Carbonara", "Recipe ID": 2 },
      ];

      Recipe.countDocuments.mockResolvedValueOnce(2);
      Recipe.find.mockImplementation(() => ({
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        lean: jest.fn().mockResolvedValue(mockRecipes),
      }));

      req = {
        query: {
          recipeName: "Spaghetti",
          page: "1",
          limit: "10",
        },
      };

      await searchRecipeByName(req, res);

      expect(Recipe.find).toHaveBeenCalledWith({
        "Recipe Name": { $regex: "Spaghetti", $options: "i" },
      });
      expect(consoleErrorSpy).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        page: 1,
        limit: 10,
        totalResults: 2,
        totalPages: 1,
        recipes: mockRecipes,
      });
    });

    it("should return 404 when no recipes are found", async () => {
      Recipe.countDocuments.mockResolvedValueOnce(0);
      Recipe.find.mockImplementation(() => ({
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        lean: jest.fn().mockResolvedValue([]),
      }));

      req = {
        query: {
          recipeName: "NonexistentRecipe",
          page: "1",
          limit: "10",
        },
      };

      await searchRecipeByName(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({
        message: "No recipes found",
      });
    });
    it("should handle invalid pagination parameters", async () => {
            req = {
              query: {
                recipeName: "Spaghetti",
                page: "0",
                limit: "10",
              },
            };
      
            await searchRecipeByName(req, res);
      
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith({
              message:
                "Invalid pagination parameters. Page and limit must be positive integers.",
            });
          });
  });

  describe("getRecipeDetails", () => {
    it("should successfully return recipe details", async () => {
      const mockRecipe = {
        "Recipe ID": 1,
        "Recipe Name": "Spaghetti",
      };
      Recipe.findOne.mockResolvedValueOnce(mockRecipe);
      req = { params: { id: "1" } };

      await getRecipeDetails(req, res);

      expect(Recipe.findOne).toHaveBeenCalledWith({ "Recipe ID": 1 });
      expect(consoleErrorSpy).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith(mockRecipe);
    });
    it("should return 400 for invalid recipe ID", async () => {
            req = { params: { id: "invalid" } };
      
            await getRecipeDetails(req, res);
      
            expect(consoleErrorSpy).not.toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({
              message: "Invalid Recipe ID",
            });
          });
    it("should return 404 when recipe is not found", async () => {
      Recipe.findOne.mockResolvedValueOnce(null);
      req = { params: { id: "999" } };

      await getRecipeDetails(req, res);

      expect(Recipe.findOne).toHaveBeenCalledWith({ "Recipe ID": 999 });
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({
        message: "Recipe not found",
      });
    });
    
  });


  describe("getRecipeIngredientsCarbonFootprint", () => {
    let req, res;
    
    beforeEach(() => {
      // Setup request and response mocks
      req = { query: {} };
      res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      
      // Reset all mocks before each test
      Recipe.findOne = jest.fn();
      Ingredient.findOne = jest.fn();
      RecipedbMappedIngCF = { findOne: jest.fn() };
    });
  
    it("should successfully calculate recipe carbon footprint by ID", async () => {
      req.query = { id: "1" };
      
      const mockRecipe = {
        "Recipe ID": 1,
        "Recipe Name": "Test Recipe",
        "Recipe Ingredient": '["tomato","garlic"]',
      };
      
      const mockIngredients = [
        { "RecipeDB Ingredient": "tomato", "Carbon Footprint": 1.5 },
        { "RecipeDB Ingredient": "garlic", "Carbon Footprint": 0.5 },
      ];
  
      Recipe.findOne.mockResolvedValueOnce(mockRecipe);
      Ingredient.findOne
        .mockResolvedValueOnce(mockIngredients[0])
        .mockResolvedValueOnce(mockIngredients[1]);
  
      await getRecipeIngredientsCarbonFootprint(req, res);
  
      expect(Recipe.findOne).toHaveBeenCalledWith({ "Recipe ID": 1 });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        recipeName: "Test Recipe",
        ingredients: [
          { ingredient: "tomato", carbonFootprint: 1.5 },
          { ingredient: "garlic", carbonFootprint: 0.5 },
        ],
        totalCarbonFootprint: 2.0,
      });
    });
    
    it("should handle recipe lookup by name", async () => {
      req.query = { recipeName: "Test Recipe" };
      
      const mockRecipe = {
        "Recipe ID": 1,
        "Recipe Name": "Test Recipe",
        "Recipe Ingredient": '["tomato","onion"]',
      };
      
      const mockIngredients = [
        { "RecipeDB Ingredient": "tomato", "Carbon Footprint": 1.5 },
        { "RecipeDB Ingredient": "onion", "Carbon Footprint": 0.8 },
      ];
  
      Recipe.findOne.mockResolvedValueOnce(mockRecipe);
      Ingredient.findOne
        .mockResolvedValueOnce(mockIngredients[0])
        .mockResolvedValueOnce(mockIngredients[1]);
  
      await getRecipeIngredientsCarbonFootprint(req, res);
  
      expect(Recipe.findOne).toHaveBeenCalledWith({
        "Recipe Name": { $regex: "Test Recipe", $options: "i" },
      });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        recipeName: "Test Recipe",
        ingredients: [
          { ingredient: "tomato", carbonFootprint: 1.5 },
          { ingredient: "onion", carbonFootprint: 0.8 },
        ],
        totalCarbonFootprint: 2.3,
      });
    });
    
    it("should return 400 when no id or name provided", async () => {
      await getRecipeIngredientsCarbonFootprint(req, res);
      
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({ 
        message: "Either Recipe ID or Name is required" 
      });
    });
    
    it("should return 400 when invalid ID is provided", async () => {
      req.query = { id: "invalid" };
      
      await getRecipeIngredientsCarbonFootprint(req, res);
      
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({ 
        message: "Invalid Recipe ID" 
      });
    });
    
    it("should handle invalid recipe ingredient format", async () => {
      req.query = { id: "2" };
      
      const mockRecipe = {
        "Recipe ID": 2,
        "Recipe Name": "Bad Recipe",
        "Recipe Ingredient": '{malformed json}',
      };
      
      Recipe.findOne.mockResolvedValueOnce(mockRecipe);
      
      await getRecipeIngredientsCarbonFootprint(req, res);
      
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({ 
        message: "Invalid Recipe Ingredient format" 
      });
    });
    
    it("should handle empty ingredients list", async () => {
      req.query = { id: "3" };
      
      const mockRecipe = {
        "Recipe ID": 3,
        "Recipe Name": "Empty Recipe",
        "Recipe Ingredient": '[]',
      };
      
      Recipe.findOne.mockResolvedValueOnce(mockRecipe);
      
      await getRecipeIngredientsCarbonFootprint(req, res);
      
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({ 
        message: "No ingredients found in the recipe" 
      });
    });
  
    
    it("should handle internal server error", async () => {
      req.query = { id: "6" };
      
      // Simulate database error
      Recipe.findOne.mockRejectedValueOnce(new Error("Database connection error"));
      
      await getRecipeIngredientsCarbonFootprint(req, res);
      
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({ 
        message: "Internal Server Error" 
      });
    });
  });

  describe("getRecipesByCarbonFootprintSumWithFilterRange", () => {
    beforeEach(() => {
      Recipe.find.mockImplementation(() => ({
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        lean: jest.fn().mockResolvedValue([]),
      }));
    });

    it("should successfully return recipes within carbon footprint range", async () => {
      const mockRecipes = [
        { "Recipe Name": "Low Carbon Pasta", Carbon_footprint_sum: 5.0 },
        { "Recipe Name": "Medium Carbon Stew", Carbon_footprint_sum: 7.5 },
      ];

      Recipe.countDocuments.mockResolvedValueOnce(2);
      Recipe.find.mockImplementation(() => ({
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        lean: jest.fn().mockResolvedValue(mockRecipes),
      }));

      req = {
        query: {
          min: "5.0",
          max: "10.0",
          page: "1",
          limit: "10",
        },
      };

      await getRecipesByCarbonFootprintSumWithFilterRange(req, res);

      expect(Recipe.find).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        page: 1,
        limit: 10,
        totalResults: 2,
        totalPages: 1,
        recipes: mockRecipes,
      });
    });

    it("should return 400 when no recipes are found in range", async () => {
      Recipe.countDocuments.mockResolvedValueOnce(0);
      Recipe.find.mockImplementation(() => ({
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        lean: jest.fn().mockResolvedValue([]),
      }));

      req = {
        query: {
          min: "100.0",
          max: "200.0",
          page: "1",
          limit: "10",
        },
      };

      await getRecipesByCarbonFootprintSumWithFilterRange(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: "Page number exceeds total pages. Maximum page number is 0.",
      });
    });
  });
});