const mongoose = require("mongoose");
const config = require('../../config/config');
const Ingredient = require('../../models/ingredientModel');
const { 
  getCarbonFootprintByIngredient,
  getIngredientsByCarbonFootprint
} = require('../../controllers/ingredientController');

// Mock the Ingredient model
jest.mock('../../models/ingredientModel');

//Mock config file
jest.mock('../../config/config', () => ({
  mongoCollections: {
    ingredientCollection: 'Ingredient_details'
  }
}));

describe("Ingredient Controllers", () => {
  let req;
  let res;
  let consoleErrorSpy;

  beforeEach(() => {
    // Mock console.error
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    // Reset all mocks
    jest.clearAllMocks();

    // Initialize mock response object
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  //----Mock "getCarbonFootprintByIngredient" Function-------------

  describe("getCarbonFootprintByIngredient", () => {
    it("should successfully return carbon footprint for an existing ingredient without quantity", async () => {
      const mockIngredient = {
        "RecipeDB Ingredient": "tomato",
        "Carbon Footprint": 1.5,
      };
      Ingredient.findOne.mockResolvedValueOnce(mockIngredient);
      req = {
        params: { name: "tomato" },
        query: {}
      };

      await getCarbonFootprintByIngredient(req, res);

      expect(Ingredient.findOne).toHaveBeenCalledWith({
        "RecipeDB Ingredient": { $regex: "tomato", $options: "i" },
      });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        ingredient: "tomato",
        carbonFootprintPerKg: 1.5,
        quantity: 1,
        totalCarbonFootprint: 1.5,
      });
    });

    it("should successfully return carbon footprint with quantity calculation", async () => {
      const mockIngredient = {
        "RecipeDB Ingredient": "tomato",
        "Carbon Footprint": 1.5,
      };
      Ingredient.findOne.mockResolvedValueOnce(mockIngredient);
      req = {
        params: { name: "tomato" },
        query: { quantity: "2" }
      };

      await getCarbonFootprintByIngredient(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        ingredient: "tomato",
        carbonFootprintPerKg: 1.5,
        quantity: 2,
        totalCarbonFootprint: 3.0
      });
    });

    it("should return 400 when ingredient name is missing", async () => {
      req = { 
        params: {},
        query: {}
      };

      await getCarbonFootprintByIngredient(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: "Ingredient name is required and cannot be empty.",
      });
    });

    it("should return 400 when quantity is invalid", async () => {
      req = { 
        params: { name: "tomato" },
        query: { quantity: "-1" }
      };

      await getCarbonFootprintByIngredient(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: "Quantity must be a valid number greater than 0.",
      });
    });

    it("should return 404 when ingredient is not found", async () => {
      Ingredient.findOne.mockResolvedValueOnce(null);
      req = {
        params: { name: "nonexistent" },
        query: {}
      };

      await getCarbonFootprintByIngredient(req, res);

      expect(Ingredient.findOne).toHaveBeenCalledWith({
        "RecipeDB Ingredient": { $regex: "nonexistent", $options: "i" },
      });
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({
        message: "Ingredient not found.",
      });
    });

    it("should return 500 when database error occurs", async () => {
      const dbError = new Error("Database error");
      Ingredient.findOne.mockRejectedValueOnce(dbError);
      req = {
        params: { name: "tomato" },
        query: {}
      };

      await getCarbonFootprintByIngredient(req, res);

      expect(Ingredient.findOne).toHaveBeenCalledWith({
        "RecipeDB Ingredient": { $regex: "tomato", $options: "i" },
      });
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({
        message: "Database error",
      });
      expect(consoleErrorSpy).toHaveBeenCalledWith(dbError);
    });
  });

  //----Mock "getIngredientsByCarbonFootprint" Function-------------
  
  describe("getIngredientsByCarbonFootprint", () => {
    beforeEach(() => {
      const mockFindChain = {
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        lean: jest.fn().mockResolvedValue([])
      };
      Ingredient.find.mockReturnValue(mockFindChain);
      Ingredient.countDocuments.mockResolvedValue(0);
    });

    it("should successfully return paginated ingredients within carbon footprint range", async () => {
      const mockIngredients = [
        { name: "tomato", "Carbon Footprint": 1.5 },
        { name: "potato", "Carbon Footprint": 2.0 },
      ];
      
      const mockFindChain = {
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        lean: jest.fn().mockResolvedValue(mockIngredients)
      };
      
      Ingredient.find.mockReturnValue(mockFindChain);
      Ingredient.countDocuments.mockResolvedValueOnce(2);

      req = {
        query: {
          min: "1.0",
          max: "2.5",
          page: "1",
          limit: "10",
        },
      };

      await getIngredientsByCarbonFootprint(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        page: 1,
        limit: 10,
        totalResults: 2,
        totalPages: 1,
        ingredients: mockIngredients,
      });
    });

    it("should return 400 when numeric query parameters are invalid", async () => {
      req = {
        query: {
          min: "invalid",
          max: "2.0",
          page: "1",
          limit: "10",
        },
      };

      await getIngredientsByCarbonFootprint(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: "Invalid query parameters. Please provide valid numeric values for min and max.",
      });
    });

    it("should return 400 when min is greater than max", async () => {
      req = {
        query: {
          min: "3.0",
          max: "2.0",
          page: "1",
          limit: "10",
        },
      };

      await getIngredientsByCarbonFootprint(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: "The min carbon footprint cannot be greater than the max carbon footprint.",
      });
    });

    it("should return 400 when invalid pagination parameters are provided", async () => {
      req = {
        query: {
          min: "1.0",
          max: "2.0",
          page: "0",
          limit: "10",
        },
      };

      await getIngredientsByCarbonFootprint(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: "Invalid pagination parameters. Page and limit must be positive integers.",
      });
    });

    it("should return 400 when neither min nor max is provided", async () => {
      req = {
        query: {
          page: "1",
          limit: "10",
        },
      };

      await getIngredientsByCarbonFootprint(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: "At least one of min or max carbon footprint must be specified.",
      });
    });

    
    
    it("should return 500 when database error occurs", async () => {
      const dbError = new Error("Database error");
      Ingredient.countDocuments.mockRejectedValueOnce(dbError);
      req = {
        query: {
          min: "1.0",
          max: "2.0",
          page: "1",
          limit: "10",
        },
      };

      await getIngredientsByCarbonFootprint(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({
        message: "Database error",
      });
      expect(consoleErrorSpy).toHaveBeenCalledWith(dbError);
    });
  });
});

