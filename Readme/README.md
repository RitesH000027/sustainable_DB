![API Flowchart](Assests/Flow_Chart_RDB2.png)


POSTMAN DOCUMENTATION LINK
https://documenter.getpostman.com/view/40777020/2sAYk8w3qB

# Node.js and Express Project Setup

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

### 1. Clone the Repository
```sh
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Server using Nodemon
```sh
npm run nodemon
```


## Available Scripts

- `npm start` - Runs the server normally
- `npm run nodemon` - Starts the server with Nodemon for live reload

## Notes
- Ensure that you have `nodemon` installed globally or as a dev dependency. If not installed, run:
  ```sh
  npm install -g nodemon
  ```
  or
  ```sh
  npm install --save-dev nodemon
  ```

## **Recipe API Endpoints**

### **1. Search Recipes by title** - (Implemented)
- **Endpoint:** `GET api/recipe-bytitle/recipeByTitle`
- **Query Parameters:**
  - `title` (string, required): Recipe name or title.
- **Description:** Search for recipes by name/title . The `recipetitle` parameter is used to search for recipes that match the name.
- **Example Request:**
  ```
  GET /api/recipe-bytitle/recipeByTitle?title=Dukkah)
  ```
- **Example Response:**
  ```json
 
    "success": true,
    "message": "Recipes fetched successfully.",
    "data": [
        {
            "_id": "6405721fa13d0d2d35890d6d",
            "Recipe_id": "2614",
            "Calories": "45.0",
            "cook_time": "5",
            "prep_time": "20",
            "servings": "24",
            "Recipe_title": "Dukkah",
            "total_time": "25",
            "Region": "Middle Eastern",
            "Continent": "African"
        },
        {
            "_id": "64057243a13d0d2d35894c9e",
            "Recipe_id": "47216",
            "Calories": "96.9",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "Dukkah",
            "total_time": "10",
            "Region": "Middle Eastern",
            "Continent": "African"
        },
        {
            "_id": "64057243a13d0d2d35894ca2",
            "Recipe_id": "47220",
            "Calories": "341.6",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4 eggs",
            "Recipe_title": "Egyptian Eggs With Dukkah",
            "total_time": "15",
            "Region": "Middle Eastern",
            "Continent": "African"
        },
        {
            "_id": "64057243a13d0d2d35894cee",
            "Recipe_id": "47296",
            "Calories": "141.0",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "1 dip",
            "Recipe_title": "Cousin Pete's Yummiest Dukkah (Nut Dip)",
            "total_time": "25",
            "Region": "Middle Eastern",
            "Continent": "African"
        },
        {
            "_id": "64057243a13d0d2d35894cf7",
            "Recipe_id": "47305",
            "Calories": "260.5",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "Chargrilled Vegetable and Pita Salad With Feta and Dukkah",
            "total_time": "20",
            "Region": "Middle Eastern",
            "Continent": "African"
        },
        {
            "_id": "64057243a13d0d2d35894d2f",
            "Recipe_id": "47361",
            "Calories": "1007.7",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "2 cups",
            "Recipe_title": "Dukkah",
            "total_time": "20",
            "Region": "Middle Eastern",
            "Continent": "African"
        },
        {
            "_id": "64057245a13d0d2d35895308",
            "Recipe_id": "48859",
            "Calories": "188.2",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "16 balls",
            "Recipe_title": "Labna Balls Rolled in Tunisian Dukkah",
            "total_time": "1470",
            "Region": "Rest Africa",
            "Continent": "African"
        },
        {
            "_id": "64057245a13d0d2d358953b2",
            "Recipe_id": "49029",
            "Calories": "790.2",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "3/4 cup",
            "Recipe_title": "Almond Dukkah",
            "total_time": "22",
            "Region": "Rest Africa",
            "Continent": "African"
        },
        {
            "_id": "6405724aa13d0d2d358957b1",
            "Recipe_id": "50053",
            "Calories": "196.1",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "6",
            "Recipe_title": "Brie With Dukkah",
            "total_time": "20",
            "Region": "Northern Africa",
            "Continent": "African"
        },
        {
            "_id": "6405725ea13d0d2d35897f3d",
            "Recipe_id": "60187",
            "Calories": "277.5",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "6",
            "Recipe_title": "Dukkah",
            "total_time": "30",
            "Region": "Middle Eastern",
            "Continent": "Asian"
        },
        {
            "_id": "64057262a13d0d2d3589840c",
            "Recipe_id": "61418",
            "Calories": "103.2",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4 1/2 pint jars",
            "Recipe_title": "Darcey's Special Dukkah",
            "total_time": "20",
            "Region": "Middle Eastern",
            "Continent": "Asian"
        },
        {
            "_id": "64057262a13d0d2d3589855c",
            "Recipe_id": "61754",
            "Calories": "76.9",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "24 skewers",
            "Recipe_title": "Chicken Skewers With Dukkah Crust and Balsamic Reduction",
            "total_time": "60",
            "Region": "Middle Eastern",
            "Continent": "Asian"
        },
        {
            "_id": "64057277a13d0d2d3589a553",
            "Recipe_id": "69938",
            "Calories": "2866.2",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "1 jar",
            "Recipe_title": "Dukkah",
            "total_time": "60",
            "Region": "Middle Eastern",
            "Continent": "Asian"
        },
        {
            "_id": "6405727da13d0d2d3589ae5c",
            "Recipe_id": "72252",
            "Calories": "218.3",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "3 cups",
            "Recipe_title": "Dukkah (Spicy Nut Mix for Dipping With Flatbread)",
            "total_time": "35",
            "Region": "Indian Subcontinent",
            "Continent": "Asian"
        },
        {
            "_id": "6405727da13d0d2d3589b020",
            "Recipe_id": "72704",
            "Calories": "239.4",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "8",
            "Recipe_title": "Prawns With Chilli Mayo & Pistachio Dukkah",
            "total_time": "20",
            "Region": "Australian",
            "Continent": "Australasian"
        },
        {
            "_id": "6405727fa13d0d2d3589b559",
            "Recipe_id": "74043",
            "Calories": "5545.7",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "1 loaf",
            "Recipe_title": "Garlic  Dukkah  Bread",
            "total_time": "40",
            "Region": "Australian",
            "Continent": "Australasian"
        },
        {
            "_id": "64057286a13d0d2d3589bf35",
            "Recipe_id": "76569",
            "Calories": "346.9",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "6",
            "Recipe_title": "Dukkah Crusted Lamb, Apricot Salsa, Herb Salad With Chermoula D",
            "total_time": "40",
            "Region": "Australian",
            "Continent": "Australasian"
        },
        {
            "_id": "64057288a13d0d2d3589c355",
            "Recipe_id": "77625",
            "Calories": "260.6",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "Dukkah Spiced Carrot & Feta Salad",
            "total_time": "40",
            "Region": "Australian",
            "Continent": "Australasian"
        }
    ]


  ```
- **Error Handling:**
  - If `recipeName` is not provided:
    ```json
    {
       "success": false,
       "message": "Recipe title is required."
    }
  - If no recipes match the search criteria:
    ```json
    {
      "message": "No recipes found"
    }
    ```
  - Internal server errors:
    ```json
    {
      "message": "Internal Server Error"
    }
    ```
- **Response time**:
  `300 ms `
  
---
### 2. Get Recipe of Day- (Implemented)

**Endpoint**: `GET /recipe/recipeofday`

**Parameters**:  
- None.

**Description**: Fetch the detail of any recipe from the Database and list it,changes the recipe when the date changes.

**Sample Request**:  
`GET /recipe/recipeofday`

**Example Response**:
```json
{
   "success": "true",
    "message": "Recipe fetched successfully.",
    "payload": {
        "data": {
            "_id": "640572b7a13d0d2d3589fb04",
            "Recipe_id": "91897",
            "Calories": "2710.2",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "1 loaf",
            "Recipe_title": "Apricot Banana Bread",
            "total_time": "72",
            "url": "http://www.geniuskitchen.com/recipe/apricot-banana-bread-27313",
            "Region": "Caribbean",
            "Sub_region": "Rest Caribbean",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/27/31/3/picWWB1AP.jpg",
            "Carbohydrate, by difference (g)": "426.4682",
            "Energy (kcal)": "3272.378",
            "Protein (g)": "47.1232",
            "Total lipid (fat) (g)": "161.8544",
            "Utensils": "pan||pan",
            "Processes": "cream||add||mix||mix||add||stir||pour||bake||cool",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        }
    }
}
```
- **Response time**:
  `48 ms `
---

### 3. Get Recipe by Time range - (Implemented)

**Endpoint**: `GET /api/recipes/range`

**Parameters**:  
- `min` (integer,required): Minimum time.
- `max` (integer,required): Maximum time.
- `field` (string, required): Which time (total_time,cook_time,prep_time).
- `page` (integer, optional,default=1): Page number.
- `limit` (integer, optional,default=10): Number of instances.

**Description**: Fetch the recipe details filtered by the specific time range.

**Sample Request**:  
`GET /api/recipes/range?min=15&max=60&field=total_time&page=10&limit=10`

**Example Response**:
```json
 "success": true,
    "page": 10,
    "totalPages": 6782,
    "totalResults": 67816,
    "data": [
        {
            "_id": "6405721fa13d0d2d35890e4b",
            "Recipe_id": "2836",
            "cook_time": "32",
            "prep_time": "0",
            "Recipe_title": "Tikil Gomen (Ethiopian Cabbage)",
            "total_time": 32,
            "Region": "Rest Africa",
            "Sub_region": "Nigerian",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890e4c",
            "Recipe_id": "2837",
            "cook_time": "0",
            "prep_time": "20",
            "Recipe_title": "Iranian _ Persian Salad Shirazi",
            "total_time": 20,
            "Region": "Middle Eastern",
            "Sub_region": "Rest Middle Eastern",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890e4e",
            "Recipe_id": "2839",
            "cook_time": "35",
            "prep_time": "20",
            "Recipe_title": "Lamb and Asparagus Stew",
            "total_time": 55,
            "Region": "Middle Eastern",
            "Sub_region": "Rest Middle Eastern",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890e50",
            "Recipe_id": "2841",
            "cook_time": "0",
            "prep_time": "20",
            "Recipe_title": "Persian-Style Tomato Avocado Salad",
            "total_time": 20,
            "Region": "Middle Eastern",
            "Sub_region": "Rest Middle Eastern",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890e51",
            "Recipe_id": "2842",
            "cook_time": "0",
            "prep_time": "20",
            "Recipe_title": "Shiraz Salad",
            "total_time": 20,
            "Region": "Middle Eastern",
            "Sub_region": "Rest Middle Eastern",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890e53",
            "Recipe_id": "2844",
            "cook_time": "30",
            "prep_time": "15",
            "Recipe_title": "Persian Fesenjun",
            "total_time": 45,
            "Region": "Middle Eastern",
            "Sub_region": "Rest Middle Eastern",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890e60",
            "Recipe_id": "2857",
            "cook_time": "0",
            "prep_time": "15",
            "Recipe_title": "Jarjeer (Arugula) Salad",
            "total_time": 15,
            "Region": "Middle Eastern",
            "Sub_region": "Rest Middle Eastern",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890e62",
            "Recipe_id": "2859",
            "cook_time": "16",
            "prep_time": "10",
            "Recipe_title": "Wheat Flour Halva",
            "total_time": 46,
            "Region": "Middle Eastern",
            "Sub_region": "Rest Middle Eastern",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890e63",
            "Recipe_id": "2860",
            "cook_time": "35",
            "prep_time": "10",
            "Recipe_title": "Eggplant Mirza",
            "total_time": 60,
            "Region": "Middle Eastern",
            "Sub_region": "Rest Middle Eastern",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890e64",
            "Recipe_id": "2861",
            "cook_time": "15",
            "prep_time": "15",
            "Recipe_title": "Iskender Kebab",
            "total_time": 30,
            "Region": "Middle Eastern",
            "Sub_region": "Rest Middle Eastern",
            "Source": "AllRecipes"
        }
    ]
```
- **Response time**: 
   `440 ms`
---

### **4. Get Recipe by Calories Range**(Implemented)

- **Endpoint:** `GET /api/recipes-calories/calories`

- **Query Parameters:**
  - **minCalories** (integer, required): The minimum number of calories.
  - **maxCalories** (integer, required): The maximum number of calories.
  - **page** (integer, optional): Specifies the page number for pagination (default is 1).
  - **limit** (integer, optional): Specifies the number of recipes to return per page (default is 10).

**Sample Request**:  
`GET /api/recipes-calories/calories?minCalories=10&maxCalories=30&limit=10`

**Example Response:**
  ```json
  "success": true,
    "message": "Recipes fetched successfully",
    "data": [
        {
            "_id": "6405721fa13d0d2d35890d8c",
            "Calories": "10.0",
            "cook_time": "8",
            "prep_time": "5",
            "Recipe_title": "Guinean Okra Sauce",
            "Region": "Rest Africa",
            "img_url": "https://images.media-allrecipes.com/images/79591.png"
        },
        {
            "_id": "6405721fa13d0d2d35890d8e",
            "Calories": "14.0",
            "cook_time": "20",
            "prep_time": "10",
            "Recipe_title": "Best Hot Sauce",
            "Region": "Rest Africa",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/2513802.jpg"
        },
        {
            "_id": "6405721fa13d0d2d35890e03",
            "Calories": "10.0",
            "cook_time": "0",
            "prep_time": "40",
            "Recipe_title": "Tunisian Harissa",
            "Region": "Rest Africa",
            "img_url": "https://images.media-allrecipes.com/userphotos/250x250/651700.jpg"
        },
        {
            "_id": "6405721fa13d0d2d35890e2d",
            "Calories": "28.0",
            "cook_time": "0",
            "prep_time": "20",
            "Recipe_title": "Harissa",
            "Region": "Rest Africa",
            "img_url": "https://images.media-allrecipes.com/userphotos/250x250/776212.jpg"
        },
        {
            "_id": "6405721fa13d0d2d35890e40",
            "Calories": "25.0",
            "cook_time": "0",
            "prep_time": "10",
            "Recipe_title": "Berbere (Ethiopian Spice)",
            "Region": "Rest Africa",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/2376305.jpg"
        },
        {
            "_id": "6405721fa13d0d2d35890ec9",
            "Calories": "25.0",
            "cook_time": "10",
            "prep_time": "120",
            "Recipe_title": "Wontons for Wonton Noodle Soup",
            "Region": "Chinese and Mongolian",
            "img_url": "https://images.media-allrecipes.com/userphotos/250x250/409196.jpg"
        },
        {
            "_id": "6405721fa13d0d2d35890ecd",
            "Calories": "26.0",
            "cook_time": "0",
            "prep_time": "0",
            "Recipe_title": "Egg Drop Soup II",
            "Region": "Chinese and Mongolian",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/2918090.jpg"
        },
        {
            "_id": "6405721fa13d0d2d35890edf",
            "Calories": "28.0",
            "cook_time": "50",
            "prep_time": "50",
            "Recipe_title": "Chinese Steamed Buns with BBQ Pork Filling",
            "Region": "Chinese and Mongolian",
            "img_url": "https://images.media-allrecipes.com/userphotos/250x250/31733.jpg"
        },
        {
            "_id": "6405721fa13d0d2d35890ee6",
            "Calories": "22.0",
            "cook_time": "0",
            "prep_time": "20",
            "Recipe_title": "Overnight Chinese Daikon Radish Pickles",
            "Region": "Chinese and Mongolian",
            "img_url": "https://images.media-allrecipes.com/userphotos/250x250/199612.jpg"
        },
        {
            "_id": "6405721fa13d0d2d35890ef0",
            "Calories": "16.0",
            "cook_time": "0",
            "prep_time": "5",
            "Recipe_title": "Chinese-Style Five Spice Rub",
            "Region": "Chinese and Mongolian",
            "img_url": "https://images.media-allrecipes.com/userphotos/250x250/855861.jpg"
        }
    ]
  ```

**Error Responses:**
1. **The mincalories is greater than maxcalories:**
   - **Status Code:** `400 Bad Request`
   - **Response Body:**
     ```json
     {
        "success": false,
        "message": "minCalories cannot be greater than maxCalories"
     }
     ```


2. **No Recipes Found:**
   - **Status Code:** `200 OK`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```

3. **Internal Server Error:**
   - **Status Code:** `500 Internal Server Error`
   - **Response Body:**
     ```json
     {
       "message": "Internal Server Error"
     }
     ```
**Response Time**
   `53ms`  
   
### **5. Get Recipe by Carbohydrate Range**(Implemented)

- **Endpoint:** `GET /api/recipe-carbo/recipes-by-carbs`

- **Query Parameters:**
  - **minCarbs** (integer, required): The minimum number of carbs by gram.
  - **maxnCarbs** (integer, required): The maximum number of carbs by gram.
  - **limit** (integer, optional): Specifies the number of recipes to return per page (default is 10).

**Sample Request**:  
`GET /api/recipe-carbo/recipes-by-carbs?minCarbs=1000&maxCarbs=2000&limit=20`

**Example Response:**
  ```json
 "success": true,
    "message": "Recipes fetched successfully",
    "data": [
        {
            "_id": "6405721fa13d0d2d35890e46",
            "Recipe_id": "2831",
            "Calories": "72.0",
            "cook_time": "105",
            "prep_time": "20",
            "servings": "40",
            "Recipe_title": "Roasted Tikel Gomen",
            "total_time": "125",
            "url": "http://allrecipes.com/recipe/246876/roasted-tikel-gomen/",
            "Region": "Rest Africa",
            "Continent": "African",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/3518516.jpg",
            "Carbohydrate, by difference (g)": "1773.0965",
            "Processes": "preheat||drizzle||combine||sprinkle||mix||bake||stirring||season"
        },
        {
            "_id": "6405721fa13d0d2d35890f4a",
            "Recipe_id": "3091",
            "Calories": "161.0",
            "cook_time": "360",
            "prep_time": "15",
            "servings": "6",
            "Recipe_title": "Peking Pork Chops",
            "total_time": "375",
            "url": "http://allrecipes.com/recipe/22219/peking-pork-chops/",
            "Region": "Chinese and Mongolian",
            "Continent": "Asian",
            "img_url": "https://images.media-allrecipes.com/userphotos/250x250/687851.jpg",
            "Carbohydrate, by difference (g)": "1058.7611",
            "Processes": "place||mix||pour||cover||cook||season"
        },
        {
            "_id": "64057221a13d0d2d35891173",
            "Recipe_id": "3644",
            "Calories": "385.0",
            "cook_time": "15",
            "prep_time": "10",
            "servings": "4",
            "Recipe_title": "Vermicelli Pudding",
            "total_time": "40",
            "url": "http://allrecipes.com/recipe/228550/vermicelli-pudding/",
            "Region": "Middle Eastern",
            "Continent": "Asian",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1207154.jpg",
            "Carbohydrate, by difference (g)": "1159.3042",
            "Processes": "boil||simmer||stir||simmer||remove||heat||stand||stir"
        },
        {
            "_id": "64057221a13d0d2d35891222",
            "Recipe_id": "3819",
            "Calories": "415.0",
            "cook_time": "25",
            "prep_time": "15",
            "servings": "15",
            "Recipe_title": "Layali Libnan (Lebanese Nights)",
            "total_time": "520",
            "url": "http://allrecipes.com/recipe/34791/layali-libnan-lebanese-nights/",
            "Region": "Middle Eastern",
            "Continent": "Asian",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/33875.jpg",
            "Carbohydrate, by difference (g)": "1091.0842",
            "Processes": "pour||boil||heat||reduce||heat||pour||stream||stirring||stir||cook||remove||stir||cool||cover||refrigerate||heat||heat||stir||cook||remove||stir||stir||add||boil||simmer||remove||heat||cover||chill||serve||spread||cream||sprinkle||cut||serve"
        },
        {
            "_id": "64057221a13d0d2d3589125e",
            "Recipe_id": "3879",
            "Calories": "463.0",
            "cook_time": "45",
            "prep_time": "15",
            "servings": "12",
            "Recipe_title": "Biko",
            "total_time": "660",
            "url": "http://allrecipes.com/recipe/151155/biko/",
            "Region": "Southeast Asian",
            "Continent": "Asian",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1546028.jpg",
            "Carbohydrate, by difference (g)": "1178.71",
            "Processes": "soak||preheat||grease||cook||stirring||pour||stir||boil||bake||cool||cut||serve"
        },
        {
            "_id": "64057221a13d0d2d35891384",
            "Recipe_id": "4173",
            "Calories": "51.0",
            "cook_time": "120",
            "prep_time": "480",
            "servings": "96",
            "Recipe_title": "Spicy Peach Chutney",
            "total_time": "600",
            "url": "http://allrecipes.com/recipe/75320/spicy-peach-chutney/",
            "Region": "Indian Subcontinent",
            "Continent": "Asian",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1039317.jpg",
            "Carbohydrate, by difference (g)": "1210.9855",
            "Processes": "stir||wrap||boil||cook||stir||remove||wipe||seal||process||cover"
        },
        {
            "_id": "64057223a13d0d2d35891575",
            "Recipe_id": "4670",
            "Calories": "75.0",
            "cook_time": "20",
            "prep_time": "20",
            "servings": "10",
            "Recipe_title": "Marian's Pumpkin Soup",
            "total_time": "40",
            "url": "http://allrecipes.com/recipe/143010/marians-pumpkin-soup/",
            "Region": "Indian Subcontinent",
            "Continent": "Asian",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1070713.jpg",
            "Carbohydrate, by difference (g)": "1186.2905",
            "Processes": "melt||heat||add||cook||stir||transfer||stir||cook||remove||heat||stir||transfer||blend||garnish"
        },
        {
            "_id": "64057223a13d0d2d358915b3",
            "Recipe_id": "4732",
            "Calories": "142.0",
            "cook_time": "300",
            "prep_time": "10",
            "servings": "6",
            "Recipe_title": "Korean Slow Cooker Pork Chops",
            "total_time": "310",
            "url": "http://allrecipes.com/recipe/90303/korean-slow-cooker-pork-chops/",
            "Region": "Korean",
            "Continent": "Asian",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1428275.jpg",
            "Carbohydrate, by difference (g)": "1007.3848",
            "Processes": "stir||season||place||cover||cook"
        },
        {
            "_id": "64057223a13d0d2d35891692",
            "Recipe_id": "4955",
            "Calories": "256.0",
            "cook_time": "60",
            "prep_time": "15",
            "servings": "24",
            "Recipe_title": "Butter Mochi",
            "total_time": "195",
            "url": "http://allrecipes.com/recipe/174170/butter-mochi/",
            "Region": "Japanese",
            "Continent": "Asian",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/814285.jpg",
            "Carbohydrate, by difference (g)": "1027.6838",
            "Processes": "preheat||grease||whisk||beat||smooth||whisk||stir||scrape||smooth||bake||cool||serve"
        },
        {
            "_id": "64057223a13d0d2d358916fe",
            "Recipe_id": "5063",
            "Calories": "920.0",
            "cook_time": "10",
            "prep_time": "5",
            "servings": "6",
            "Recipe_title": "Tempura Shrimp",
            "total_time": "135",
            "url": "http://allrecipes.com/recipe/12834/tempura-shrimp/",
            "Region": "Japanese",
            "Continent": "Asian",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1071530.jpg",
            "Carbohydrate, by difference (g)": "1955.4975",
            "Processes": "refrigerate||stir||heat||heat||stirring||boil||heat||dip||fry||drain||serve"
        },
        {
            "_id": "64057223a13d0d2d35891751",
            "Recipe_id": "5146",
            "Calories": "394.0",
            "cook_time": "40",
            "prep_time": "10",
            "servings": "16",
            "Recipe_title": "Sweet Rice (Zarda)",
            "total_time": "50",
            "url": "http://allrecipes.com/recipe/22750/sweet-rice-zarda/",
            "Region": "Indian Subcontinent",
            "Continent": "Asian",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1662003.jpg",
            "Carbohydrate, by difference (g)": "1400.9035",
            "Processes": "place||cover||boil||stir||heat||cover||simmer||heat||cook||stir||cover||cook||remove||heat||stir||cream||zest||serve"
        },
        {
            "_id": "64057223a13d0d2d358918d2",
            "Recipe_id": "5531",
            "Calories": "116.0",
            "cook_time": "45",
            "prep_time": "30",
            "servings": "64",
            "Recipe_title": "Kumquat Marmalade",
            "total_time": "795",
            "url": "http://allrecipes.com/recipe/46310/kumquat-marmalade/",
            "Region": "Australian",
            "Continent": "Australasian",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/10074.jpg",
            "Carbohydrate, by difference (g)": "1909.4044",
            "Processes": "chop||add||stand||boil||heat||simmer||remove||heat||add||mix||boil||boil||stirring||remove||heat||transfer||process||refrigerate"
        },
        {
            "_id": "64057226a13d0d2d35891a1f",
            "Recipe_id": "5864",
            "Calories": "626.0",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "Southwest BBQ Chicken Tacos",
            "total_time": "0",
            "url": "http://allrecipes.com/recipe/255692/southwest-bbq-chicken-tacos/",
            "Region": "Mexican",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4023537.jpg",
            "Carbohydrate, by difference (g)": "1062.8344",
            "Processes": "combine||heat||add||cook||stir||add||cook||heat||top||serve"
        },
        {
            "_id": "64057226a13d0d2d35891a2f",
            "Recipe_id": "5880",
            "Calories": "436.0",
            "cook_time": "285",
            "prep_time": "60",
            "servings": "36",
            "Recipe_title": "Sylvia's Pork Tamales",
            "total_time": "405",
            "url": "http://allrecipes.com/recipe/235668/sylvias-pork-tamales/",
            "Region": "Mexican",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1078062.jpg",
            "Carbohydrate, by difference (g)": "1760.7546",
            "Processes": "place||cover||simmer||strain||heat||heat||cook||stir||boil||add||boil||drain||cool||blend||smooth||stir||melt||heat||stir||stir||remove||soak||drain||cover||mix||lard||select||spread||fold||fold||place||boil||add||cook||set"
        },
        {
            "_id": "64057226a13d0d2d35891b07",
            "Recipe_id": "6096",
            "Calories": "557.0",
            "cook_time": "35",
            "prep_time": "30",
            "servings": "16",
            "Recipe_title": "Make Ahead Lunch Wraps",
            "total_time": "65",
            "url": "http://allrecipes.com/recipe/58246/make-ahead-lunch-wraps/",
            "Region": "Mexican",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1053890.jpg",
            "Carbohydrate, by difference (g)": "1021.8721",
            "Processes": "combine||boil||reduce||heat||cover||simmer||remove||heat||cool||place||rinse||add||mix||transfer||mix||divide||wrap||place||reheat"
        },
        {
            "_id": "64057226a13d0d2d35891bc2",
            "Recipe_id": "6283",
            "Calories": "534.0",
            "cook_time": "5",
            "prep_time": "20",
            "servings": "8",
            "Recipe_title": "Refrigerator Lemon Margarita Pie",
            "total_time": "85",
            "url": "http://allrecipes.com/recipe/221231/refrigerator-lemon-margarita-pie/",
            "Region": "Mexican",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/874792.jpg",
            "Carbohydrate, by difference (g)": "1683.2823",
            "Processes": "mix||press||whisk||stir||boil||heat||stirring||remove||cool||whisk||refrigerate"
        },
        {
            "_id": "64057226a13d0d2d35891cd1",
            "Recipe_id": "6555",
            "Calories": "496.0",
            "cook_time": "35",
            "prep_time": "20",
            "servings": "10",
            "Recipe_title": "Raspados de Tamarindo (Tamarind Ices)",
            "total_time": "55",
            "url": "http://allrecipes.com/recipe/231800/raspados-de-tamarindo-tamarind-ices/",
            "Region": "Mexican",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/images/79591.png",
            "Carbohydrate, by difference (g)": "1381.64",
            "Processes": "place||cover||boil||reduce||heat||simmer||strain||add||place||cook||stir||add||divide||pour||serve"
        },
        {
            "_id": "64057229a13d0d2d35891d51",
            "Recipe_id": "6683",
            "Calories": "555.0",
            "cook_time": "20",
            "prep_time": "80",
            "servings": "8",
            "Recipe_title": "Amazing Southwest Cilantro Lime Mango Grilled Chicken Sandwiches",
            "total_time": "100",
            "url": "http://allrecipes.com/recipe/143458/amazing-southwest-cilantro-lime-mango-grilled-chicken-sandwiches/",
            "Region": "Mexican",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/2026889.jpg",
            "Carbohydrate, by difference (g)": "1226.1741",
            "Processes": "place||stir||place||pour||seal||coat||refrigerate||combine||cover||refrigerate||prepare||set||whisk||cover||refrigerate||preheat||heat||remove||slice||spread||top"
        },
        {
            "_id": "64057229a13d0d2d35891dde",
            "Recipe_id": "6824",
            "Calories": "617.0",
            "cook_time": "60",
            "prep_time": "25",
            "servings": "10",
            "Recipe_title": "Paella",
            "total_time": "85",
            "url": "http://allrecipes.com/recipe/34413/paella/",
            "Region": "Mexican",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/29333.jpg",
            "Carbohydrate, by difference (g)": "1547.5198",
            "Processes": "heat||heat||fry||remove||fry||remove||stir||cook||stir||mix||add||cover||simmer||add||simmer||stir||cover||cook"
        },
        {
            "_id": "64057229a13d0d2d35891fea",
            "Recipe_id": "7348",
            "Calories": "709.0",
            "cook_time": "20",
            "prep_time": "25",
            "servings": "4",
            "Recipe_title": "Cheese and Beef Enchiladas",
            "total_time": "45",
            "url": "http://allrecipes.com/recipe/213918/cheese-and-beef-enchiladas/",
            "Region": "Mexican",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/250x250/990939.jpg",
            "Carbohydrate, by difference (g)": "1050.893",
            "Processes": "heat||heat||add||cook||stirring||drain||add||simmer||stirring||sprinkle||place||cover||uncover||sprinkle||bake||serve"
        }
    ]
  ```

**Error Responses:**
1. **The mincarbs is greater than maxcarbs:**
   - **Status Code:** `400 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found in the carbohydrate range"
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 OK`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```

3. **Internal Server Error:**
   - **Status Code:** `500 Internal Server Error`
   - **Response Body:**
     ```json
     {
       "message": "Internal Server Error"
     }
     ```
**Response Time**
   `70ms`  


### **6. Get Recipe by Method**(Implemented)

- **Endpoint:** `GET /api/recipe-method/{method}`

- **Query Parameters:**
  - **method** (string, required): The method of cooking.
  - **page** (integer, optional): Specifies the page number default is 1.

**Sample Request**:  
`GET api/recipes-method/cook?page=2`

**Example Response:**
  ```json
  "status": "success",
    "data": [
        {
            "_id": "6405731ea13d0d2d358ab0be",
            "Recipe_id": "138451",
            "Calories": "253.0",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "\"Rise and Shine\" German Fruit Pancake",
            "total_time": "45",
            "url": "http://www.geniuskitchen.com/recipe/rise-and-shine-german-fruit-pancake-71457",
            "Region": "Deutschland ",
            "Sub_region": "German",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/71/45/7/picuEYhr8.jpg",
            "Carbohydrate, by difference (g)": "74.0852",
            "Energy (kcal)": "808.6013",
            "Protein (g)": "22.964",
            "Total lipid (fat) (g)": "48.2295",
            "Utensils": "oven||mixer||whisk||skillet||skillet||oven||bowl||oven||pan",
            "Processes": "preheat||beat||whisk||stir||melt||bake||remove||fill||dust||sprinkle||serve||cook",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057259a13d0d2d35897e5b",
            "Recipe_id": "59961",
            "Calories": "649.6",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "02-Apr",
            "Recipe_title": "\"Some Like It Hot\"",
            "total_time": "70",
            "url": "http://www.geniuskitchen.com/recipe/some-like-it-hot-64045",
            "Region": "Southeast Asian",
            "Sub_region": "Indonesian",
            "Continent": "Asian",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "97.8363",
            "Energy (kcal)": "1213.9001",
            "Protein (g)": "93.2893",
            "Total lipid (fat) (g)": "59.9046",
            "Utensils": "pan||pan||pan||pan||dish||tablespoon",
            "Processes": "start||dry||burn||remove||cool||mix||set||heat||add||add||fry||add||simmer||heat||fry||add||mix||stir||add||mix||add||add||sprout||cook||transfer||sprinkle",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572c0a13d0d2d358a0879",
            "Recipe_id": "95349",
            "Calories": "179.3",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "03-Apr",
            "Recipe_title": "\"Stove Top\" BBQ (Beef or Pork Ribs)",
            "total_time": "150",
            "url": "http://www.geniuskitchen.com/recipe/stove-top-bbq-beef-or-pork-ribs-83133",
            "Region": "South American",
            "Sub_region": "Argentine",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/83/13/3/picJ8no8h.jpg",
            "Carbohydrate, by difference (g)": "53.9367",
            "Energy (kcal)": "327.862",
            "Protein (g)": "1.3369",
            "Total lipid (fat) (g)": "13.8558",
            "Utensils": "pot||pot||bowl||pot",
            "Processes": "cut||sprinkle||remove||combine||mix||add||cover||cook||heat||stirring",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057327a13d0d2d358abb8b",
            "Recipe_id": "141217",
            "Calories": "381.7",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "\"Take Me to Spain\" Tortilla Espanola #5FIX",
            "total_time": "25",
            "url": "http://www.geniuskitchen.com/recipe/quot-take-me-to-spain-quot-tortilla-espanola-5fix-496766",
            "Region": "Spanish and Portuguese",
            "Sub_region": "Spanish",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/67/66/pic8XzJ0e.jpg",
            "Carbohydrate, by difference (g)": "2.88",
            "Energy (kcal)": "1526.72",
            "Protein (g)": "50.24",
            "Total lipid (fat) (g)": "146.04",
            "Utensils": "pan||plate||bowl||pan||pan||pan",
            "Processes": "heat||heat||add||cook||stirring||transfer||add||whisk||add||stir||heat||heat||cook||place||cook||place||cut||serve",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057239a13d0d2d35893e86",
            "Recipe_id": "15193",
            "Calories": "182.0",
            "cook_time": "40",
            "prep_time": "20",
            "servings": "26",
            "Recipe_title": "\"Tastee\" Sandwich",
            "total_time": "60",
            "url": "http://allrecipes.com/recipe/254762/tastee-sandwich/",
            "Region": "US",
            "Sub_region": "US",
            "Continent": "North American",
            "Source": "AllRecipes",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/3821439.jpg",
            "Carbohydrate, by difference (g)": "20.4768",
            "Energy (kcal)": "2839.7209",
            "Protein (g)": "547.458",
            "Total lipid (fat) (g)": "61.8371",
            "Utensils": "cup||cup||pot||cup",
            "Processes": "combine||add||stir||place||pour||fill||stir||pour||stir||add||mix||cook||stir||heat||boil||cook||blend",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405723ea13d0d2d358946cc",
            "Recipe_id": "17314",
            "Calories": "182.0",
            "cook_time": "40",
            "prep_time": "20",
            "servings": "26",
            "Recipe_title": "\"Tastee\" Sandwich",
            "total_time": "60",
            "url": "http://allrecipes.com/recipe/254762/tastee-sandwich/",
            "Region": "US",
            "Sub_region": "US",
            "Continent": "North American",
            "Source": "AllRecipes",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/3821439.jpg",
            "Carbohydrate, by difference (g)": "20.4768",
            "Energy (kcal)": "2839.7209",
            "Protein (g)": "547.458",
            "Total lipid (fat) (g)": "61.8371",
            "Utensils": "cup||cup||pot||cup",
            "Processes": "combine||add||stir||place||pour||fill||stir||pour||stir||add||mix||cook||stir||heat||boil||cook||blend",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572bba13d0d2d3589ff78",
            "Recipe_id": "93042",
            "Calories": "650.0",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "04-Jun",
            "Recipe_title": "\"Twisted American Chop Suey\"",
            "total_time": "60",
            "url": "http://www.geniuskitchen.com/recipe/twisted-american-chop-suey-59534",
            "Region": "Central American",
            "Sub_region": "Honduran",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/59/53/4/pic5PbSOn.jpg",
            "Carbohydrate, by difference (g)": "106.2936",
            "Energy (kcal)": "1481.9928",
            "Protein (g)": "107.4482",
            "Total lipid (fat) (g)": "71.5694",
            "Utensils": "skillet||skillet||oven",
            "Processes": "cook||set||add||set||add||stir||mix||mix||add||mix||sprinkle||cover||bake",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057309a13d0d2d358a94ef",
            "Recipe_id": "131329",
            "Calories": "458.1",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "\"Voodoo\" (Calamari-ink) Pasta",
            "total_time": "160",
            "url": "http://www.geniuskitchen.com/recipe/voodoo-calamari-ink-pasta-24137",
            "Region": "Italian",
            "Sub_region": "Italian",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "16.934",
            "Energy (kcal)": "430.6471",
            "Protein (g)": "71.1433",
            "Total lipid (fat) (g)": "6.3705",
            "Utensils": "pot",
            "Processes": "note||dice||chop||heat||add||cover||simmer||add||mix||add||simmer||uncovered||simmer||cook||add",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057293a13d0d2d3589d41f",
            "Recipe_id": "81929",
            "Calories": "270.4",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "04-May",
            "Recipe_title": "\"You Say Potato, I Say Poblano\" Tacos  #SP5",
            "total_time": "25",
            "url": "http://www.geniuskitchen.com/recipe/quot-you-say-potato-i-say-poblano-quot-tacos-sp5-514498",
            "Region": "Mexican",
            "Sub_region": "Mexican",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/51/44/98/BwFYrSu4RL6aFxsFDm0h-20140318_165039.jpg",
            "Carbohydrate, by difference (g)": "10.649",
            "Energy (kcal)": "455.4",
            "Protein (g)": "5.612",
            "Total lipid (fat) (g)": "44.505",
            "Utensils": "skillet||skillet||bowl",
            "Processes": "cook||wrap||cook||heat||add||heat||stirring||add||cook||stirring||heat||transfer||serve",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057342a13d0d2d358ad7b4",
            "Recipe_id": "148431",
            "Calories": "99.5",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "\"Zuk\" in Citrus Sauce",
            "total_time": "30",
            "url": "http://www.geniuskitchen.com/recipe/zuk-in-citrus-sauce-72696",
            "Region": "Canadian",
            "Sub_region": "Canadian",
            "Continent": "North American",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "23.1702",
            "Energy (kcal)": "114.4996",
            "Protein (g)": "4.1096",
            "Total lipid (fat) (g)": "1.4361",
            "Utensils": "saucepan||pan",
            "Processes": "cook||drain||boil||simmer||blend||add||boil||stirring||heat||transfer||serve",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405726fa13d0d2d358996a1",
            "Recipe_id": "66176",
            "Calories": "80.8",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "6",
            "Recipe_title": "\"baigan Korma\" Minced Eggplants-brinjals-aubergines",
            "total_time": "30",
            "url": "http://www.geniuskitchen.com/recipe/baigan-korma-minced-eggplants-brinjals-aubergines-94300",
            "Region": "Indian Subcontinent",
            "Sub_region": "Indian",
            "Continent": "Asian",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "220.3991",
            "Energy (kcal)": "1166.0902",
            "Protein (g)": "46.7244",
            "Total lipid (fat) (g)": "30.8933",
            "Utensils": "cooker||fork",
            "Processes": "wash||put||pour||cook||remove||set||cool||remove||heat||put||put||fry||add||cook||remove||serve",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057301a13d0d2d358a91fb",
            "Recipe_id": "130571",
            "Calories": "1053.2",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "\"beat the Blues\" Blue Cheese Risotto",
            "total_time": "40",
            "url": "http://www.geniuskitchen.com/recipe/beat-the-blues-blue-cheese-risotto-137701",
            "Region": "Italian",
            "Sub_region": "Italian",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/13/77/01/picbBffdT.jpg",
            "Carbohydrate, by difference (g)": "82.3155",
            "Energy (kcal)": "2234.3367",
            "Protein (g)": "119.965",
            "Total lipid (fat) (g)": "160.1535",
            "Utensils": "pan",
            "Processes": "simmer||remove||cut||melt||cook||add||cook||stir||cook||stirring||add||add||stirring||add||add||heat||stir||season",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057301a13d0d2d358a9057",
            "Recipe_id": "130151",
            "Calories": "191.8",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "1 1/2 cups",
            "Recipe_title": "\"blond\" Minestrone",
            "total_time": "60",
            "url": "http://www.geniuskitchen.com/recipe/blond-minestrone-167554",
            "Region": "Italian",
            "Sub_region": "Italian",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "242.4673",
            "Energy (kcal)": "1900.8497",
            "Protein (g)": "138.8639",
            "Total lipid (fat) (g)": "46.1552",
            "Utensils": "oven||pan||pan||cup",
            "Processes": "chop||heat||heat||add||add||stir||saute||stir||boil||simmer||add||cook||remove||heat||stir||taste||ladle||add||process||smooth||add",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572c0a13d0d2d358a0b21",
            "Recipe_id": "96030",
            "Calories": "457.4",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "6",
            "Recipe_title": "\"change of Plans\" Beef Stew",
            "total_time": "165",
            "url": "http://www.geniuskitchen.com/recipe/change-of-plans-beef-stew-294483",
            "Region": "South American",
            "Sub_region": "Argentine",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "46.845",
            "Energy (kcal)": "221.5289",
            "Protein (g)": "10.3248",
            "Total lipid (fat) (g)": "1.8998",
            "Utensils": "saucepan||bowl",
            "Processes": "heat||heat||add||add||cook||stirring||add||cook||add||boil||cook||stir||add||cover||simmer||sprinkle",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572afa13d0d2d3589f219",
            "Recipe_id": "89611",
            "Calories": "692.5",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "\"chipotle\" Style Chicken Burrito Bowls",
            "total_time": "40",
            "url": "http://www.geniuskitchen.com/recipe/chipotle-style-chicken-burrito-bowls-299989",
            "Region": "Mexican",
            "Sub_region": "Mexican",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/29/99/89/picKzI3Nv.jpg",
            "Carbohydrate, by difference (g)": "233.0921",
            "Energy (kcal)": "1636.9823",
            "Protein (g)": "75.6811",
            "Total lipid (fat) (g)": "51.7117",
            "Utensils": "pan||tablespoon||bowl||bowl",
            "Processes": "add||cook||heat||add||add||peel||refrigerate||open||add||add",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572daa13d0d2d358a4747",
            "Recipe_id": "111435",
            "Calories": "253.9",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "04-Jun",
            "Recipe_title": "\"country Style\" Onion Soup",
            "total_time": "35",
            "url": "http://www.geniuskitchen.com/recipe/quot-country-style-quot-onion-soup-138275",
            "Region": "French",
            "Sub_region": "French",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "35.208",
            "Energy (kcal)": "840.24",
            "Protein (g)": "43.6488",
            "Total lipid (fat) (g)": "62.8416",
            "Utensils": "saucepan||pan||cup",
            "Processes": "slice||peel||cut||cut||heat||melt||add||cook||stirring||add||stirring||cook||stirring||add||stirring||add||cover||boil||reduce||heat||simmer||taste",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572bba13d0d2d3589fdc4",
            "Recipe_id": "92601",
            "Calories": "743.8",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "\"cuban\" Burgers",
            "total_time": "15",
            "url": "http://www.geniuskitchen.com/recipe/cuban-burgers-156369",
            "Region": "Caribbean",
            "Sub_region": "Cuban",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "573.1066",
            "Energy (kcal)": "5626.9588",
            "Protein (g)": "314.1792",
            "Total lipid (fat) (g)": "237.3055",
            "Processes": "preheat||wrap||cook||spread||top||assemble||place||press||cook||unwrap",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572f0a13d0d2d358a738c",
            "Recipe_id": "122776",
            "Calories": "161.4",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "03-May",
            "Recipe_title": "\"fabulous Italian Scapel Soup\"",
            "total_time": "25",
            "url": "http://www.geniuskitchen.com/recipe/fabulous-italian-scapel-soup-448443",
            "Region": "Italian",
            "Sub_region": "Italian",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "95.674",
            "Energy (kcal)": "576.71",
            "Protein (g)": "19.6108",
            "Total lipid (fat) (g)": "11.1927",
            "Utensils": "bowl||pan||dish||bowl||bowl",
            "Processes": "mix||add||add||cook||place||roll||cool",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572c4a13d0d2d358a1407",
            "Recipe_id": "98309",
            "Calories": "565.8",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "10",
            "Recipe_title": "\"goulashy\" Beef Stew for the Slow Cooker",
            "total_time": "430",
            "url": "http://www.geniuskitchen.com/recipe/goulashy-beef-stew-for-the-slow-cooker-216068",
            "Region": "South American",
            "Sub_region": "Argentine",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/21/60/68/picJk3MX2.jpg",
            "Carbohydrate, by difference (g)": "147.8542",
            "Energy (kcal)": "931.6851",
            "Protein (g)": "74.2691",
            "Total lipid (fat) (g)": "8.7336",
            "Utensils": "cooker",
            "Processes": "combine||cook||stirring||add||cook",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572d5a13d0d2d358a3d6f",
            "Recipe_id": "108913",
            "Calories": "538.9",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "\"greek\" Nachos",
            "total_time": "25",
            "url": "http://www.geniuskitchen.com/recipe/greek-nachos-244507",
            "Region": "Greek",
            "Sub_region": "Greek",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "206.1178",
            "Energy (kcal)": "2253.3737",
            "Protein (g)": "114.4152",
            "Total lipid (fat) (g)": "111.9485",
            "Utensils": "saucepan||processor||boiler",
            "Processes": "cook||set||heat||smooth||add||cream||heat||cover||drizzle||top",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572c4a13d0d2d358a1388",
            "Recipe_id": "98182",
            "Calories": "515.2",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "08-Oct",
            "Recipe_title": "\"harak Mas Curry\" Sri Lankan Beef Curry",
            "total_time": "130",
            "url": "http://www.geniuskitchen.com/recipe/harak-mas-curry-sri-lankan-beef-curry-305431",
            "Region": "South American",
            "Sub_region": "Argentine",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/30/54/31/pics1FsTj.jpg",
            "Carbohydrate, by difference (g)": "134.5976",
            "Energy (kcal)": "1810.1014",
            "Protein (g)": "286.2964",
            "Total lipid (fat) (g)": "12.3922",
            "Utensils": "saucepan||pan",
            "Processes": "cut||heat||add||fry||add||stir||add||fry||stirring||add||cover||simmer||cook||heat||serve",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572f2a13d0d2d358a7542",
            "Recipe_id": "123214",
            "Calories": "364.1",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "12",
            "Recipe_title": "\"healthified\" Italian Beef Sandwiches",
            "total_time": "605",
            "url": "http://www.geniuskitchen.com/recipe/healthified-italian-beef-sandwiches-362824",
            "Region": "Italian",
            "Sub_region": "Italian",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "46.8861",
            "Energy (kcal)": "347.88",
            "Protein (g)": "4.3281",
            "Total lipid (fat) (g)": "16.637",
            "Utensils": "board||fork||cup||cooker||saucepan||cooker||cup",
            "Processes": "trim||cut||place||top||dressing||cover||cook||heat||heat||remove||place||cool||shred||serve||heat||add||stir||cover||cook||heat",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572ada13d0d2d3589ec21",
            "Recipe_id": "88082",
            "Calories": "307.2",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "6",
            "Recipe_title": "\"healthified\" Mexican Pasta Skillet",
            "total_time": "40",
            "url": "http://www.geniuskitchen.com/recipe/healthified-mexican-pasta-skillet-385305",
            "Region": "Mexican",
            "Sub_region": "Mexican",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "152.9134",
            "Energy (kcal)": "1144.7276",
            "Protein (g)": "116.5769",
            "Total lipid (fat) (g)": "5.9714",
            "Utensils": "skillet",
            "Processes": "cook||stirring||drain||stir||heat||stir||reduce||heat||cover||simmer||stirring||sprinkle||cover",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057275a13d0d2d35899f6f",
            "Recipe_id": "68430",
            "Calories": "260.5",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "6 5",
            "Recipe_title": "\"indian\" Buckwheat Spice Pancakes",
            "total_time": "15",
            "url": "http://www.geniuskitchen.com/recipe/indian-buckwheat-spice-pancakes-290767",
            "Region": "Indian Subcontinent",
            "Sub_region": "Indian",
            "Continent": "Asian",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "104.7318",
            "Energy (kcal)": "617.261",
            "Protein (g)": "29.8855",
            "Total lipid (fat) (g)": "12.468",
            "Utensils": "pan||skillet||pan",
            "Processes": "combine||stir||blend||combine||blend||add||mix||dry||mix||stir||blend||heat||cook",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572d5a13d0d2d358a3c32",
            "Recipe_id": "108596",
            "Calories": "528.8",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "6 chicken pieces",
            "Recipe_title": "\"it's Greek to Me\" Baked Feta Chicken",
            "total_time": "450",
            "url": "http://www.geniuskitchen.com/recipe/its-greek-to-me-baked-feta-chicken-430445",
            "Region": "Greek",
            "Sub_region": "Greek",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "46.8765",
            "Energy (kcal)": "6199.2639",
            "Protein (g)": "594.6264",
            "Total lipid (fat) (g)": "392.4349",
            "Utensils": "oven||dish||pan||oven||pan",
            "Processes": "combine||marinate||preheat||cook||remove",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057312a13d0d2d358a9c30",
            "Recipe_id": "133186",
            "Calories": "459.8",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "04-Jun",
            "Recipe_title": "\"italian\" Chicken",
            "total_time": "20",
            "url": "http://www.geniuskitchen.com/recipe/italian-chicken-222643",
            "Region": "Italian",
            "Sub_region": "Italian",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "0.0",
            "Energy (kcal)": "0.0",
            "Protein (g)": "0.0",
            "Total lipid (fat) (g)": "0.0",
            "Utensils": "pan||fork||skillet",
            "Processes": "put||marinate||cook",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057309a13d0d2d358a94d0",
            "Recipe_id": "131298",
            "Calories": "706.8",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "02-Apr",
            "Recipe_title": "\"janie Marzetti\"",
            "total_time": "50",
            "url": "http://www.geniuskitchen.com/recipe/janie-marzetti-138477",
            "Region": "Italian",
            "Sub_region": "Italian",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "117.8509",
            "Energy (kcal)": "824.1421",
            "Protein (g)": "37.9737",
            "Total lipid (fat) (g)": "22.8183",
            "Utensils": "oven||dish||skillet||dish",
            "Processes": "preheat||cook||drain||drizzle||set||heat||stir||add||add||stir||cook||overcook||pour||mix||pour||sprinkle||top||bake||cover",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "1.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572a8a13d0d2d3589e654",
            "Recipe_id": "86595",
            "Calories": "352.3",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "6",
            "Recipe_title": "\"leftover Roast\" Mexican Casserole",
            "total_time": "120",
            "url": "http://www.geniuskitchen.com/recipe/leftover-roast-mexican-casserole-422291",
            "Region": "Mexican",
            "Sub_region": "Mexican",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "207.9435",
            "Energy (kcal)": "1361.8571",
            "Protein (g)": "88.5526",
            "Total lipid (fat) (g)": "22.9861",
            "Utensils": "skillet||oven||pan||pan",
            "Processes": "shred||remove||heat||add||add||stir||boil||reduce||heat||boil||cook||heat||preheat||spray||place||spread||cover||sprinkle||bake",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572f0a13d0d2d358a739f",
            "Recipe_id": "122795",
            "Calories": "867.4",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "\"light\" Broccoli Carbonara",
            "total_time": "30",
            "url": "http://www.geniuskitchen.com/recipe/light-broccoli-carbonara-321931",
            "Region": "Italian",
            "Sub_region": "Italian",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "416.6967",
            "Energy (kcal)": "2667.8849",
            "Protein (g)": "141.6679",
            "Total lipid (fat) (g)": "57.039",
            "Processes": "boil||shred||fry||chop||add||cook||drop||cook||add||cook||drain||add||add||serve",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572d7a13d0d2d358a4185",
            "Recipe_id": "109959",
            "Calories": "213.8",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "18",
            "Recipe_title": "\"light\" Greek Ground Beef Roll",
            "total_time": "95",
            "url": "http://www.geniuskitchen.com/recipe/light-greek-ground-beef-roll-254261",
            "Region": "Greek",
            "Sub_region": "Greek",
            "Continent": "European",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "382.1549",
            "Energy (kcal)": "3313.6953",
            "Protein (g)": "269.2051",
            "Total lipid (fat) (g)": "72.8423",
            "Utensils": "skillet||skillet||sheet||sheet",
            "Processes": "heat||heat||add||cook||add||cover||simmer||stirring||whisk||boil||remove||heat||whisk||place||stir||heat||heat||add||stir||stir||season||cool||preheat||grease||cover||place||spray||add||spread||roll||transfer||spray||roll||wrap||bake||stand",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        }
    ]
  ```

**Error Responses:**
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `404 Not found`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `496ms`  

### **7. Get Recipe by Utensils**(Implemented)

- **Endpoint:** `GET /api/byutensils/utensils`

- **Query Parameters:**
  - **utensils** (string, required): The Utensil of cooking.
  - **page** (integer, optional): Specifies the limit number default is 10.

**Sample Request**:  
`GET api/byutensils/utensils?utensils=cUP,bowl&limit=5`

**Example Response:**
  ```json
 "success": true,
    "data": [
        {
            "_id": "64057258a13d0d2d3589783c",
            "Recipe_id": "58392",
            "Calories": "731.5",
            "cook_time": "0",
            "Recipe_title": "Thai Sticky Rice With Mangoes",
            "total_time": "274",
            "Region": "Thai",
            "Sub_region": "Thai",
            "Continent": "Asian",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/28/74/51/zOnY0oYCTICEGyodj28S_mango%20n%20sticky%20rice2.JPG",
            "Carbohydrate, by difference (g)": "164.404",
            "Utensils": "basin||pan||saucepan||cup||saucepan",
            "Processes": "rinse||boil||wrap||cover||peel||slice||cut||heat||boil||curdle||remove||place||serve||drizzle||serve",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405728aa13d0d2d3589c8b1",
            "Recipe_id": "78997",
            "Calories": "238.2",
            "cook_time": "0",
            "Recipe_title": "Grilled Catfish with Homemade Salsa",
            "total_time": "30",
            "Region": "Mexican",
            "Sub_region": "Mexican",
            "Continent": "Latin American",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/61/65/3/picf4rB9Y.jpg",
            "Carbohydrate, by difference (g)": "18.8255",
            "Utensils": "basket||bowl",
            "Processes": "sprinkle||place||stir||chill||store||serve",
            "vegan": "0.0",
            "pescetarian": "1.0",
            "lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057277a13d0d2d3589a341",
            "Recipe_id": "69408",
            "Calories": "135.7",
            "cook_time": "0",
            "Recipe_title": "Korean Gaji Namul (Korean Eggplant Side Dish)",
            "total_time": "35",
            "Region": "Korean",
            "Sub_region": "Korean",
            "Continent": "Asian",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/33/31/32/picq9B33g.jpg",
            "Carbohydrate, by difference (g)": "5.3138",
            "Utensils": "basket||bowl||pot||bowl",
            "Processes": "cut||pour||place||boil||remove||cool||drain||mix||serve||serve",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057265a13d0d2d35898908",
            "Recipe_id": "62694",
            "Calories": "1005.2",
            "cook_time": "0",
            "Recipe_title": "Cambodian Fish Amok",
            "total_time": "50",
            "Region": "Southeast Asian",
            "Sub_region": "Cambodian",
            "Continent": "Asian",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/submissions/recipe/2001345510/tnDKn8XFTOqauPTLtFvJ_Khmer%20Amok%20Trey.png",
            "Carbohydrate, by difference (g)": "6547.12",
            "Utensils": "basket||pan||pan||pan||bowl",
            "Processes": "chop||add||add||cream||mix||smooth||chop||heat||add||season||add||stir||simmer||beat||add||add||add||cover||steam",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572e6a13d0d2d358a6271",
            "Recipe_id": "118395",
            "Calories": "308.1",
            "cook_time": "0",
            "Recipe_title": "Swiss Zucchini Bake",
            "total_time": "45",
            "Region": "Deutschland ",
            "Sub_region": "Swiss",
            "Continent": "European",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "6.7381",
            "Utensils": "basket||saucepan||bowl||knife",
            "Processes": "place||place||boil||cover||drain||set||sprinkle||bake",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "lacto_vegetarian": "0.0"
        }
    ]
  ```

**Error Responses:**
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `404 Not found`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `36ms`  

### **8. Get Recipe by Flavour**(Implemented)

- **Endpoint:** `GET /api/ingredients/flavor/{flavor}`

- **Query Parameters:**
  - **Flavour** (string, required): The Flavour of cooking.

**Sample Request**:  
`GET /api/ingredients/flavor/Vegetable-Bulb`

**Example Response:**
  ```json
"status": "success",
    "data": [
        {
            "_id": "640f11cba80bf2bc741cf198",
            "IngID": "1",
            "ingredient": "onion",
            "frequency": "35453",
            "generic_name": "Onion",
            "wikilink": "https://en.wikipedia.org/wiki/Onion",
            "wikiimage": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/220px-Mixed_onions.jpg",
            "FlavorDB_Category": "Vegetable-Bulb",
            "Dietrx_Category": "Vegetable",
            "Flavor_DB_Link": "Onion~https://cosylab.iiitd.edu.in/flavordb/entity_details?id=348",
            "flavordb_id": "348",
            "Diet_rx_link": "onion~https://cosylab.iiitd.edu.in/dietrx/get_food?food_id=Plant+ID%3A4679||welsh onion~https://cosylab.iiitd.edu.in/dietrx/get_food?food_id=Plant+ID%3A35875"
        },
        {
            "_id": "640f11cba80bf2bc741cf1c7",
            "IngID": "49",
            "ingredient": "red onion",
            "frequency": "4600",
            "generic_name": "Red Onion",
            "wikilink": "https://en.wikipedia.org/wiki/Red_onion",
            "wikiimage": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Red_Onion_on_White.JPG/220px-Red_Onion_on_White.JPG",
            "FlavorDB_Category": "Vegetable-Bulb",
            "Dietrx_Category": "Vegetable",
            "Flavor_DB_Link": "Onion~https://cosylab.iiitd.edu.in/flavordb/entity_details?id=348",
            "flavordb_id": "348",
            "Diet_rx_link": "onion~https://cosylab.iiitd.edu.in/dietrx/get_food?food_id=Plant+ID%3A4679||welsh onion~https://cosylab.iiitd.edu.in/dietrx/get_food?food_id=Plant+ID%3A35875"
        }
]
  ```

**Error Responses:**
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `404 Not found`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `200ms`  

### **9. Get Recipe by Instruction**(Implemented)

- **Endpoint:** `GET /api/instructions/{recipe_id}`

- **Query Parameters:**
  - **Recipe_id** (string, required): The Id of the recipe.

**Sample Request**:  
`GET /api/instructions/2611`

**Example Response:**
  ```json
 "recipe_id": "2610",
    "steps": [
        "place 3 cups water , lentils , tomato , carrot , onion , garlic , and chicken bouillon in a stockpot over medium heat",
        "cook until vegetables and lentils are softened , 20 to 25 minutes",
        "remove from heat and cool to lukewarm",
        "blend vegetable and lentil mixture with an immersion blender until smooth",
        "stir 1 cup water , cumin , sea salt , pepper , and coriander into soup",
        "heat over medium heat until warmed"
    ]
  ```

**Error Responses:**
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `404 Not found`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `35ms` 
   
### **10. Get Recipe by Diet**(Implemented)

- **Endpoint:** `GET /api/recipe-diet/recipe-diet`

- **Query Parameters:**
  - **diet** (string, required): The diet type of the recipe (e.g vegan).
  - **limit** (integer,optional): The limit of number of responses (by default 10).

**Sample Request**:  
`GET api/recipe-diet/recipe-diet?diet=VegaN&limit=10`

**Example Response:**
  ```json
  "success": true,
    "message": "Recipes fetched successfully",
    "data": [
        {
            "_id": "6405721fa13d0d2d35890d6d",
            "Calories": "45.0",
            "cook_time": "5",
            "prep_time": "20",
            "servings": "24",
            "Recipe_title": "Dukkah",
            "Region": "Middle Eastern",
            "Continent": "African",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4572970.jpg",
            "Processes": "preheat||place||pour||fold||cover||remove||cool||heat||stirring||pop||transfer||process||pour||place||process||stir||season||mix",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405721fa13d0d2d35890d77",
            "Calories": "189.0",
            "cook_time": "0",
            "prep_time": "10",
            "servings": "4",
            "Recipe_title": "Dukka",
            "Region": "Middle Eastern",
            "Continent": "African",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4458021.jpg",
            "Processes": "grind||add||mix",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405721fa13d0d2d35890d7e",
            "Calories": "234.0",
            "cook_time": "8",
            "prep_time": "20",
            "servings": "10",
            "Recipe_title": "Ta'ameya (Egyptian Falafel)",
            "Region": "Middle Eastern",
            "Continent": "African",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/3841093.jpg",
            "Processes": "place||cover||soak||drain||combine||process||heat||heat||add||cook||stirring||transfer||shape||coat||heat||heat||fry||drain",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405721fa13d0d2d35890d8c",
            "Calories": "10.0",
            "cook_time": "8",
            "prep_time": "5",
            "servings": "8",
            "Recipe_title": "Guinean Okra Sauce",
            "Region": "Rest Africa",
            "Continent": "African",
            "img_url": "https://images.media-allrecipes.com/images/79591.png",
            "Processes": "boil||heat||stir||boil||cook||drain||trim||place||process||smooth||season",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405721fa13d0d2d35890d96",
            "Calories": "95.0",
            "cook_time": "15",
            "prep_time": "10",
            "servings": "3",
            "Recipe_title": "Cameroonian Fried Spinach",
            "Region": "Rest Africa",
            "Continent": "African",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/3865954.jpg",
            "Processes": "heat||heat||add||dump||sprinkle||fry",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405721fa13d0d2d35890dab",
            "Calories": "4.0",
            "cook_time": "0",
            "prep_time": "5",
            "servings": "12",
            "Recipe_title": "Ras el Hanout",
            "Region": "Northern Africa",
            "Continent": "African",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/3603124.jpg",
            "Processes": "mix||store",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405721fa13d0d2d35890dac",
            "Calories": "96.0",
            "cook_time": "15",
            "prep_time": "15",
            "servings": "6",
            "Recipe_title": "Moroccan Cooked Pepper Salad",
            "Region": "Northern Africa",
            "Continent": "African",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1112594.jpg",
            "Processes": "preheat||place||broil||remove||heat||peel||chop||heat||mix||stir||season||serve",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405721fa13d0d2d35890db5",
            "Calories": "135.0",
            "cook_time": "140",
            "prep_time": "20",
            "servings": "6",
            "Recipe_title": "Matbucha",
            "Region": "Northern Africa",
            "Continent": "African",
            "img_url": "https://images.media-allrecipes.com/userphotos/250x250/832138.jpg",
            "Processes": "heat||heat||stir||season||cook||stirring||reduce||heat||cover||cook||stir||refrigerate",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405721fa13d0d2d35890db7",
            "Calories": "330.0",
            "cook_time": "35",
            "prep_time": "15",
            "servings": "6",
            "Recipe_title": "Marrakesh Vegetable Curry",
            "Region": "Northern Africa",
            "Continent": "African",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/5059174.jpg",
            "Processes": "saute||add||simmer||add||cook||serve",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405721fa13d0d2d35890dda",
            "Calories": "379.0",
            "cook_time": "100",
            "prep_time": "15",
            "servings": "6",
            "Recipe_title": "Vegan African Stew",
            "Region": "Rest Africa",
            "Continent": "African",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/6624568.jpg",
            "Processes": "heat||heat||cook||stir||season||reduce||heat||cook||simmer||stir||cook||stirring",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        }
    ]
  ```

**Error Responses:**
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `37ms` 
**Note**
  - **supports case insensitivity**

### **11. Get Recipe by Diet and region(both)**(Implemented)

- **Endpoint:** `GET /api/recipe/region-diet`

- **Query Parameters:**
  - **diet** (string, required): The diet type of the recipe (e.g vegan).
  - **Region** (string, required): The Region type of the recipe (e.g Middle eastern).
  - **limit** (integer,optional): The limit of number of responses (by default 10).

**Sample Request**:  
`GET api/recipe/region-diet/region-diet?region=South american&diet=vegan&limit=10`

**Example Response:**
  ```json
  "success": true,
    "message": "Recipes fetched successfully",
    "data": [
        {
            "_id": "6405722ba13d0d2d358923d5",
            "Calories": "0.0",
            "cook_time": "0",
            "prep_time": "5",
            "servings": "1",
            "Recipe_title": "Caipirinha",
            "Region": "South American",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/3708561.jpg",
            "Processes": "drop||add||mix||pour||stir",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405722ba13d0d2d358923d9",
            "Calories": "0.0",
            "cook_time": "0",
            "prep_time": "5",
            "servings": "1",
            "Recipe_title": "Sao Paulo Lime and Vodka",
            "Region": "South American",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/250x250/625412.jpg",
            "Processes": "put||pour||add||taste",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405722ba13d0d2d358923e2",
            "Calories": "255.0",
            "cook_time": "10",
            "prep_time": "10",
            "servings": "6",
            "Recipe_title": "Brazilian Grilled Pineapple",
            "Region": "South American",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1095615.jpg",
            "Processes": "preheat||whisk||place",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405722ba13d0d2d358923e5",
            "Calories": "93.0",
            "cook_time": "0",
            "prep_time": "35",
            "servings": "8",
            "Recipe_title": "Vinagrete (Brazilian Tomato Slaw)",
            "Region": "South American",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4005969.jpg",
            "Processes": "mix||stand",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405722ba13d0d2d358923ec",
            "Calories": "231.0",
            "cook_time": "0",
            "prep_time": "5",
            "servings": "1",
            "Recipe_title": "Caipirinha de Morango com Kiwi (Strawberry Kiwi Cocktail)",
            "Region": "South American",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4538931.jpg",
            "Processes": "place||fill||pour||stir",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405722ba13d0d2d358923f7",
            "Calories": "221.0",
            "cook_time": "0",
            "prep_time": "10",
            "servings": "1",
            "Recipe_title": "Caipirinha de Limo Tradicional (Classic Brazilian Cocktail)",
            "Region": "South American",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4538934.jpg",
            "Processes": "cut||slice||remove||slice||place||add||mash||stir",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405722ba13d0d2d358923f9",
            "Calories": "165.0",
            "cook_time": "0",
            "prep_time": "5",
            "servings": "1",
            "Recipe_title": "Caipirinha Cocktail",
            "Region": "South American",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/250x250/880363.jpg",
            "Processes": "combine||crush||mix||add||stir||fill||stir",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405722ba13d0d2d3589240e",
            "Calories": "51.0",
            "cook_time": "0",
            "prep_time": "30",
            "servings": "8",
            "Recipe_title": "Aji (Colombian Salsa)",
            "Region": "South American",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4563829.jpg",
            "Processes": "combine||add||mix",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405722ba13d0d2d35892415",
            "Calories": "0.0",
            "cook_time": "0",
            "prep_time": "5",
            "servings": "1",
            "Recipe_title": "Piscola",
            "Region": "South American",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/6369628.jpg",
            "Processes": "pour||garnish",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405722ba13d0d2d35892418",
            "Calories": "0.0",
            "cook_time": "0",
            "prep_time": "2",
            "servings": "1",
            "Recipe_title": "Lemon Pisco Sour",
            "Region": "South American",
            "Continent": "Latin American",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/2062372.jpg",
            "Processes": "pour||add||cover||strain||serve",
            "vegan": "1.0",
            "pescetarian": "1.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        }
    ]
  ```

**Error Responses:**
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `123ms` 
**Note**
  - **supports case insensitivity**


### **12. Get Recipe info**(Implemented)

- **Endpoint:** `GET /recipe/recipesinfo`

- **Query Parameters:**
  - **page** (integer, optional): The Page number(by default 1).
  - **limit** (integer, optional): The limit of number of responses (by default 10).

**Sample Request**:  
`GET recipe/recipesinfo?limit=10`

**Example Response:**
  ```json
  "success": "true",
    "message": "Recipes fetched successfully.",
    "payload": {
        "data": [
            {
                "_id": "6405721fa13d0d2d35890d69",
                "Recipe_id": "2610",
                "Calories": "196.0",
                "cook_time": "30",
                "prep_time": "15",
                "servings": "4",
                "Recipe_title": "Egyptian Lentil Soup",
                "total_time": "45",
                "url": "http://allrecipes.com/recipe/222661/egyptian-lentil-soup/",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/5196784.jpg",
                "Carbohydrate, by difference (g)": "146.7606",
                "Energy (kcal)": "805.6975",
                "Protein (g)": "49.554",
                "Total lipid (fat) (g)": "5.6564",
                "Processes": "place||heat||cook||remove||cool||blend||smooth||stir||heat",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0"
            },
            {
                "_id": "6405721fa13d0d2d35890d6a",
                "Recipe_id": "2611",
                "Calories": "80.0",
                "cook_time": "35",
                "prep_time": "10",
                "servings": "4",
                "Recipe_title": "Egyptian Green Beans with Carrots",
                "total_time": "45",
                "url": "http://allrecipes.com/recipe/233456/egyptian-green-beans-with-carrots/",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/2619313.jpg",
                "Carbohydrate, by difference (g)": "39.3312",
                "Energy (kcal)": "386.767",
                "Protein (g)": "15.5638",
                "Total lipid (fat) (g)": "19.7239",
                "Utensils": "pot",
                "Processes": "heat||heat||cook||stir||stir||cook||stirring||pour||stir||boil||add||boil||simmer",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0"
            },
            {
                "_id": "6405721fa13d0d2d35890d6b",
                "Recipe_id": "2612",
                "Calories": "339.0",
                "cook_time": "120",
                "prep_time": "15",
                "servings": "4",
                "Recipe_title": "Egyptian Bamia",
                "total_time": "135",
                "url": "http://allrecipes.com/recipe/227986/egyptian-bamia/",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/3840150.jpg",
                "Carbohydrate, by difference (g)": "34.0004",
                "Energy (kcal)": "1762.7662",
                "Protein (g)": "82.9034",
                "Total lipid (fat) (g)": "146.8971",
                "Utensils": "saucepan||oven||dish||oven",
                "Processes": "heat||heat||cook||stir||mix||cook||stir||stir||season||boil||simmer||stir||preheat||stir||boil||cover||bake",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0"
            },
            {
                "_id": "6405721fa13d0d2d35890d6c",
                "Recipe_id": "2613",
                "Calories": "409.0",
                "cook_time": "15",
                "prep_time": "15",
                "servings": "3",
                "Recipe_title": "Magpie's Easy Falafel Cakes",
                "total_time": "60",
                "url": "http://allrecipes.com/recipe/143113/magpies-easy-falafel-cakes/",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/5229672.jpg",
                "Carbohydrate, by difference (g)": "225.1172",
                "Energy (kcal)": "1686.8298",
                "Protein (g)": "67.8589",
                "Total lipid (fat) (g)": "62.4829",
                "Utensils": "skillet||processor||bowl||cup||dish||tablespoon||skillet",
                "Processes": "cook||smooth||transfer||stir||cover||chill||place||roll||heat||heat||cook",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "1.0",
                "ovo_lacto_vegetarian": "0.0"
            },
            {
                "_id": "6405721fa13d0d2d35890d6d",
                "Recipe_id": "2614",
                "Calories": "45.0",
                "cook_time": "5",
                "prep_time": "20",
                "servings": "24",
                "Recipe_title": "Dukkah",
                "total_time": "25",
                "url": "http://allrecipes.com/recipe/79684/dukkah/",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4572970.jpg",
                "Carbohydrate, by difference (g)": "83.0609",
                "Energy (kcal)": "1006.238",
                "Protein (g)": "26.18",
                "Total lipid (fat) (g)": "73.1713",
                "Utensils": "oven||sheet||skillet||bowl||skillet||pan||processor||bowl||processor||bowl",
                "Processes": "preheat||place||pour||fold||cover||remove||cool||heat||stirring||pop||transfer||process||pour||place||process||stir||season||mix",
                "vegan": "1.0",
                "pescetarian": "1.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0"
            },
            {
                "_id": "6405721fa13d0d2d35890d6e",
                "Recipe_id": "2615",
                "Calories": "934.0",
                "cook_time": "30",
                "prep_time": "30",
                "servings": "8",
                "Recipe_title": "Om Ali",
                "total_time": "60",
                "url": "http://allrecipes.com/recipe/19898/om-ali/",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1101880.jpg",
                "Carbohydrate, by difference (g)": "543.3028",
                "Energy (kcal)": "4117.4667",
                "Protein (g)": "46.5988",
                "Total lipid (fat) (g)": "212.1542",
                "Utensils": "oven||dish||oven||oven||oven||bowl||dish||saucepan||dish||oven",
                "Processes": "preheat||place||place||remove||preheat||break||stir||spread||boil||heat||beat||cream||spread||place||serve",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0"
            },
            {
                "_id": "6405721fa13d0d2d35890d6f",
                "Recipe_id": "2616",
                "Calories": "299.0",
                "cook_time": "25",
                "prep_time": "10",
                "servings": "4",
                "Recipe_title": "Rice Pudding with Lemon Juice and Caramelized Onion (Egyptian Kishk)",
                "total_time": "35",
                "url": "http://allrecipes.com/recipe/231759/rice-pudding-with-lemon-juice-and-caramelized-onion-egyptian-kishk/",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/images/79591.png",
                "Carbohydrate, by difference (g)": "81.2955",
                "Energy (kcal)": "1043.9806",
                "Protein (g)": "68.5817",
                "Total lipid (fat) (g)": "52.6077",
                "Utensils": "saucepan||skillet||bowl",
                "Processes": "heat||heat||add||simmer||heat||heat||cook||stirring||mix||whisk||smooth||blend||smooth||boil||reduce||heat||simmer||garnish",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0"
            },
            {
                "_id": "6405721fa13d0d2d35890d70",
                "Recipe_id": "2617",
                "Calories": "528.0",
                "cook_time": "30",
                "prep_time": "20",
                "servings": "4",
                "Recipe_title": "Couscous with Olives and Sun-Dried Tomato",
                "total_time": "50",
                "url": "http://allrecipes.com/recipe/232210/couscous-with-olives-and-sun-dried-tomato/",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1011586.jpg",
                "Carbohydrate, by difference (g)": "87.679",
                "Energy (kcal)": "1469.8658",
                "Protein (g)": "23.6185",
                "Total lipid (fat) (g)": "120.2423",
                "Utensils": "saucepan||skillet||saucepan||bowl",
                "Processes": "boil||stir||mix||reduce||heat||simmer||heat||heat||stir||cook||stirring||remove||heat||heat||cook||stir||stir||cook||stirring||pour||boil||reduce||heat||simmer||transfer||mix",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0"
            },
            {
                "_id": "6405721fa13d0d2d35890d71",
                "Recipe_id": "2618",
                "Calories": "101.0",
                "cook_time": "10",
                "prep_time": "10",
                "servings": "6",
                "Recipe_title": "Fava Bean Breakfast Spread",
                "total_time": "20",
                "url": "http://allrecipes.com/recipe/17596/fava-bean-breakfast-spread/",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/250x250/72794.jpg",
                "Carbohydrate, by difference (g)": "158.2643",
                "Energy (kcal)": "1065.3316",
                "Protein (g)": "63.0252",
                "Total lipid (fat) (g)": "24.9374",
                "Utensils": "pot",
                "Processes": "pour||boil||mix||add||boil||serve",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0"
            },
            {
                "_id": "6405721fa13d0d2d35890d72",
                "Recipe_id": "2619",
                "Calories": "498.0",
                "cook_time": "60",
                "prep_time": "20",
                "servings": "8",
                "Recipe_title": "Koshary",
                "total_time": "80",
                "url": "http://allrecipes.com/recipe/214832/koshary/",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/250x250/568661.jpg",
                "Carbohydrate, by difference (g)": "244.3117",
                "Energy (kcal)": "1814.1703",
                "Protein (g)": "87.4819",
                "Total lipid (fat) (g)": "58.2962",
                "Utensils": "container||pot||pot||saucepan||pot||pot||platter",
                "Processes": "combine||store||boil||cook||drain||set||combine||cover||drain||cover||boil||cook||boil||drain||heat||heat||cook||stir||add||heat||simmer||melt||heat||add||fry||stirring||boil||season||heat||cover||cook||mix||spread||serve",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0"
            }
        ]
  ```

**Error Responses:**
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `148ms` 
   

### **13. Get Recipe Nutrition info**(Implemented)

- **Endpoint:** `GET /recipe-nutri/nutritioninfo`

- **Query Parameters:**
  - **page** (integer, optional): The Page number(by default 1).
  - **limit** (integer, optional): The limit of number of responses (by default 10).

**Sample Request**:  
`GET recipe-nutri//nutritioninfo/?limit=2&page=1`

**Example Response:**
  ```json
  "success": "true",
    "message": "Nutrition information fetched successfully.",
    "payload": {
        "data": [
            {
                "recipeTitle": "Egyptian Lentil Soup",
                "_id": "64c4197fc6779f7b31e6dd71",
                "Recipe_id": "2610",
                "ndb_id": "2013",
                "Ash (g)": "0.0271",
                "Calcium, Ca (mg)": "3.1905",
                "Carbohydrate, by difference (g)": "0.2475",
                "Cholesterol (mg)": "0.0",
                "Copper, Cu (mg)": "0.0044",
                "Energy (kJ)": "5.6025",
                "Energy (kcal)": "1.341",
                "Fatty acids, total monounsaturated (g)": "0.0611",
                "Fatty acids, total polyunsaturated (g)": "0.0079",
                "Fatty acids, total saturated (g)": "0.0045",
                "Fatty acids, total saturated 14:0 (g)": "0.0001",
                "Fatty acids, total saturated 16:0 (g)": "0.0036",
                "Fatty acids, total saturated 16:1 undifferentiated (g)": "0.0004",
                "Fatty acids, total saturated 18:0 (g)": "0.0005",
                "Fatty acids, total saturated 18:1 undifferentiated (g)": "0.0607",
                "Fatty acids, total saturated 18:2 undifferentiated (g)": "0.0079",
                "Fiber, total dietary (g)": "0.1886",
                "Folate, DFE (g)": "0.0",
                "Folate, food (g)": "0.0",
                "Folate, total (g)": "0.0",
                "Folic acid (g)": "0.0",
                "Iron, Fe (mg)": "0.0734",
                "Magnesium, Mg (mg)": "1.485",
                "Manganese, Mn (mg)": "0.0086",
                "Niacin (mg)": "0.0096",
                "Phosphorus, P (mg)": "1.8405",
                "Phytosterols (mg)": "0.207",
                "Potassium, K (mg)": "5.7015",
                "Protein (g)": "0.0557",
                "Retinol (g)": "0.0",
                "Riboflavin (mg)": "0.0013",
                "Selenium, Se (g)": "0.1179",
                "Sodium, Na (mg)": "0.1575",
                "Thiamin (mg)": "0.0011",
                "Total lipid (fat) (g)": "0.08",
                "Vitamin A, IU (IU)": "0.0",
                "Vitamin A, RAE (g)": "0.0",
                "Vitamin B-12 (g)": "0.0",
                "Vitamin C, total ascorbic acid (mg)": "0.0945",
                "Vitamin D (D2 + D3) (g)": "0.0",
                "Vitamin D (IU)": "0.0",
                "Water (g)": "0.0399",
                "Zinc, Zn (mg)": "0.0212"
            },
            {
                "recipeTitle": "Egyptian Lentil Soup",
                "_id": "64c4197fc6779f7b31e6dd72",
                "Recipe_id": "2610",
                "ndb_id": "2014",
                "Ash (g)": "0.32",
                "Calcium, Ca (mg)": "39.102",
                "Carbohydrate, by difference (g)": "1.8581",
                "Cholesterol (mg)": "0.0",
                "Copper, Cu (mg)": "0.0364",
                "Energy (kJ)": "65.814",
                "Energy (kcal)": "15.75",
                "Fatty acids, total monounsaturated (g)": "0.5897",
                "Fatty acids, total polyunsaturated (g)": "0.1377",
                "Fatty acids, total saturated (g)": "0.0645",
                "Fatty acids, total saturated 14:0 (g)": "0.0008",
                "Fatty acids, total saturated 16:0 (g)": "0.0478",
                "Fatty acids, total saturated 16:1 undifferentiated (g)": "0.0089",
                "Fatty acids, total saturated 18:0 (g)": "0.0144",
                "Fatty acids, total saturated 18:1 undifferentiated (g)": "0.5720000000000001",
                "Fatty acids, total saturated 18:2 undifferentiated (g)": "0.1303",
                "Fiber, total dietary (g)": "0.441",
                "Folate, DFE (g)": "0.42",
                "Folate, food (g)": "0.42",
                "Folate, total (g)": "0.42",
                "Folic acid (g)": "0.0",
                "Iron, Fe (mg)": "2.7871",
                "Magnesium, Mg (mg)": "15.372",
                "Manganese, Mn (mg)": "0.14",
                "Niacin (mg)": "0.1923",
                "Phosphorus, P (mg)": "20.958000000000002",
                "Phytosterols (mg)": "2.8560000000000003",
                "Potassium, K (mg)": "75.096",
                "Protein (g)": "0.748",
                "Retinol (g)": "0.0",
                "Riboflavin (mg)": "0.0137",
                "Selenium, Se (g)": "0.2184",
                "Sodium, Na (mg)": "7.056",
                "Thiamin (mg)": "0.0264",
                "Total lipid (fat) (g)": "0.9353",
                "Vitamin A, IU (IU)": "53.34",
                "Vitamin A, RAE (g)": "2.688",
                "Vitamin B-12 (g)": "0.0",
                "Vitamin C, total ascorbic acid (mg)": "0.3234",
                "Vitamin D (D2 + D3) (g)": "0.0",
                "Vitamin D (IU)": "0.0",
                "Water (g)": "0.3385",
                "Zinc, Zn (mg)": "0.2016"
            }
        ]
  ```

**Error Responses:**
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `4.44s` 
   
### **14. Get Recipe Micro-Nutrition info**(Implemented)

- **Endpoint:** `GET /recipe-micronutri/micronutritioninfo`

- **Query Parameters:**
  - **page** (integer, optional): The Page number(by default 1).
  - **limit** (integer, optional): The limit of number of responses (by default 10).

**Sample Request**:  
`GET recipe-micronutri/micronutritioninfo/?limit=10&&page=1`

**Example Response:**
  ```json
  "success": true,
    "message": "Micronutrient records fetched successfully.",
    "payload": {
        "data": [
            {
                "_id": "643e64c5f71e838f002de598",
                "Recipe_index": "0",
                "Recipe_id": "2610",
                "cook_time": "30",
                "prep_time": "15",
                "Recipe_title": "Egyptian Lentil Soup",
                "url": "http://allrecipes.com/recipe/222661/egyptian-lentil-soup/",
                "servings": "4",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/5196784.jpg",
                "Adjusted Protein (g)": "0.0",
                "Alanine (g)": "2.1828",
                "Alcohol, ethyl (g)": "0.0",
                "Arginine (g)": "3.9707",
                "Ash (g)": "8.323",
                "Aspartic acid (g)": "5.6772",
                "Beta-sitosterol (mg)": "90.24",
                "Betaine (mg)": "0.6844",
                "Caffeine (mg)": "0.0",
                "Calcium, Ca (mg)": "290.707",
                "Campesterol (mg)": "11.52",
                "Carbohydrate, by difference (g)": "146.7606",
                "Carotene, alpha (g)": "4450.698",
                "Carotene, beta (g)": "10708.869",
                "Cholesterol (mg)": "0.0",
                "Choline, total (mg)": "19.4853",
                "Copper, Cu (mg)": "2.7285",
                "Cryptoxanthin, beta (g)": "0.2875",
                "Cystine (g)": "0.7462",
                "Dihydrophylloquinone (g)": "0.0",
                "Energy (kJ)": "3372.0515",
                "Energy (kcal)": "805.6975",
                "Fatty acids, total monounsaturated (g)": "1.6476",
                "Fatty acids, total polyunsaturated (g)": "2.5317",
                "Fatty acids, total polyunsaturated 15:0 (g)": "0.0058",
                "Fatty acids, total polyunsaturated 16:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 16:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 17:0 (g)": "0.0077",
                "Fatty acids, total polyunsaturated 17:1 (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:1 c (g)": "0.0074",
                "Fatty acids, total polyunsaturated 18:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 CLAs (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 i (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 n-6 c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 t not further defined (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 t,t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:3 n-6 c,c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 20:2 n-6 c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 20:3 undifferentiated (g)": "0.0017",
                "Fatty acids, total polyunsaturated 22:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 22:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:0 (g)": "0.023",
                "Fatty acids, total polyunsaturated 24:1 c (g)": "0.0",
                "Fatty acids, total saturated (g)": "0.9002",
                "Fatty acids, total saturated 10:0 (g)": "0.0033",
                "Fatty acids, total saturated 12:0 (g)": "0.0057",
                "Fatty acids, total saturated 14:0 (g)": "0.0098",
                "Fatty acids, total saturated 14:1 (g)": "0.0002",
                "Fatty acids, total saturated 16:0 (g)": "0.6818",
                "Fatty acids, total saturated 16:1 undifferentiated (g)": "0.0128",
                "Fatty acids, total saturated 18:0 (g)": "0.1047",
                "Fatty acids, total saturated 18:1 undifferentiated (g)": "1.6067",
                "Fatty acids, total saturated 18:2 undifferentiated (g)": "2.0311",
                "Fatty acids, total saturated 18:3 undifferentiated (g)": "0.4969",
                "Fatty acids, total saturated 18:4 (g)": "0.0",
                "Fatty acids, total saturated 20:0 (g)": "0.0269",
                "Fatty acids, total saturated 20:1 (g)": "0.03",
                "Fatty acids, total saturated 20:4 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 20:5 n-3 (EPA) (g)": "0.0",
                "Fatty acids, total saturated 22:0 (g)": "0.0269",
                "Fatty acids, total saturated 22:1 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 22:5 n-3 (DPA) (g)": "0.0",
                "Fatty acids, total saturated 22:6 n-3 (DHA) (g)": "0.0",
                "Fatty acids, total saturated 4:0 (g)": "0.0",
                "Fatty acids, total saturated 6:0 (g)": "0.0001",
                "Fatty acids, total saturated 8:0 (g)": "0.0012",
                "Fatty acids, total trans (g)": "0.0",
                "Fatty acids, total trans-monoenoic (g)": "0.0",
                "Fatty acids, total trans-polyenoic (g)": "0.0",
                "Fatty acids, total trans-polyenoic 13:0 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 15:1 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:1-11 t (18:1t n-7) (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:3 n-3 c,c,c (ALA) (g)": "0.0017",
                "Fatty acids, total trans-polyenoic 18:3i (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-3 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:4 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 21:5 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 22:4 (g)": "0.0",
                "Fiber, total dietary (g)": "26.6826",
                "Fluoride, F (g)": "5.2593",
                "Folate, DFE (g)": "430.2755",
                "Folate, food (g)": "430.2755",
                "Folate, total (g)": "430.2755",
                "Folic acid (g)": "0.0",
                "Fructose (g)": "1.6096",
                "Galactose (g)": "0.0017",
                "Glucose (dextrose) (g)": "2.137",
                "Glutamic acid (g)": "8.1885",
                "Glycine (g)": "2.0537",
                "Histidine (g)": "1.4242",
                "Hydroxyproline (g)": "0.0",
                "Iron, Fe (mg)": "17.896",
                "Isoleucine (g)": "2.2084",
                "Lactose (g)": "0.0",
                "Leucine (g)": "3.6701",
                "Lutein + zeaxanthin (g)": "356.437",
                "Lycopene (g)": "1.51",
                "Lysine (g)": "3.533",
                "Magnesium, Mg (mg)": "171.6835",
                "Maltose (g)": "0.0",
                "Manganese, Mn (mg)": "4.0639",
                "Menaquinone-4 (g)": "0.0",
                "Methionine (g)": "0.4442",
                "Niacin (mg)": "4.5088",
                "Pantothenic acid (mg)": "1.1913",
                "Phenylalanine (g)": "2.4843",
                "Phosphorus, P (mg)": "672.5555",
                "Phytosterols (mg)": "124.061",
                "Potassium, K (mg)": "1938.561",
                "Proline (g)": "2.1063",
                "Protein (g)": "49.554",
                "Retinol (g)": "0.0",
                "Riboflavin (mg)": "0.3269",
                "Selenium, Se (g)": "2.5747",
                "Serine (g)": "2.3193",
                "Sodium, Na (mg)": "128.2635",
                "Starch (g)": "93.2608",
                "Stigmasterol (mg)": "7.68",
                "Sucrose (g)": "5.2884",
                "Sugars, total (g)": "9.2571",
                "Theobromine (mg)": "0.0",
                "Thiamin (mg)": "1.1486",
                "Threonine (g)": "1.9992",
                "Tocopherol, beta (mg)": "0.0128",
                "Tocopherol, delta (mg)": "0.0",
                "Tocopherol, gamma (mg)": "0.0754",
                "Tocotrienol, alpha (mg)": "0.0506",
                "Tocotrienol, beta (mg)": "0.0",
                "Tocotrienol, delta (mg)": "0.0",
                "Tocotrienol, gamma (mg)": "0.0",
                "Total lipid (fat) (g)": "5.6564",
                "Tryptophan (g)": "0.462",
                "Tyrosine (g)": "1.3607",
                "Valine (g)": "2.5212",
                "Vitamin A, IU (IU)": "21557.1505",
                "Vitamin A, RAE (g)": "1077.5585",
                "Vitamin B-12 (g)": "0.0",
                "Vitamin B-12, added (g)": "0.0",
                "Vitamin B-6 (mg)": "1.2042",
                "Vitamin C, total ascorbic acid (mg)": "20.1579",
                "Vitamin D (D2 + D3) (g)": "0.0",
                "Vitamin D (IU)": "0.0",
                "Vitamin D2 (ergocalciferol) (g)": "0.0",
                "Vitamin D3 (cholecalciferol) (g)": "0.0",
                "Vitamin E (alpha-tocopherol) (mg)": "1.0203",
                "Vitamin E, added (mg)": "0.0",
                "Vitamin K (phylloquinone) (g)": "19.4893",
                "Water (g)": "908.8117",
                "Zinc, Zn (mg)": "7.7139",
                "Processes": "place||heat||cook||remove||cool||blend||smooth||stir||heat",
                "Calories": "196.0",
                "total_time": "45",
                "Continent": "African",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian"
            },
            {
                "_id": "643e64c5f71e838f002de599",
                "Recipe_index": "1",
                "Recipe_id": "2611",
                "cook_time": "35",
                "prep_time": "10",
                "Recipe_title": "Egyptian Green Beans with Carrots",
                "url": "http://allrecipes.com/recipe/233456/egyptian-green-beans-with-carrots/",
                "servings": "4",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/2619313.jpg",
                "Adjusted Protein (g)": "0.0",
                "Alanine (g)": "0.082",
                "Alcohol, ethyl (g)": "0.0",
                "Arginine (g)": "0.2266",
                "Ash (g)": "4.5639",
                "Aspartic acid (g)": "0.3773",
                "Beta-sitosterol (mg)": "0.0",
                "Betaine (mg)": "0.278",
                "Caffeine (mg)": "0.0",
                "Calcium, Ca (mg)": "73.195",
                "Campesterol (mg)": "0.0",
                "Carbohydrate, by difference (g)": "39.3312",
                "Carotene, alpha (g)": "9.28",
                "Carotene, beta (g)": "290.12",
                "Cholesterol (mg)": "14.4",
                "Choline, total (mg)": "67.0492",
                "Copper, Cu (mg)": "0.4543",
                "Cryptoxanthin, beta (g)": "0.0",
                "Cystine (g)": "0.0246",
                "Dihydrophylloquinone (g)": "0.0",
                "Energy (kJ)": "1618.007",
                "Energy (kcal)": "386.767",
                "Fatty acids, total monounsaturated (g)": "4.39",
                "Fatty acids, total polyunsaturated (g)": "1.3338",
                "Fatty acids, total polyunsaturated 15:0 (g)": "0.0",
                "Fatty acids, total polyunsaturated 16:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 16:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 17:0 (g)": "0.0",
                "Fatty acids, total polyunsaturated 17:1 (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 CLAs (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 i (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 n-6 c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 t not further defined (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 t,t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:3 n-6 c,c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 20:2 n-6 c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 20:3 undifferentiated (g)": "0.0",
                "Fatty acids, total polyunsaturated 22:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 22:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:0 (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:1 c (g)": "0.0",
                "Fatty acids, total saturated (g)": "12.7285",
                "Fatty acids, total saturated 10:0 (g)": "0.5033",
                "Fatty acids, total saturated 12:0 (g)": "6.392",
                "Fatty acids, total saturated 14:0 (g)": "2.2752",
                "Fatty acids, total saturated 14:1 (g)": "0.0",
                "Fatty acids, total saturated 16:0 (g)": "2.3968",
                "Fatty acids, total saturated 16:1 undifferentiated (g)": "0.4279",
                "Fatty acids, total saturated 18:0 (g)": "0.661",
                "Fatty acids, total saturated 18:1 undifferentiated (g)": "3.9185",
                "Fatty acids, total saturated 18:2 undifferentiated (g)": "1.2802",
                "Fatty acids, total saturated 18:3 undifferentiated (g)": "0.0532",
                "Fatty acids, total saturated 18:4 (g)": "0.0",
                "Fatty acids, total saturated 20:0 (g)": "0.0",
                "Fatty acids, total saturated 20:1 (g)": "0.0195",
                "Fatty acids, total saturated 20:4 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 20:5 n-3 (EPA) (g)": "0.0",
                "Fatty acids, total saturated 22:0 (g)": "0.0",
                "Fatty acids, total saturated 22:1 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 22:5 n-3 (DPA) (g)": "0.0",
                "Fatty acids, total saturated 22:6 n-3 (DHA) (g)": "0.0",
                "Fatty acids, total saturated 4:0 (g)": "0.0",
                "Fatty acids, total saturated 6:0 (g)": "0.0272",
                "Fatty acids, total saturated 8:0 (g)": "0.4488",
                "Fatty acids, total trans (g)": "0.0",
                "Fatty acids, total trans-monoenoic (g)": "0.0",
                "Fatty acids, total trans-polyenoic (g)": "0.0",
                "Fatty acids, total trans-polyenoic 13:0 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 15:1 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:1-11 t (18:1t n-7) (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:3 n-3 c,c,c (ALA) (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:3i (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-3 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:4 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 21:5 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 22:4 (g)": "0.0",
                "Fiber, total dietary (g)": "4.128",
                "Fluoride, F (g)": "1.65",
                "Folate, DFE (g)": "56.52",
                "Folate, food (g)": "56.52",
                "Folate, total (g)": "56.52",
                "Folic acid (g)": "0.0",
                "Fructose (g)": "3.807",
                "Galactose (g)": "0.0",
                "Glucose (dextrose) (g)": "4.795",
                "Glutamic acid (g)": "1.1105",
                "Glycine (g)": "0.0799",
                "Histidine (g)": "0.0505",
                "Hydroxyproline (g)": "0.0",
                "Iron, Fe (mg)": "2.4485",
                "Isoleucine (g)": "0.0625",
                "Lactose (g)": "0.0",
                "Leucine (g)": "0.0957",
                "Lutein + zeaxanthin (g)": "11.76",
                "Lycopene (g)": "9204.48",
                "Lysine (g)": "0.1178",
                "Magnesium, Mg (mg)": "50.285",
                "Maltose (g)": "0.0896",
                "Manganese, Mn (mg)": "0.5304",
                "Menaquinone-4 (g)": "0.0",
                "Methionine (g)": "0.0162",
                "Niacin (mg)": "8.809",
                "Pantothenic acid (mg)": "0.2657",
                "Phenylalanine (g)": "0.0901",
                "Phosphorus, P (mg)": "209.73",
                "Phytosterols (mg)": "35.65",
                "Potassium, K (mg)": "1077.135",
                "Proline (g)": "0.048",
                "Protein (g)": "15.5638",
                "Retinol (g)": "4.8",
                "Riboflavin (mg)": "0.505",
                "Selenium, Se (g)": "13.858",
                "Serine (g)": "0.0832",
                "Sodium, Na (mg)": "712.39",
                "Starch (g)": "0.0704",
                "Stigmasterol (mg)": "0.0",
                "Sucrose (g)": "1.581",
                "Sugars, total (g)": "17.9016",
                "Theobromine (mg)": "0.0",
                "Thiamin (mg)": "0.2692",
                "Threonine (g)": "0.0835",
                "Tocopherol, beta (mg)": "0.0",
                "Tocopherol, delta (mg)": "0.0",
                "Tocopherol, gamma (mg)": "0.1664",
                "Tocotrienol, alpha (mg)": "0.06",
                "Tocotrienol, beta (mg)": "0.0",
                "Tocotrienol, delta (mg)": "0.0",
                "Tocotrienol, gamma (mg)": "0.0",
                "Total lipid (fat) (g)": "19.7239",
                "Tryptophan (g)": "0.0349",
                "Tyrosine (g)": "0.047",
                "Valine (g)": "0.0772",
                "Vitamin A, IU (IU)": "505.94",
                "Vitamin A, RAE (g)": "29.12",
                "Vitamin B-12 (g)": "0.0",
                "Vitamin B-12, added (g)": "0.0",
                "Vitamin B-6 (mg)": "0.6172",
                "Vitamin C, total ascorbic acid (mg)": "21.045",
                "Vitamin D (D2 + D3) (g)": "0.0",
                "Vitamin D (IU)": "0.0",
                "Vitamin D2 (ergocalciferol) (g)": "0.0",
                "Vitamin D3 (cholecalciferol) (g)": "0.0",
                "Vitamin E (alpha-tocopherol) (mg)": "2.073",
                "Vitamin E, added (mg)": "0.0",
                "Vitamin K (phylloquinone) (g)": "8.6692",
                "Water (g)": "603.0612",
                "Zinc, Zn (mg)": "1.2356",
                "Utensils": "pot",
                "Processes": "heat||heat||cook||stir||stir||cook||stirring||pour||stir||boil||add||boil||simmer",
                "Calories": "80.0",
                "total_time": "45",
                "Continent": "African",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian"
            },
            {
                "_id": "643e64c5f71e838f002de59a",
                "Recipe_index": "2",
                "Recipe_id": "2612",
                "cook_time": "120",
                "prep_time": "15",
                "Recipe_title": "Egyptian Bamia",
                "url": "http://allrecipes.com/recipe/227986/egyptian-bamia/",
                "servings": "4",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/3840150.jpg",
                "Adjusted Protein (g)": "0.0",
                "Alanine (g)": "4.0039",
                "Alcohol, ethyl (g)": "0.0",
                "Arginine (g)": "5.5042",
                "Ash (g)": "6.3193",
                "Aspartic acid (g)": "0.4877",
                "Beta-sitosterol (mg)": "0.0",
                "Betaine (mg)": "0.204",
                "Caffeine (mg)": "0.0",
                "Calcium, Ca (mg)": "338.2219",
                "Campesterol (mg)": "0.0",
                "Carbohydrate, by difference (g)": "34.0004",
                "Carotene, alpha (g)": "0.0",
                "Carotene, beta (g)": "606.0455",
                "Cholesterol (mg)": "275.7206",
                "Choline, total (mg)": "42.1302",
                "Copper, Cu (mg)": "0.6786",
                "Cryptoxanthin, beta (g)": "0.0",
                "Cystine (g)": "1.051",
                "Dihydrophylloquinone (g)": "0.0",
                "Energy (kJ)": "7365.8793",
                "Energy (kcal)": "1762.7662",
                "Fatty acids, total monounsaturated (g)": "64.3061",
                "Fatty acids, total polyunsaturated (g)": "9.3512",
                "Fatty acids, total polyunsaturated 15:0 (g)": "0.0",
                "Fatty acids, total polyunsaturated 16:1 c (g)": "0.6644",
                "Fatty acids, total polyunsaturated 16:1 t (g)": "0.0994",
                "Fatty acids, total polyunsaturated 17:0 (g)": "1.6436",
                "Fatty acids, total polyunsaturated 17:1 (g)": "0.0675",
                "Fatty acids, total polyunsaturated 18:1 c (g)": "19.7886",
                "Fatty acids, total polyunsaturated 18:1 t (g)": "4.1494",
                "Fatty acids, total polyunsaturated 18:2 CLAs (g)": "1.2792",
                "Fatty acids, total polyunsaturated 18:2 i (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 n-6 c,c (g)": "0.895",
                "Fatty acids, total polyunsaturated 18:2 t not further defined (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 t,t (g)": "0.0542",
                "Fatty acids, total polyunsaturated 18:3 n-6 c,c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 20:2 n-6 c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 20:3 undifferentiated (g)": "0.0",
                "Fatty acids, total polyunsaturated 22:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 22:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:0 (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:1 c (g)": "0.0",
                "Fatty acids, total saturated (g)": "44.8202",
                "Fatty acids, total saturated 10:0 (g)": "0.1175",
                "Fatty acids, total saturated 12:0 (g)": "0.1266",
                "Fatty acids, total saturated 14:0 (g)": "1.8863",
                "Fatty acids, total saturated 14:1 (g)": "0.0452",
                "Fatty acids, total saturated 16:0 (g)": "20.5801",
                "Fatty acids, total saturated 16:1 undifferentiated (g)": "1.4445",
                "Fatty acids, total saturated 18:0 (g)": "19.9037",
                "Fatty acids, total saturated 18:1 undifferentiated (g)": "62.5563",
                "Fatty acids, total saturated 18:2 undifferentiated (g)": "7.7065",
                "Fatty acids, total saturated 18:3 undifferentiated (g)": "1.3554",
                "Fatty acids, total saturated 18:4 (g)": "0.0",
                "Fatty acids, total saturated 20:0 (g)": "0.2914",
                "Fatty acids, total saturated 20:1 (g)": "0.1905",
                "Fatty acids, total saturated 20:4 undifferentiated (g)": "0.0904",
                "Fatty acids, total saturated 20:5 n-3 (EPA) (g)": "0.0678",
                "Fatty acids, total saturated 22:0 (g)": "0.255",
                "Fatty acids, total saturated 22:1 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 22:5 n-3 (DPA) (g)": "0.113",
                "Fatty acids, total saturated 22:6 n-3 (DHA) (g)": "0.0226",
                "Fatty acids, total saturated 4:0 (g)": "0.0",
                "Fatty acids, total saturated 6:0 (g)": "0.0",
                "Fatty acids, total saturated 8:0 (g)": "0.0045",
                "Fatty acids, total trans (g)": "4.2985",
                "Fatty acids, total trans-monoenoic (g)": "4.2443",
                "Fatty acids, total trans-polyenoic (g)": "0.0542",
                "Fatty acids, total trans-polyenoic 13:0 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 15:1 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:1-11 t (18:1t n-7) (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:3 n-3 c,c,c (ALA) (g)": "0.9356",
                "Fatty acids, total trans-polyenoic 18:3i (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-3 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:4 n-6 (g)": "0.0904",
                "Fatty acids, total trans-polyenoic 21:5 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 22:4 (g)": "0.0",
                "Fiber, total dietary (g)": "8.8833",
                "Fluoride, F (g)": "1.65",
                "Folate, DFE (g)": "454.5606",
                "Folate, food (g)": "454.5606",
                "Folate, total (g)": "454.5606",
                "Folic acid (g)": "0.0",
                "Fructose (g)": "1.935",
                "Galactose (g)": "0.0",
                "Glucose (dextrose) (g)": "2.955",
                "Glutamic acid (g)": "11.7151",
                "Glycine (g)": "3.412",
                "Histidine (g)": "1.714",
                "Hydroxyproline (g)": "0.0",
                "Iron, Fe (mg)": "7.0043",
                "Isoleucine (g)": "3.6096",
                "Lactose (g)": "0.0",
                "Leucine (g)": "6.1923",
                "Lutein + zeaxanthin (g)": "1393.5758",
                "Lycopene (g)": "0.0",
                "Lysine (g)": "6.9258",
                "Magnesium, Mg (mg)": "229.6281",
                "Maltose (g)": "0.0",
                "Manganese, Mn (mg)": "2.7383",
                "Menaquinone-4 (g)": "0.0",
                "Methionine (g)": "2.5453",
                "Niacin (mg)": "21.8833",
                "Pantothenic acid (mg)": "3.0211",
                "Phenylalanine (g)": "3.2061",
                "Phosphorus, P (mg)": "842.4106",
                "Phytosterols (mg)": "141.84",
                "Potassium, K (mg)": "2092.5671",
                "Proline (g)": "2.5772",
                "Protein (g)": "82.9034",
                "Retinol (g)": "58.7601",
                "Riboflavin (mg)": "0.8852",
                "Selenium, Se (g)": "16.0373",
                "Serine (g)": "2.7415",
                "Sodium, Na (mg)": "287.357",
                "Starch (g)": "0.0",
                "Stigmasterol (mg)": "0.0",
                "Sucrose (g)": "1.485",
                "Sugars, total (g)": "14.91",
                "Theobromine (mg)": "0.0",
                "Thiamin (mg)": "0.9038",
                "Threonine (g)": "3.8329",
                "Tocopherol, beta (mg)": "0.0594",
                "Tocopherol, delta (mg)": "0.0",
                "Tocopherol, gamma (mg)": "0.4482",
                "Tocotrienol, alpha (mg)": "0.06",
                "Tocotrienol, beta (mg)": "0.0",
                "Tocotrienol, delta (mg)": "0.0",
                "Tocotrienol, gamma (mg)": "0.0",
                "Total lipid (fat) (g)": "146.8971",
                "Tryptophan (g)": "0.9065",
                "Tyrosine (g)": "2.8799",
                "Valine (g)": "4.1449",
                "Vitamin A, IU (IU)": "1209.4563",
                "Vitamin A, RAE (g)": "110.5783",
                "Vitamin B-12 (g)": "8.9496",
                "Vitamin B-12, added (g)": "0.0",
                "Vitamin B-6 (mg)": "0.7439",
                "Vitamin C, total ascorbic acid (mg)": "46.797",
                "Vitamin D (D2 + D3) (g)": "0.452",
                "Vitamin D (IU)": "13.56",
                "Vitamin D2 (ergocalciferol) (g)": "0.0",
                "Vitamin D3 (cholecalciferol) (g)": "0.452",
                "Vitamin E (alpha-tocopherol) (mg)": "10.4014",
                "Vitamin E, added (mg)": "0.0",
                "Vitamin K (phylloquinone) (g)": "175.3201",
                "Water (g)": "1151.3867",
                "Zinc, Zn (mg)": "16.064",
                "Utensils": "saucepan||oven||dish||oven",
                "Processes": "heat||heat||cook||stir||mix||cook||stir||stir||season||boil||simmer||stir||preheat||stir||boil||cover||bake",
                "Calories": "339.0",
                "total_time": "135",
                "Continent": "African",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian"
            },
            {
                "_id": "643e64c5f71e838f002de59b",
                "Recipe_index": "3",
                "Recipe_id": "2613",
                "cook_time": "15",
                "prep_time": "15",
                "Recipe_title": "Magpie's Easy Falafel Cakes",
                "url": "http://allrecipes.com/recipe/143113/magpies-easy-falafel-cakes/",
                "servings": "3",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/5229672.jpg",
                "Adjusted Protein (g)": "0.0",
                "Alanine (g)": "2.9527",
                "Alcohol, ethyl (g)": "0.0",
                "Arginine (g)": "6.153",
                "Ash (g)": "9.9426",
                "Aspartic acid (g)": "7.7498",
                "Beta-sitosterol (mg)": "0.0",
                "Betaine (mg)": "4.06",
                "Caffeine (mg)": "0.0",
                "Calcium, Ca (mg)": "324.1933",
                "Campesterol (mg)": "0.0",
                "Carbohydrate, by difference (g)": "225.1172",
                "Carotene, alpha (g)": "19.215",
                "Carotene, beta (g)": "186.6187",
                "Cholesterol (mg)": "46.6583",
                "Choline, total (mg)": "324.769",
                "Copper, Cu (mg)": "2.1257",
                "Cryptoxanthin, beta (g)": "0.7667",
                "Cystine (g)": "0.9146",
                "Dihydrophylloquinone (g)": "0.0",
                "Energy (kJ)": "7056.845",
                "Energy (kcal)": "1686.8298",
                "Fatty acids, total monounsaturated (g)": "28.3622",
                "Fatty acids, total polyunsaturated (g)": "12.3317",
                "Fatty acids, total polyunsaturated 15:0 (g)": "0.1311",
                "Fatty acids, total polyunsaturated 16:1 c (g)": "0.2254",
                "Fatty acids, total polyunsaturated 16:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 17:0 (g)": "0.0887",
                "Fatty acids, total polyunsaturated 17:1 (g)": "0.0392",
                "Fatty acids, total polyunsaturated 18:1 c (g)": "2.655",
                "Fatty acids, total polyunsaturated 18:1 t (g)": "0.5106",
                "Fatty acids, total polyunsaturated 18:2 CLAs (g)": "0.0621",
                "Fatty acids, total polyunsaturated 18:2 i (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 n-6 c,c (g)": "0.3358",
                "Fatty acids, total polyunsaturated 18:2 t not further defined (g)": "0.0997",
                "Fatty acids, total polyunsaturated 18:2 t,t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:3 n-6 c,c,c (g)": "0.0046",
                "Fatty acids, total polyunsaturated 20:2 n-6 c,c (g)": "0.0061",
                "Fatty acids, total polyunsaturated 20:3 undifferentiated (g)": "0.0146",
                "Fatty acids, total polyunsaturated 22:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 22:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:0 (g)": "0.0046",
                "Fatty acids, total polyunsaturated 24:1 c (g)": "0.0008",
                "Fatty acids, total saturated (g)": "13.841",
                "Fatty acids, total saturated 10:0 (g)": "0.299",
                "Fatty acids, total saturated 12:0 (g)": "0.3512",
                "Fatty acids, total saturated 14:0 (g)": "1.322",
                "Fatty acids, total saturated 14:1 (g)": "0.1027",
                "Fatty acids, total saturated 16:0 (g)": "8.8634",
                "Fatty acids, total saturated 16:1 undifferentiated (g)": "0.6208",
                "Fatty acids, total saturated 18:0 (g)": "2.2819",
                "Fatty acids, total saturated 18:1 undifferentiated (g)": "27.4879",
                "Fatty acids, total saturated 18:2 undifferentiated (g)": "11.6744",
                "Fatty acids, total saturated 18:3 undifferentiated (g)": "0.5973",
                "Fatty acids, total saturated 18:4 (g)": "0.0",
                "Fatty acids, total saturated 20:0 (g)": "0.1325",
                "Fatty acids, total saturated 20:1 (g)": "0.1107",
                "Fatty acids, total saturated 20:4 undifferentiated (g)": "0.0192",
                "Fatty acids, total saturated 20:5 n-3 (EPA) (g)": "0.0046",
                "Fatty acids, total saturated 22:0 (g)": "0.0432",
                "Fatty acids, total saturated 22:1 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 22:5 n-3 (DPA) (g)": "0.0084",
                "Fatty acids, total saturated 22:6 n-3 (DHA) (g)": "0.0008",
                "Fatty acids, total saturated 4:0 (g)": "0.0382",
                "Fatty acids, total saturated 6:0 (g)": "0.1631",
                "Fatty acids, total saturated 8:0 (g)": "0.1152",
                "Fatty acids, total trans (g)": "0.6103",
                "Fatty acids, total trans-monoenoic (g)": "0.5106",
                "Fatty acids, total trans-polyenoic (g)": "0.0997",
                "Fatty acids, total trans-polyenoic 13:0 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 15:1 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:1-11 t (18:1t n-7) (g)": "0.1211",
                "Fatty acids, total trans-polyenoic 18:3 n-3 c,c,c (ALA) (g)": "0.0521",
                "Fatty acids, total trans-polyenoic 18:3i (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-3 (g)": "0.0008",
                "Fatty acids, total trans-polyenoic 20:3 n-6 (g)": "0.0138",
                "Fatty acids, total trans-polyenoic 20:4 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 21:5 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 22:4 (g)": "0.0008",
                "Fiber, total dietary (g)": "40.6337",
                "Fluoride, F (g)": "0.385",
                "Folate, DFE (g)": "1690.0224",
                "Folate, food (g)": "1689.9099",
                "Folate, total (g)": "1689.9849",
                "Folic acid (g)": "0.075",
                "Fructose (g)": "0.4515",
                "Galactose (g)": "0.0",
                "Glucose (dextrose) (g)": "0.6895",
                "Glutamic acid (g)": "12.0546",
                "Glycine (g)": "2.7688",
                "Histidine (g)": "1.8735",
                "Hydroxyproline (g)": "0.0",
                "Iron, Fe (mg)": "16.1587",
                "Isoleucine (g)": "2.9111",
                "Lactose (g)": "2.6169",
                "Leucine (g)": "5.0231",
                "Lutein + zeaxanthin (g)": "429.0697",
                "Lycopene (g)": "0.0",
                "Lysine (g)": "4.4846",
                "Magnesium, Mg (mg)": "304.1218",
                "Maltose (g)": "0.0019",
                "Manganese, Mn (mg)": "64.401",
                "Menaquinone-4 (g)": "4.6",
                "Methionine (g)": "0.9402",
                "Niacin (mg)": "6.0665",
                "Pantothenic acid (mg)": "5.3763",
                "Phenylalanine (g)": "3.5984",
                "Phosphorus, P (mg)": "942.3324",
                "Phytosterols (mg)": "67.5885",
                "Potassium, K (mg)": "2501.4608",
                "Proline (g)": "3.0541",
                "Protein (g)": "67.8589",
                "Retinol (g)": "95.7667",
                "Riboflavin (mg)": "0.8696",
                "Selenium, Se (g)": "10.2715",
                "Serine (g)": "3.4209",
                "Sodium, Na (mg)": "133.0312",
                "Starch (g)": "0.0",
                "Stigmasterol (mg)": "0.0",
                "Sucrose (g)": "0.3495",
                "Sugars, total (g)": "36.5519",
                "Theobromine (mg)": "0.0",
                "Thiamin (mg)": "1.6222",
                "Threonine (g)": "2.5383",
                "Tocopherol, beta (mg)": "0.0297",
                "Tocopherol, delta (mg)": "0.0",
                "Tocopherol, gamma (mg)": "1.0214",
                "Tocotrienol, alpha (mg)": "0.0933",
                "Tocotrienol, beta (mg)": "0.0",
                "Tocotrienol, delta (mg)": "0.0",
                "Tocotrienol, gamma (mg)": "0.0397",
                "Total lipid (fat) (g)": "62.4829",
                "Tryptophan (g)": "0.6667",
                "Tyrosine (g)": "1.784",
                "Valine (g)": "2.9344",
                "Vitamin A, IU (IU)": "648.9446",
                "Vitamin A, RAE (g)": "111.8362",
                "Vitamin B-12 (g)": "0.1741",
                "Vitamin B-12, added (g)": "0.0",
                "Vitamin B-6 (mg)": "1.9293",
                "Vitamin C, total ascorbic acid (mg)": "19.5802",
                "Vitamin D (D2 + D3) (g)": "0.0375",
                "Vitamin D (IU)": "1.5375",
                "Vitamin D2 (ergocalciferol) (g)": "0.0",
                "Vitamin D3 (cholecalciferol) (g)": "0.0375",
                "Vitamin E (alpha-tocopherol) (mg)": "6.8426",
                "Vitamin E, added (mg)": "0.0",
                "Vitamin K (phylloquinone) (g)": "44.9732",
                "Water (g)": "123.2322",
                "Zinc, Zn (mg)": "9.5153",
                "Utensils": "skillet||processor||bowl||cup||dish||tablespoon||skillet",
                "Processes": "cook||smooth||transfer||stir||cover||chill||place||roll||heat||heat||cook",
                "Calories": "409.0",
                "total_time": "60",
                "Continent": "African",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian"
            },
            {
                "_id": "643e64c5f71e838f002de59c",
                "Recipe_index": "4",
                "Recipe_id": "2614",
                "cook_time": "5",
                "prep_time": "20",
                "Recipe_title": "Dukkah",
                "url": "http://allrecipes.com/recipe/79684/dukkah/",
                "servings": "24",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4572970.jpg",
                "Adjusted Protein (g)": "0.0",
                "Alanine (g)": "1.2022",
                "Alcohol, ethyl (g)": "0.0",
                "Arginine (g)": "3.2117",
                "Ash (g)": "8.744",
                "Aspartic acid (g)": "2.1786",
                "Beta-sitosterol (mg)": "0.0",
                "Betaine (mg)": "1.2282",
                "Caffeine (mg)": "0.0",
                "Calcium, Ca (mg)": "747.754",
                "Campesterol (mg)": "0.0",
                "Carbohydrate, by difference (g)": "83.0609",
                "Carotene, alpha (g)": "1.656",
                "Carotene, beta (g)": "134.22",
                "Cholesterol (mg)": "0.0",
                "Choline, total (mg)": "4.5234",
                "Copper, Cu (mg)": "2.3266",
                "Cryptoxanthin, beta (g)": "3.45",
                "Cystine (g)": "0.451",
                "Dihydrophylloquinone (g)": "0.0",
                "Energy (kJ)": "4209.04",
                "Energy (kcal)": "1006.238",
                "Fatty acids, total monounsaturated (g)": "24.8972",
                "Fatty acids, total polyunsaturated (g)": "25.953",
                "Fatty acids, total polyunsaturated 15:0 (g)": "0.0",
                "Fatty acids, total polyunsaturated 16:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 16:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 17:0 (g)": "0.0",
                "Fatty acids, total polyunsaturated 17:1 (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:1 c (g)": "0.0893",
                "Fatty acids, total polyunsaturated 18:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 CLAs (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 i (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 n-6 c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 t not further defined (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 t,t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:3 n-6 c,c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 20:2 n-6 c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 20:3 undifferentiated (g)": "0.021",
                "Fatty acids, total polyunsaturated 22:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 22:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:0 (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:1 c (g)": "0.0",
                "Fatty acids, total saturated (g)": "8.5417",
                "Fatty acids, total saturated 10:0 (g)": "0.0072",
                "Fatty acids, total saturated 12:0 (g)": "0.015",
                "Fatty acids, total saturated 14:0 (g)": "0.1523",
                "Fatty acids, total saturated 14:1 (g)": "0.0022",
                "Fatty acids, total saturated 16:0 (g)": "5.4414",
                "Fatty acids, total saturated 16:1 undifferentiated (g)": "0.2188",
                "Fatty acids, total saturated 18:0 (g)": "2.5202",
                "Fatty acids, total saturated 18:1 undifferentiated (g)": "24.5479",
                "Fatty acids, total saturated 18:2 undifferentiated (g)": "25.428",
                "Fatty acids, total saturated 18:3 undifferentiated (g)": "0.4777",
                "Fatty acids, total saturated 18:4 (g)": "0.0",
                "Fatty acids, total saturated 20:0 (g)": "0.0",
                "Fatty acids, total saturated 20:1 (g)": "0.1058",
                "Fatty acids, total saturated 20:4 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 20:5 n-3 (EPA) (g)": "0.0",
                "Fatty acids, total saturated 22:0 (g)": "0.0",
                "Fatty acids, total saturated 22:1 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 22:5 n-3 (DPA) (g)": "0.0",
                "Fatty acids, total saturated 22:6 n-3 (DHA) (g)": "0.0",
                "Fatty acids, total saturated 4:0 (g)": "0.0",
                "Fatty acids, total saturated 6:0 (g)": "0.0017",
                "Fatty acids, total saturated 8:0 (g)": "0.0141",
                "Fatty acids, total trans (g)": "0.0",
                "Fatty acids, total trans-monoenoic (g)": "0.0",
                "Fatty acids, total trans-polyenoic (g)": "0.0",
                "Fatty acids, total trans-polyenoic 13:0 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 15:1 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:1-11 t (18:1t n-7) (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:3 n-3 c,c,c (ALA) (g)": "0.021",
                "Fatty acids, total trans-polyenoic 18:3i (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-3 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:4 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 21:5 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 22:4 (g)": "0.0",
                "Fiber, total dietary (g)": "20.1014",
                "Fluoride, F (g)": "4.7196",
                "Folate, DFE (g)": "121.146",
                "Folate, food (g)": "121.146",
                "Folate, total (g)": "121.146",
                "Folic acid (g)": "0.0",
                "Fructose (g)": "0.0317",
                "Galactose (g)": "0.0207",
                "Glucose (dextrose) (g)": "0.0331",
                "Glutamic acid (g)": "4.9614",
                "Glycine (g)": "1.5249",
                "Histidine (g)": "0.6507",
                "Hydroxyproline (g)": "0.0",
                "Iron, Fe (mg)": "13.9472",
                "Isoleucine (g)": "0.9697",
                "Lactose (g)": "0.0",
                "Leucine (g)": "1.7767",
                "Lutein + zeaxanthin (g)": "116.412",
                "Lycopene (g)": "2.76",
                "Lysine (g)": "0.7189",
                "Magnesium, Mg (mg)": "215.718",
                "Maltose (g)": "0.0",
                "Manganese, Mn (mg)": "4.0983",
                "Menaquinone-4 (g)": "0.0",
                "Methionine (g)": "0.7188",
                "Niacin (mg)": "8.0302",
                "Pantothenic acid (mg)": "1.0259",
                "Phenylalanine (g)": "1.1943",
                "Phosphorus, P (mg)": "1024.984",
                "Phytosterols (mg)": "25.456",
                "Potassium, K (mg)": "1021.462",
                "Proline (g)": "1.1706",
                "Protein (g)": "26.18",
                "Retinol (g)": "0.0",
                "Riboflavin (mg)": "0.705",
                "Selenium, Se (g)": "3.9202",
                "Serine (g)": "1.2216",
                "Sodium, Na (mg)": "222.42",
                "Starch (g)": "0.0",
                "Stigmasterol (mg)": "0.0",
                "Sucrose (g)": "0.0028",
                "Sugars, total (g)": "32.3583",
                "Theobromine (mg)": "0.0",
                "Thiamin (mg)": "1.6538",
                "Threonine (g)": "0.9205",
                "Tocopherol, beta (mg)": "0.0",
                "Tocopherol, delta (mg)": "0.0",
                "Tocopherol, gamma (mg)": "0.9053",
                "Tocotrienol, alpha (mg)": "0.1173",
                "Tocotrienol, beta (mg)": "0.0",
                "Tocotrienol, delta (mg)": "0.0",
                "Tocotrienol, gamma (mg)": "0.0",
                "Total lipid (fat) (g)": "73.1713",
                "Tryptophan (g)": "0.476",
                "Tyrosine (g)": "0.9619",
                "Valine (g)": "1.2695",
                "Vitamin A, IU (IU)": "308.286",
                "Vitamin A, RAE (g)": "15.006",
                "Vitamin B-12 (g)": "0.0",
                "Vitamin B-12, added (g)": "0.0",
                "Vitamin B-6 (mg)": "0.2712",
                "Vitamin C, total ascorbic acid (mg)": "323.024",
                "Vitamin D (D2 + D3) (g)": "0.0",
                "Vitamin D (IU)": "0.0",
                "Vitamin D2 (ergocalciferol) (g)": "0.0",
                "Vitamin D3 (cholecalciferol) (g)": "0.0",
                "Vitamin E (alpha-tocopherol) (mg)": "0.5431",
                "Vitamin E, added (mg)": "0.0",
                "Vitamin K (phylloquinone) (g)": "23.2386",
                "Water (g)": "123.8927",
                "Zinc, Zn (mg)": "6.7782",
                "Utensils": "oven||sheet||skillet||bowl||skillet||pan||processor||bowl||processor||bowl",
                "Processes": "preheat||place||pour||fold||cover||remove||cool||heat||stirring||pop||transfer||process||pour||place||process||stir||season||mix",
                "Calories": "45.0",
                "total_time": "25",
                "Continent": "African",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian"
            },
            {
                "_id": "643e64c5f71e838f002de59d",
                "Recipe_index": "5",
                "Recipe_id": "2615",
                "cook_time": "30",
                "prep_time": "30",
                "Recipe_title": "Om Ali",
                "url": "http://allrecipes.com/recipe/19898/om-ali/",
                "servings": "8",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1101880.jpg",
                "Adjusted Protein (g)": "0.0",
                "Alanine (g)": "1.2349",
                "Alcohol, ethyl (g)": "0.0",
                "Arginine (g)": "1.3548",
                "Ash (g)": "12.9732",
                "Aspartic acid (g)": "3.0206",
                "Beta-sitosterol (mg)": "0.0",
                "Betaine (mg)": "5.856",
                "Caffeine (mg)": "0.0",
                "Calcium, Ca (mg)": "1270.67",
                "Campesterol (mg)": "0.0",
                "Carbohydrate, by difference (g)": "543.3028",
                "Carotene, alpha (g)": "0.0",
                "Carotene, beta (g)": "113.6",
                "Cholesterol (mg)": "165.4",
                "Choline, total (mg)": "195.4123",
                "Copper, Cu (mg)": "1.4231",
                "Cryptoxanthin, beta (g)": "0.0",
                "Cystine (g)": "0.2472",
                "Dihydrophylloquinone (g)": "0.0",
                "Energy (kJ)": "17232.2433",
                "Energy (kcal)": "4117.4667",
                "Fatty acids, total monounsaturated (g)": "42.4597",
                "Fatty acids, total polyunsaturated (g)": "74.1605",
                "Fatty acids, total polyunsaturated 15:0 (g)": "0.2118",
                "Fatty acids, total polyunsaturated 16:1 c (g)": "0.3282",
                "Fatty acids, total polyunsaturated 16:1 t (g)": "0.0654",
                "Fatty acids, total polyunsaturated 17:0 (g)": "0.126",
                "Fatty acids, total polyunsaturated 17:1 (g)": "0.039",
                "Fatty acids, total polyunsaturated 18:1 c (g)": "4.2468",
                "Fatty acids, total polyunsaturated 18:1 t (g)": "0.5346",
                "Fatty acids, total polyunsaturated 18:2 CLAs (g)": "0.1128",
                "Fatty acids, total polyunsaturated 18:2 i (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 n-6 c,c (g)": "0.5244",
                "Fatty acids, total polyunsaturated 18:2 t not further defined (g)": "0.1392",
                "Fatty acids, total polyunsaturated 18:2 t,t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:3 n-6 c,c,c (g)": "0.0012",
                "Fatty acids, total polyunsaturated 20:2 n-6 c,c (g)": "0.0048",
                "Fatty acids, total polyunsaturated 20:3 undifferentiated (g)": "0.0246",
                "Fatty acids, total polyunsaturated 22:1 c (g)": "0.0018",
                "Fatty acids, total polyunsaturated 22:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:0 (g)": "0.0054",
                "Fatty acids, total polyunsaturated 24:1 c (g)": "0.0",
                "Fatty acids, total saturated (g)": "66.6415",
                "Fatty acids, total saturated 10:0 (g)": "2.7662",
                "Fatty acids, total saturated 12:0 (g)": "13.2728",
                "Fatty acids, total saturated 14:0 (g)": "9.5995",
                "Fatty acids, total saturated 14:1 (g)": "0.2064",
                "Fatty acids, total saturated 16:0 (g)": "24.3135",
                "Fatty acids, total saturated 16:1 undifferentiated (g)": "0.5095",
                "Fatty acids, total saturated 18:0 (g)": "9.4107",
                "Fatty acids, total saturated 18:1 undifferentiated (g)": "41.0954",
                "Fatty acids, total saturated 18:2 undifferentiated (g)": "61.7474",
                "Fatty acids, total saturated 18:3 undifferentiated (g)": "12.3243",
                "Fatty acids, total saturated 18:4 (g)": "0.0",
                "Fatty acids, total saturated 20:0 (g)": "0.0282",
                "Fatty acids, total saturated 20:1 (g)": "0.4965",
                "Fatty acids, total saturated 20:4 undifferentiated (g)": "0.0348",
                "Fatty acids, total saturated 20:5 n-3 (EPA) (g)": "0.0054",
                "Fatty acids, total saturated 22:0 (g)": "0.009",
                "Fatty acids, total saturated 22:1 undifferentiated (g)": "0.0039",
                "Fatty acids, total saturated 22:5 n-3 (DPA) (g)": "0.012",
                "Fatty acids, total saturated 22:6 n-3 (DHA) (g)": "0.0",
                "Fatty acids, total saturated 4:0 (g)": "1.1712",
                "Fatty acids, total saturated 6:0 (g)": "1.2502",
                "Fatty acids, total saturated 8:0 (g)": "2.8392",
                "Fatty acids, total trans (g)": "0.7416",
                "Fatty acids, total trans-monoenoic (g)": "0.6",
                "Fatty acids, total trans-polyenoic (g)": "0.1416",
                "Fatty acids, total trans-polyenoic 13:0 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 15:1 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:1-11 t (18:1t n-7) (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:3 n-3 c,c,c (ALA) (g)": "0.0732",
                "Fatty acids, total trans-polyenoic 18:3i (g)": "0.0024",
                "Fatty acids, total trans-polyenoic 20:3 n-3 (g)": "0.0012",
                "Fatty acids, total trans-polyenoic 20:3 n-6 (g)": "0.0234",
                "Fatty acids, total trans-polyenoic 20:4 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 21:5 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 22:4 (g)": "0.006",
                "Fiber, total dietary (g)": "18.9307",
                "Fluoride, F (g)": "1.8",
                "Folate, DFE (g)": "294.6567",
                "Folate, food (g)": "90.1233",
                "Folate, total (g)": "210.07",
                "Folic acid (g)": "119.9467",
                "Fructose (g)": "0.0",
                "Galactose (g)": "0.0",
                "Glucose (dextrose) (g)": "0.0",
                "Glutamic acid (g)": "7.8621",
                "Glycine (g)": "0.7711",
                "Histidine (g)": "1.0284",
                "Hydroxyproline (g)": "0.0",
                "Iron, Fe (mg)": "7.802",
                "Isoleucine (g)": "1.7833",
                "Lactose (g)": "51.04",
                "Leucine (g)": "3.2562",
                "Lutein + zeaxanthin (g)": "82.5067",
                "Lycopene (g)": "0.0",
                "Lysine (g)": "2.7686",
                "Magnesium, Mg (mg)": "244.0833",
                "Maltose (g)": "0.0",
                "Manganese, Mn (mg)": "1.7608",
                "Menaquinone-4 (g)": "9.76",
                "Methionine (g)": "0.8993",
                "Niacin (mg)": "9.8793",
                "Pantothenic acid (mg)": "4.4085",
                "Phenylalanine (g)": "1.8041",
                "Phosphorus, P (mg)": "1314.3633",
                "Phytosterols (mg)": "229.44",
                "Potassium, K (mg)": "3055.9933",
                "Proline (g)": "3.327",
                "Protein (g)": "46.5988",
                "Retinol (g)": "981.0267",
                "Riboflavin (mg)": "2.6956",
                "Selenium, Se (g)": "70.903",
                "Serine (g)": "2.0484",
                "Sodium, Na (mg)": "800.6867",
                "Starch (g)": "0.0",
                "Stigmasterol (mg)": "0.0",
                "Sucrose (g)": "249.5",
                "Sugars, total (g)": "466.7875",
                "Theobromine (mg)": "0.0",
                "Thiamin (mg)": "1.0123",
                "Threonine (g)": "1.4802",
                "Tocopherol, beta (mg)": "0.0",
                "Tocopherol, delta (mg)": "0.0",
                "Tocopherol, gamma (mg)": "0.568",
                "Tocotrienol, alpha (mg)": "1.222",
                "Tocotrienol, beta (mg)": "0.0",
                "Tocotrienol, delta (mg)": "0.0",
                "Tocotrienol, gamma (mg)": "0.0",
                "Total lipid (fat) (g)": "212.1542",
                "Tryptophan (g)": "0.4612",
                "Tyrosine (g)": "1.7146",
                "Valine (g)": "2.2742",
                "Vitamin A, IU (IU)": "3462.9067",
                "Vitamin A, RAE (g)": "994.3867",
                "Vitamin B-12 (g)": "6.4987",
                "Vitamin B-12, added (g)": "2.0107",
                "Vitamin B-6 (mg)": "1.6418",
                "Vitamin C, total ascorbic acid (mg)": "488.3493",
                "Vitamin D (D2 + D3) (g)": "3.2533",
                "Vitamin D (IU)": "110.7067",
                "Vitamin D2 (ergocalciferol) (g)": "0.0",
                "Vitamin D3 (cholecalciferol) (g)": "3.2533",
                "Vitamin E (alpha-tocopherol) (mg)": "2.7476",
                "Vitamin E, added (mg)": "0.0",
                "Vitamin K (phylloquinone) (g)": "29.6983",
                "Water (g)": "1134.3373",
                "Zinc, Zn (mg)": "7.1989",
                "Utensils": "oven||dish||oven||oven||oven||bowl||dish||saucepan||dish||oven",
                "Processes": "preheat||place||place||remove||preheat||break||stir||spread||boil||heat||beat||cream||spread||place||serve",
                "Calories": "934.0",
                "total_time": "60",
                "Continent": "African",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian"
            },
            {
                "_id": "643e64c5f71e838f002de59e",
                "Recipe_index": "6",
                "Recipe_id": "2616",
                "cook_time": "25",
                "prep_time": "10",
                "Recipe_title": "Rice Pudding with Lemon Juice and Caramelized Onion (Egyptian Kishk)",
                "url": "http://allrecipes.com/recipe/231759/rice-pudding-with-lemon-juice-and-caramelized-onion-egyptian-kishk/",
                "servings": "4",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/images/79591.png",
                "Adjusted Protein (g)": "0.0",
                "Alanine (g)": "1.0544",
                "Alcohol, ethyl (g)": "0.0",
                "Arginine (g)": "2.199",
                "Ash (g)": "23.8699",
                "Aspartic acid (g)": "2.2404",
                "Beta-sitosterol (mg)": "11.1375",
                "Betaine (mg)": "0.3538",
                "Caffeine (mg)": "0.0",
                "Calcium, Ca (mg)": "451.585",
                "Campesterol (mg)": "1.6875",
                "Carbohydrate, by difference (g)": "81.2955",
                "Carotene, alpha (g)": "0.0",
                "Carotene, beta (g)": "15.6894",
                "Cholesterol (mg)": "32.18",
                "Choline, total (mg)": "172.5118",
                "Copper, Cu (mg)": "2.3701",
                "Cryptoxanthin, beta (g)": "1.22",
                "Cystine (g)": "0.3581",
                "Dihydrophylloquinone (g)": "0.0",
                "Energy (kJ)": "4369.3738",
                "Energy (kcal)": "1043.9806",
                "Fatty acids, total monounsaturated (g)": "14.2772",
                "Fatty acids, total polyunsaturated (g)": "23.9386",
                "Fatty acids, total polyunsaturated 15:0 (g)": "0.003",
                "Fatty acids, total polyunsaturated 16:1 c (g)": "0.0225",
                "Fatty acids, total polyunsaturated 16:1 t (g)": "0.0036",
                "Fatty acids, total polyunsaturated 17:0 (g)": "0.0099",
                "Fatty acids, total polyunsaturated 17:1 (g)": "0.0014",
                "Fatty acids, total polyunsaturated 18:1 c (g)": "3.5378",
                "Fatty acids, total polyunsaturated 18:1 t (g)": "0.0297",
                "Fatty acids, total polyunsaturated 18:2 CLAs (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 i (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 n-6 c,c (g)": "15.3595",
                "Fatty acids, total polyunsaturated 18:2 t not further defined (g)": "0.0378",
                "Fatty acids, total polyunsaturated 18:2 t,t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:3 n-6 c,c,c (g)": "0.0071",
                "Fatty acids, total polyunsaturated 20:2 n-6 c,c (g)": "0.0364",
                "Fatty acids, total polyunsaturated 20:3 undifferentiated (g)": "0.0298",
                "Fatty acids, total polyunsaturated 22:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 22:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:0 (g)": "0.0504",
                "Fatty acids, total polyunsaturated 24:1 c (g)": "0.0",
                "Fatty acids, total saturated (g)": "11.4785",
                "Fatty acids, total saturated 10:0 (g)": "0.1642",
                "Fatty acids, total saturated 12:0 (g)": "0.189",
                "Fatty acids, total saturated 14:0 (g)": "0.7549",
                "Fatty acids, total saturated 14:1 (g)": "0.0006",
                "Fatty acids, total saturated 16:0 (g)": "6.7872",
                "Fatty acids, total saturated 16:1 undifferentiated (g)": "0.7751",
                "Fatty acids, total saturated 18:0 (g)": "2.5243",
                "Fatty acids, total saturated 18:1 undifferentiated (g)": "13.0491",
                "Fatty acids, total saturated 18:2 undifferentiated (g)": "23.4943",
                "Fatty acids, total saturated 18:3 undifferentiated (g)": "0.2741",
                "Fatty acids, total saturated 18:4 (g)": "0.0",
                "Fatty acids, total saturated 20:0 (g)": "0.085",
                "Fatty acids, total saturated 20:1 (g)": "0.2131",
                "Fatty acids, total saturated 20:4 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 20:5 n-3 (EPA) (g)": "0.0",
                "Fatty acids, total saturated 22:0 (g)": "0.1767",
                "Fatty acids, total saturated 22:1 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 22:5 n-3 (DPA) (g)": "0.0",
                "Fatty acids, total saturated 22:6 n-3 (DHA) (g)": "0.0",
                "Fatty acids, total saturated 4:0 (g)": "0.1632",
                "Fatty acids, total saturated 6:0 (g)": "0.1122",
                "Fatty acids, total saturated 8:0 (g)": "0.0714",
                "Fatty acids, total trans (g)": "0.0711",
                "Fatty acids, total trans-monoenoic (g)": "0.0333",
                "Fatty acids, total trans-polyenoic (g)": "0.0378",
                "Fatty acids, total trans-polyenoic 13:0 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 15:1 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:1-11 t (18:1t n-7) (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:3 n-3 c,c,c (ALA) (g)": "0.0463",
                "Fatty acids, total trans-polyenoic 18:3i (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-3 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:4 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 21:5 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 22:4 (g)": "0.0",
                "Fiber, total dietary (g)": "12.3093",
                "Fluoride, F (g)": "23.92",
                "Folate, DFE (g)": "331.4826",
                "Folate, food (g)": "243.8388",
                "Folate, total (g)": "295.4076",
                "Folic acid (g)": "51.5688",
                "Fructose (g)": "4.474",
                "Galactose (g)": "0.0",
                "Glucose (dextrose) (g)": "6.9495",
                "Glutamic acid (g)": "5.3542",
                "Glycine (g)": "1.118",
                "Histidine (g)": "0.5874",
                "Hydroxyproline (g)": "0.0",
                "Iron, Fe (mg)": "8.68",
                "Isoleucine (g)": "1.0493",
                "Lactose (g)": "0.0",
                "Leucine (g)": "1.7569",
                "Lutein + zeaxanthin (g)": "18.1344",
                "Lycopene (g)": "0.0",
                "Lysine (g)": "1.2158",
                "Magnesium, Mg (mg)": "172.8993",
                "Maltose (g)": "0.0",
                "Manganese, Mn (mg)": "4.5882",
                "Menaquinone-4 (g)": "0.0",
                "Methionine (g)": "0.5244",
                "Niacin (mg)": "27.0918",
                "Pantothenic acid (mg)": "4.987",
                "Phenylalanine (g)": "1.1382",
                "Phosphorus, P (mg)": "1561.9994",
                "Phytosterols (mg)": "48.0",
                "Potassium, K (mg)": "2832.1307",
                "Proline (g)": "1.4614",
                "Protein (g)": "68.5817",
                "Retinol (g)": "45.9",
                "Riboflavin (mg)": "1.0291",
                "Selenium, Se (g)": "67.2955",
                "Serine (g)": "1.1617",
                "Sodium, Na (mg)": "6364.76",
                "Starch (g)": "0.1207",
                "Stigmasterol (mg)": "0.0",
                "Sucrose (g)": "4.6753",
                "Sugars, total (g)": "27.5168",
                "Theobromine (mg)": "0.0",
                "Thiamin (mg)": "0.7646",
                "Threonine (g)": "0.8773",
                "Tocopherol, beta (mg)": "0.6345",
                "Tocopherol, delta (mg)": "0.0",
                "Tocopherol, gamma (mg)": "1.1478",
                "Tocotrienol, alpha (mg)": "0.128",
                "Tocotrienol, beta (mg)": "0.0",
                "Tocotrienol, delta (mg)": "0.0",
                "Tocotrienol, gamma (mg)": "0.0582",
                "Total lipid (fat) (g)": "52.6077",
                "Tryptophan (g)": "0.3032",
                "Tyrosine (g)": "0.8163",
                "Valine (g)": "1.384",
                "Vitamin A, IU (IU)": "193.0769",
                "Vitamin A, RAE (g)": "46.4344",
                "Vitamin B-12 (g)": "2.645",
                "Vitamin B-12, added (g)": "0.0",
                "Vitamin B-6 (mg)": "1.0785",
                "Vitamin C, total ascorbic acid (mg)": "36.896",
                "Vitamin D (D2 + D3) (g)": "0.17",
                "Vitamin D (IU)": "3.4",
                "Vitamin D2 (ergocalciferol) (g)": "0.0",
                "Vitamin D3 (cholecalciferol) (g)": "0.17",
                "Vitamin E (alpha-tocopherol) (mg)": "17.4737",
                "Vitamin E, added (mg)": "0.0",
                "Vitamin K (phylloquinone) (g)": "7.5859",
                "Water (g)": "1393.7159",
                "Zinc, Zn (mg)": "7.415",
                "Utensils": "saucepan||skillet||bowl",
                "Processes": "heat||heat||add||simmer||heat||heat||cook||stirring||mix||whisk||smooth||blend||smooth||boil||reduce||heat||simmer||garnish",
                "Calories": "299.0",
                "total_time": "35",
                "Continent": "African",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian"
            },
            {
                "_id": "643e64c5f71e838f002de59f",
                "Recipe_index": "7",
                "Recipe_id": "2617",
                "cook_time": "30",
                "prep_time": "20",
                "Recipe_title": "Couscous with Olives and Sun-Dried Tomato",
                "url": "http://allrecipes.com/recipe/232210/couscous-with-olives-and-sun-dried-tomato/",
                "servings": "4",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1011586.jpg",
                "Adjusted Protein (g)": "0.0",
                "Alanine (g)": "1.0897",
                "Alcohol, ethyl (g)": "0.0",
                "Arginine (g)": "2.3393",
                "Ash (g)": "10.6476",
                "Aspartic acid (g)": "1.9463",
                "Beta-sitosterol (mg)": "89.1",
                "Betaine (mg)": "0.3503",
                "Caffeine (mg)": "0.0",
                "Calcium, Ca (mg)": "177.5868",
                "Campesterol (mg)": "13.5",
                "Carbohydrate, by difference (g)": "87.679",
                "Carotene, alpha (g)": "1190.0422",
                "Carotene, beta (g)": "2649.2056",
                "Cholesterol (mg)": "3.075",
                "Choline, total (mg)": "90.4202",
                "Copper, Cu (mg)": "1.5177",
                "Cryptoxanthin, beta (g)": "12.5759",
                "Cystine (g)": "0.2615",
                "Dihydrophylloquinone (g)": "0.462",
                "Energy (kJ)": "6150.6944",
                "Energy (kcal)": "1469.8658",
                "Fatty acids, total monounsaturated (g)": "63.8734",
                "Fatty acids, total polyunsaturated (g)": "32.7348",
                "Fatty acids, total polyunsaturated 15:0 (g)": "0.0007",
                "Fatty acids, total polyunsaturated 16:1 c (g)": "0.002",
                "Fatty acids, total polyunsaturated 16:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 17:0 (g)": "0.0161",
                "Fatty acids, total polyunsaturated 17:1 (g)": "0.0851",
                "Fatty acids, total polyunsaturated 18:1 c (g)": "0.4768",
                "Fatty acids, total polyunsaturated 18:1 t (g)": "0.0634",
                "Fatty acids, total polyunsaturated 18:2 CLAs (g)": "0.0007",
                "Fatty acids, total polyunsaturated 18:2 i (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 n-6 c,c (g)": "0.4825",
                "Fatty acids, total polyunsaturated 18:2 t not further defined (g)": "0.0053",
                "Fatty acids, total polyunsaturated 18:2 t,t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:3 n-6 c,c,c (g)": "0.0377",
                "Fatty acids, total polyunsaturated 20:2 n-6 c,c (g)": "0.2734",
                "Fatty acids, total polyunsaturated 20:3 undifferentiated (g)": "0.2385",
                "Fatty acids, total polyunsaturated 22:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 22:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:0 (g)": "0.0033",
                "Fatty acids, total polyunsaturated 24:1 c (g)": "0.0",
                "Fatty acids, total saturated (g)": "14.0295",
                "Fatty acids, total saturated 10:0 (g)": "0.0003",
                "Fatty acids, total saturated 12:0 (g)": "0.0001",
                "Fatty acids, total saturated 14:0 (g)": "0.0341",
                "Fatty acids, total saturated 14:1 (g)": "0.0",
                "Fatty acids, total saturated 16:0 (g)": "10.6328",
                "Fatty acids, total saturated 16:1 undifferentiated (g)": "0.9222",
                "Fatty acids, total saturated 18:0 (g)": "2.6688",
                "Fatty acids, total saturated 18:1 undifferentiated (g)": "62.0761",
                "Fatty acids, total saturated 18:2 undifferentiated (g)": "31.2329",
                "Fatty acids, total saturated 18:3 undifferentiated (g)": "0.9895",
                "Fatty acids, total saturated 18:4 (g)": "0.0",
                "Fatty acids, total saturated 20:0 (g)": "0.4406",
                "Fatty acids, total saturated 20:1 (g)": "0.7592",
                "Fatty acids, total saturated 20:4 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 20:5 n-3 (EPA) (g)": "0.0",
                "Fatty acids, total saturated 22:0 (g)": "0.1383",
                "Fatty acids, total saturated 22:1 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 22:5 n-3 (DPA) (g)": "0.0",
                "Fatty acids, total saturated 22:6 n-3 (DHA) (g)": "0.0",
                "Fatty acids, total saturated 4:0 (g)": "0.0",
                "Fatty acids, total saturated 6:0 (g)": "0.0",
                "Fatty acids, total saturated 8:0 (g)": "0.0001",
                "Fatty acids, total trans (g)": "0.0686",
                "Fatty acids, total trans-monoenoic (g)": "0.0634",
                "Fatty acids, total trans-polyenoic (g)": "0.0053",
                "Fatty acids, total trans-polyenoic 13:0 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 15:1 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:1-11 t (18:1t n-7) (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:3 n-3 c,c,c (ALA) (g)": "0.155",
                "Fatty acids, total trans-polyenoic 18:3i (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-3 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:4 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 21:5 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 22:4 (g)": "0.0007",
                "Fiber, total dietary (g)": "12.8934",
                "Fluoride, F (g)": "0.0492",
                "Folate, DFE (g)": "105.4094",
                "Folate, food (g)": "105.4094",
                "Folate, total (g)": "150.2894",
                "Folic acid (g)": "0.0",
                "Fructose (g)": "0.47",
                "Galactose (g)": "0.0002",
                "Glucose (dextrose) (g)": "0.4502",
                "Glutamic acid (g)": "5.0288",
                "Glycine (g)": "1.3751",
                "Histidine (g)": "0.4389",
                "Hydroxyproline (g)": "0.0",
                "Iron, Fe (mg)": "9.3512",
                "Isoleucine (g)": "0.7895",
                "Lactose (g)": "0.0",
                "Leucine (g)": "1.3578",
                "Lutein + zeaxanthin (g)": "196.3926",
                "Lycopene (g)": "1132.0038",
                "Lysine (g)": "0.9144",
                "Magnesium, Mg (mg)": "236.1508",
                "Maltose (g)": "0.1914",
                "Manganese, Mn (mg)": "7.619",
                "Menaquinone-4 (g)": "0.0",
                "Methionine (g)": "0.3041",
                "Niacin (mg)": "7.408",
                "Pantothenic acid (mg)": "1.7504",
                "Phenylalanine (g)": "0.7734",
                "Phosphorus, P (mg)": "630.8121",
                "Phytosterols (mg)": "157.3072",
                "Potassium, K (mg)": "1592.9554",
                "Proline (g)": "1.2981",
                "Protein (g)": "23.6185",
                "Retinol (g)": "0.0",
                "Riboflavin (mg)": "0.4016",
                "Selenium, Se (g)": "17.2045",
                "Serine (g)": "1.02",
                "Sodium, Na (mg)": "1843.8588",
                "Starch (g)": "13.7164",
                "Stigmasterol (mg)": "0.0",
                "Sucrose (g)": "2.5004",
                "Sugars, total (g)": "21.3605",
                "Theobromine (mg)": "0.0",
                "Thiamin (mg)": "0.6845",
                "Threonine (g)": "0.6072",
                "Tocopherol, beta (mg)": "0.0808",
                "Tocopherol, delta (mg)": "0.1452",
                "Tocopherol, gamma (mg)": "8.6766",
                "Tocotrienol, alpha (mg)": "0.0012",
                "Tocotrienol, beta (mg)": "0.0528",
                "Tocotrienol, delta (mg)": "0.0396",
                "Tocotrienol, gamma (mg)": "0.4921",
                "Total lipid (fat) (g)": "120.2423",
                "Tryptophan (g)": "0.1773",
                "Tyrosine (g)": "0.6168",
                "Valine (g)": "0.989",
                "Vitamin A, IU (IU)": "5414.1463",
                "Vitamin A, RAE (g)": "268.6888",
                "Vitamin B-12 (g)": "0.0",
                "Vitamin B-12, added (g)": "0.0",
                "Vitamin B-6 (mg)": "0.9688",
                "Vitamin C, total ascorbic acid (mg)": "22.9265",
                "Vitamin D (D2 + D3) (g)": "0.0",
                "Vitamin D (IU)": "0.0",
                "Vitamin D2 (ergocalciferol) (g)": "0.0",
                "Vitamin D3 (cholecalciferol) (g)": "0.0",
                "Vitamin E (alpha-tocopherol) (mg)": "16.8703",
                "Vitamin E, added (mg)": "0.0",
                "Vitamin K (phylloquinone) (g)": "87.7233",
                "Water (g)": "734.8841",
                "Zinc, Zn (mg)": "7.3315",
                "Utensils": "saucepan||skillet||saucepan||bowl",
                "Processes": "boil||stir||mix||reduce||heat||simmer||heat||heat||stir||cook||stirring||remove||heat||heat||cook||stir||stir||cook||stirring||pour||boil||reduce||heat||simmer||transfer||mix",
                "Calories": "528.0",
                "total_time": "50",
                "Continent": "African",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian"
            },
            {
                "_id": "643e64c5f71e838f002de5a0",
                "Recipe_index": "8",
                "Recipe_id": "2618",
                "cook_time": "10",
                "prep_time": "10",
                "Recipe_title": "Fava Bean Breakfast Spread",
                "url": "http://allrecipes.com/recipe/17596/fava-bean-breakfast-spread/",
                "servings": "6",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/250x250/72794.jpg",
                "Adjusted Protein (g)": "0.0",
                "Alanine (g)": "2.5161",
                "Alcohol, ethyl (g)": "0.0",
                "Arginine (g)": "5.6345",
                "Ash (g)": "8.9796",
                "Aspartic acid (g)": "6.984",
                "Beta-sitosterol (mg)": "0.0",
                "Betaine (mg)": "0.3522",
                "Caffeine (mg)": "0.0",
                "Calcium, Ca (mg)": "328.4477",
                "Campesterol (mg)": "0.0",
                "Carbohydrate, by difference (g)": "158.2643",
                "Carotene, alpha (g)": "183.82",
                "Carotene, beta (g)": "1665.356",
                "Cholesterol (mg)": "0.0",
                "Choline, total (mg)": "242.3968",
                "Copper, Cu (mg)": "2.0693",
                "Cryptoxanthin, beta (g)": "2.44",
                "Cystine (g)": "0.7756",
                "Dihydrophylloquinone (g)": "0.0",
                "Energy (kJ)": "4448.4422",
                "Energy (kcal)": "1065.3316",
                "Fatty acids, total monounsaturated (g)": "15.8746",
                "Fatty acids, total polyunsaturated (g)": "3.8178",
                "Fatty acids, total polyunsaturated 15:0 (g)": "0.0006",
                "Fatty acids, total polyunsaturated 16:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 16:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 17:0 (g)": "0.0045",
                "Fatty acids, total polyunsaturated 17:1 (g)": "0.0253",
                "Fatty acids, total polyunsaturated 18:1 c (g)": "0.0024",
                "Fatty acids, total polyunsaturated 18:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 CLAs (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 i (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 n-6 c,c (g)": "0.0073",
                "Fatty acids, total polyunsaturated 18:2 t not further defined (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 t,t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:3 n-6 c,c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 20:2 n-6 c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 20:3 undifferentiated (g)": "0.0",
                "Fatty acids, total polyunsaturated 22:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 22:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:0 (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:1 c (g)": "0.0",
                "Fatty acids, total saturated (g)": "3.5577",
                "Fatty acids, total saturated 10:0 (g)": "0.0126",
                "Fatty acids, total saturated 12:0 (g)": "0.01",
                "Fatty acids, total saturated 14:0 (g)": "0.0133",
                "Fatty acids, total saturated 14:1 (g)": "0.0012",
                "Fatty acids, total saturated 16:0 (g)": "2.8762",
                "Fatty acids, total saturated 16:1 undifferentiated (g)": "0.2661",
                "Fatty acids, total saturated 18:0 (g)": "0.5012",
                "Fatty acids, total saturated 18:1 undifferentiated (g)": "15.5054",
                "Fatty acids, total saturated 18:2 undifferentiated (g)": "3.5383",
                "Fatty acids, total saturated 18:3 undifferentiated (g)": "0.2794",
                "Fatty acids, total saturated 18:4 (g)": "0.0",
                "Fatty acids, total saturated 20:0 (g)": "0.0838",
                "Fatty acids, total saturated 20:1 (g)": "0.0675",
                "Fatty acids, total saturated 20:4 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 20:5 n-3 (EPA) (g)": "0.0",
                "Fatty acids, total saturated 22:0 (g)": "0.0261",
                "Fatty acids, total saturated 22:1 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 22:5 n-3 (DPA) (g)": "0.0",
                "Fatty acids, total saturated 22:6 n-3 (DHA) (g)": "0.0",
                "Fatty acids, total saturated 4:0 (g)": "0.0",
                "Fatty acids, total saturated 6:0 (g)": "0.0",
                "Fatty acids, total saturated 8:0 (g)": "0.0",
                "Fatty acids, total trans (g)": "0.0",
                "Fatty acids, total trans-monoenoic (g)": "0.0",
                "Fatty acids, total trans-polyenoic (g)": "0.0",
                "Fatty acids, total trans-polyenoic 13:0 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 15:1 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:1-11 t (18:1t n-7) (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:3 n-3 c,c,c (ALA) (g)": "0.0055",
                "Fatty acids, total trans-polyenoic 18:3i (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-3 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:4 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 21:5 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 22:4 (g)": "0.0",
                "Fiber, total dietary (g)": "61.8544",
                "Fluoride, F (g)": "5.836",
                "Folate, DFE (g)": "1042.2844",
                "Folate, food (g)": "1042.2844",
                "Folate, total (g)": "1042.2844",
                "Folic acid (g)": "0.0",
                "Fructose (g)": "5.0994",
                "Galactose (g)": "0.0",
                "Glucose (dextrose) (g)": "5.8339",
                "Glutamic acid (g)": "11.1871",
                "Glycine (g)": "2.5563",
                "Histidine (g)": "1.549",
                "Hydroxyproline (g)": "0.0",
                "Iron, Fe (mg)": "18.3597",
                "Isoleucine (g)": "2.4396",
                "Lactose (g)": "0.0",
                "Leucine (g)": "4.5304",
                "Lutein + zeaxanthin (g)": "1082.568",
                "Lycopene (g)": "4682.86",
                "Lysine (g)": "3.8926",
                "Magnesium, Mg (mg)": "485.6501",
                "Maltose (g)": "0.0",
                "Manganese, Mn (mg)": "4.159",
                "Menaquinone-4 (g)": "0.0",
                "Methionine (g)": "0.4992",
                "Niacin (mg)": "7.9726",
                "Pantothenic acid (mg)": "2.6813",
                "Phenylalanine (g)": "2.5888",
                "Phosphorus, P (mg)": "1058.0156",
                "Phytosterols (mg)": "361.0311",
                "Potassium, K (mg)": "3222.3263",
                "Proline (g)": "2.5488",
                "Protein (g)": "63.0252",
                "Retinol (g)": "0.0",
                "Riboflavin (mg)": "0.8547",
                "Selenium, Se (g)": "19.376",
                "Serine (g)": "2.7866",
                "Sodium, Na (mg)": "57.2784",
                "Starch (g)": "0.0",
                "Stigmasterol (mg)": "0.0",
                "Sucrose (g)": "1.7473",
                "Sugars, total (g)": "25.6772",
                "Theobromine (mg)": "0.0",
                "Thiamin (mg)": "1.4251",
                "Threonine (g)": "2.1859",
                "Tocopherol, beta (mg)": "0.0405",
                "Tocopherol, delta (mg)": "0.0",
                "Tocopherol, gamma (mg)": "0.466",
                "Tocotrienol, alpha (mg)": "0.0782",
                "Tocotrienol, beta (mg)": "0.0",
                "Tocotrienol, delta (mg)": "0.0",
                "Tocotrienol, gamma (mg)": "0.0",
                "Total lipid (fat) (g)": "24.9374",
                "Tryptophan (g)": "0.5941",
                "Tyrosine (g)": "1.9186",
                "Valine (g)": "2.701",
                "Vitamin A, IU (IU)": "2932.1804",
                "Vitamin A, RAE (g)": "147.6806",
                "Vitamin B-12 (g)": "0.0",
                "Vitamin B-12, added (g)": "0.0",
                "Vitamin B-6 (mg)": "1.1994",
                "Vitamin C, total ascorbic acid (mg)": "82.9011",
                "Vitamin D (D2 + D3) (g)": "0.0",
                "Vitamin D (IU)": "0.0",
                "Vitamin D2 (ergocalciferol) (g)": "0.0",
                "Vitamin D3 (cholecalciferol) (g)": "0.0",
                "Vitamin E (alpha-tocopherol) (mg)": "4.305",
                "Vitamin E, added (mg)": "0.0",
                "Vitamin K (phylloquinone) (g)": "293.5218",
                "Water (g)": "400.019",
                "Zinc, Zn (mg)": "7.9177",
                "Utensils": "pot",
                "Processes": "pour||boil||mix||add||boil||serve",
                "Calories": "101.0",
                "total_time": "20",
                "Continent": "African",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian"
            },
            {
                "_id": "643e64c5f71e838f002de5a1",
                "Recipe_index": "9",
                "Recipe_id": "2619",
                "cook_time": "60",
                "prep_time": "20",
                "Recipe_title": "Koshary",
                "url": "http://allrecipes.com/recipe/214832/koshary/",
                "servings": "8",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/250x250/568661.jpg",
                "Adjusted Protein (g)": "0.0",
                "Alanine (g)": "2.9054",
                "Alcohol, ethyl (g)": "0.0",
                "Arginine (g)": "6.4344",
                "Ash (g)": "16.0453",
                "Aspartic acid (g)": "8.0798",
                "Beta-sitosterol (mg)": "0.0",
                "Betaine (mg)": "0.1005",
                "Caffeine (mg)": "0.0",
                "Calcium, Ca (mg)": "353.2085",
                "Campesterol (mg)": "0.0",
                "Carbohydrate, by difference (g)": "244.3117",
                "Carotene, alpha (g)": "210.4948",
                "Carotene, beta (g)": "1455.2441",
                "Cholesterol (mg)": "21.6",
                "Choline, total (mg)": "396.1693",
                "Copper, Cu (mg)": "2.9225",
                "Cryptoxanthin, beta (g)": "112.536",
                "Cystine (g)": "0.9431",
                "Dihydrophylloquinone (g)": "0.0",
                "Energy (kJ)": "7589.3905",
                "Energy (kcal)": "1814.1703",
                "Fatty acids, total monounsaturated (g)": "23.3123",
                "Fatty acids, total polyunsaturated (g)": "19.5155",
                "Fatty acids, total polyunsaturated 15:0 (g)": "0.0",
                "Fatty acids, total polyunsaturated 16:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 16:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 17:0 (g)": "0.003",
                "Fatty acids, total polyunsaturated 17:1 (g)": "0.0169",
                "Fatty acids, total polyunsaturated 18:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 CLAs (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 i (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 n-6 c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 t not further defined (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:2 t,t (g)": "0.0",
                "Fatty acids, total polyunsaturated 18:3 n-6 c,c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 20:2 n-6 c,c (g)": "0.0",
                "Fatty acids, total polyunsaturated 20:3 undifferentiated (g)": "0.0",
                "Fatty acids, total polyunsaturated 22:1 c (g)": "0.0",
                "Fatty acids, total polyunsaturated 22:1 t (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:0 (g)": "0.0",
                "Fatty acids, total polyunsaturated 24:1 c (g)": "0.0",
                "Fatty acids, total saturated (g)": "8.4529",
                "Fatty acids, total saturated 10:0 (g)": "0.0009",
                "Fatty acids, total saturated 12:0 (g)": "0.0007",
                "Fatty acids, total saturated 14:0 (g)": "0.1065",
                "Fatty acids, total saturated 14:1 (g)": "0.0",
                "Fatty acids, total saturated 16:0 (g)": "6.5237",
                "Fatty acids, total saturated 16:1 undifferentiated (g)": "0.8788",
                "Fatty acids, total saturated 18:0 (g)": "1.6046",
                "Fatty acids, total saturated 18:1 undifferentiated (g)": "22.2686",
                "Fatty acids, total saturated 18:2 undifferentiated (g)": "18.3866",
                "Fatty acids, total saturated 18:3 undifferentiated (g)": "1.1255",
                "Fatty acids, total saturated 18:4 (g)": "0.0",
                "Fatty acids, total saturated 20:0 (g)": "0.082",
                "Fatty acids, total saturated 20:1 (g)": "0.1092",
                "Fatty acids, total saturated 20:4 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 20:5 n-3 (EPA) (g)": "0.0",
                "Fatty acids, total saturated 22:0 (g)": "0.0435",
                "Fatty acids, total saturated 22:1 undifferentiated (g)": "0.0",
                "Fatty acids, total saturated 22:5 n-3 (DPA) (g)": "0.0",
                "Fatty acids, total saturated 22:6 n-3 (DHA) (g)": "0.0",
                "Fatty acids, total saturated 4:0 (g)": "0.0",
                "Fatty acids, total saturated 6:0 (g)": "0.0",
                "Fatty acids, total saturated 8:0 (g)": "0.0",
                "Fatty acids, total trans (g)": "0.0",
                "Fatty acids, total trans-monoenoic (g)": "0.0",
                "Fatty acids, total trans-polyenoic (g)": "0.0",
                "Fatty acids, total trans-polyenoic 13:0 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 15:1 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:1-11 t (18:1t n-7) (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:3 n-3 c,c,c (ALA) (g)": "0.0",
                "Fatty acids, total trans-polyenoic 18:3i (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-3 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:3 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 20:4 n-6 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 21:5 (g)": "0.0",
                "Fatty acids, total trans-polyenoic 22:4 (g)": "0.0",
                "Fiber, total dietary (g)": "43.9672",
                "Fluoride, F (g)": "0.0",
                "Folate, DFE (g)": "1747.4358",
                "Folate, food (g)": "1749.1758",
                "Folate, total (g)": "1749.1758",
                "Folic acid (g)": "0.0",
                "Fructose (g)": "1.2876",
                "Galactose (g)": "0.0",
                "Glucose (dextrose) (g)": "1.827",
                "Glutamic acid (g)": "12.883",
                "Glycine (g)": "2.8726",
                "Histidine (g)": "1.8468",
                "Hydroxyproline (g)": "0.0",
                "Iron, Fe (mg)": "18.0517",
                "Isoleucine (g)": "2.8696",
                "Lactose (g)": "0.0",
                "Leucine (g)": "4.7647",
                "Lutein + zeaxanthin (g)": "250.17",
                "Lycopene (g)": "0.0",
                "Lysine (g)": "4.391",
                "Magnesium, Mg (mg)": "332.0571",
                "Maltose (g)": "0.0",
                "Manganese, Mn (mg)": "64.7465",
                "Menaquinone-4 (g)": "0.0",
                "Methionine (g)": "0.9333",
                "Niacin (mg)": "18.6018",
                "Pantothenic acid (mg)": "6.4182",
                "Phenylalanine (g)": "3.57",
                "Phosphorus, P (mg)": "1203.5199",
                "Phytosterols (mg)": "32.871",
                "Potassium, K (mg)": "3774.6177",
                "Proline (g)": "2.7492",
                "Protein (g)": "87.4819",
                "Retinol (g)": "7.2",
                "Riboflavin (mg)": "1.5028",
                "Selenium, Se (g)": "18.8821",
                "Serine (g)": "3.3729",
                "Sodium, Na (mg)": "1167.7005",
                "Starch (g)": "0.0",
                "Stigmasterol (mg)": "0.0",
                "Sucrose (g)": "0.7047",
                "Sugars, total (g)": "54.5543",
                "Theobromine (mg)": "0.0",
                "Thiamin (mg)": "2.114",
                "Threonine (g)": "2.5202",
                "Tocopherol, beta (mg)": "0.0496",
                "Tocopherol, delta (mg)": "1.3659",
                "Tocopherol, gamma (mg)": "5.0188",
                "Tocotrienol, alpha (mg)": "0.0261",
                "Tocotrienol, beta (mg)": "0.0",
                "Tocotrienol, delta (mg)": "0.0",
                "Tocotrienol, gamma (mg)": "0.0",
                "Total lipid (fat) (g)": "58.2962",
                "Tryptophan (g)": "0.7006",
                "Tyrosine (g)": "1.7233",
                "Valine (g)": "2.8702",
                "Vitamin A, IU (IU)": "2728.2083",
                "Vitamin A, RAE (g)": "141.1323",
                "Vitamin B-12 (g)": "0.0",
                "Vitamin B-12, added (g)": "0.0",
                "Vitamin B-6 (mg)": "2.6243",
                "Vitamin C, total ascorbic acid (mg)": "83.0892",
                "Vitamin D (D2 + D3) (g)": "0.0",
                "Vitamin D (IU)": "0.0",
                "Vitamin D2 (ergocalciferol) (g)": "0.0",
                "Vitamin D3 (cholecalciferol) (g)": "0.0",
                "Vitamin E (alpha-tocopherol) (mg)": "6.8082",
                "Vitamin E, added (mg)": "0.0",
                "Vitamin K (phylloquinone) (g)": "84.257",
                "Water (g)": "1069.6487",
                "Zinc, Zn (mg)": "10.6534",
                "Utensils": "container||pot||pot||saucepan||pot||pot||platter",
                "Processes": "combine||store||boil||cook||drain||set||combine||cover||drain||cover||boil||cook||boil||drain||heat||heat||cook||stir||add||heat||simmer||melt||heat||add||fry||stirring||boil||season||heat||cover||cook||mix||spread||serve",
                "Calories": "498.0",
                "total_time": "80",
                "Continent": "African",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian"
            }
        ]
  ```

**Error Responses:**
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `1.51s` 

### **15. Post API meal-plan**(Implemented)

- **Endpoint:** `POST api/meal-plan`

- **Query Body:**
  - **diet_type** (string, required): The Diet type.
  - **calories_per_day** (integer, required): The limit of number of calories.
  -  **days** (integer,required) :The number of days for which you want plan
  -  ```json
     {
      "diet_type": "vegan",
      "calories_per_day": "8000.0",
      "days": "30.0"
      }
     ```

**Sample Request**:  
`POST /api/meal-plan`

**Example Response:**
  ```json
"message": "Meal plan generated successfully.",
    "data": {
        "diet_type": "vegan",
        "days": 7,
        "meal_plan": {
            "Day 1": {
                "Breakfast": {
                    "Recipe_id": "2992",
                    "Recipe_title": "Chinese Broccoli",
                    "Calories": "130.0",
                    "total_time": "20",
                    "Region": "Chinese and Mongolian",
                    "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png"
                },
                "Lunch": {
                    "Recipe_id": "3198",
                    "Recipe_title": "Mushroom Curry with Galangal",
                    "Calories": "261.0",
                    "total_time": "30",
                    "Region": "Thai",
                    "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4520847.jpg"
                },
                "Dinner": {
                    "Recipe_id": "2991",
                    "Recipe_title": "Overnight Chinese Daikon Radish Pickles",
                    "Calories": "22.0",
                    "total_time": "530",
                    "Region": "Chinese and Mongolian",
                    "img_url": "https://images.media-allrecipes.com/userphotos/250x250/199612.jpg"
                }
            },
            "Day 2": {
                "Breakfast": {
                    "Recipe_id": "2825",
                    "Recipe_title": "Berbere (Ethiopian Spice)",
                    "Calories": "25.0",
                    "total_time": "10",
                    "Region": "Rest Africa",
                    "img_url": "https://images.media-allrecipes.com/userphotos/560x315/2376305.jpg"
                },
                "Lunch": {
                    "Recipe_id": "3023",
                    "Recipe_title": "Sichuan Cucumber Salad",
                    "Calories": "160.0",
                    "total_time": "28",
                    "Region": "Chinese and Mongolian",
                    "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4487117.jpg"
                },
                "Dinner": {
                    "Recipe_id": "2988",
                    "Recipe_title": "Chinese-Style Broccoli Salad",
                    "Calories": "188.0",
                    "total_time": "0",
                    "Region": "Chinese and Mongolian",
                    "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png"
                }
            },
            "Day 3": {
                "Breakfast": {
                    "Recipe_id": "2777",
                    "Recipe_title": "Non-Traditional Tabbouleh Salad with Pineapple and Pomegranate Seeds",
                    "Calories": "231.0",
                    "total_time": "35",
                    "Region": "Rest Africa",
                    "img_url": "https://images.media-allrecipes.com/images/79591.png"
                },
                "Lunch": {
                    "Recipe_id": "2816",
                    "Recipe_title": "Mombasa Pumpkin Dessert",
                    "Calories": "210.0",
                    "total_time": "0",
                    "Region": "Rest Africa",
                    "img_url": "https://images.media-allrecipes.com/userphotos/560x315/44510.jpg"
                },
                "Dinner": {
                    "Recipe_id": "3001",
                    "Recipe_title": "Chinese-Style Five Spice Rub",
                    "Calories": "16.0",
                    "total_time": "5",
                    "Region": "Chinese and Mongolian",
                    "img_url": "https://images.media-allrecipes.com/userphotos/250x250/855861.jpg"
                }
            },
            "Day 4": {
                "Breakfast": {
                    "Recipe_id": "2810",
                    "Recipe_title": "Qumbe (East African Coconut Candy)",
                    "Calories": "280.0",
                    "total_time": "45",
                    "Region": "Rest Africa",
                    "img_url": "https://images.media-allrecipes.com/userphotos/560x315/3292708.jpg"
                },
                "Lunch": {
                    "Recipe_id": "2781",
                    "Recipe_title": "Dersa (Algerian Chile Paste)",
                    "Calories": "70.0",
                    "total_time": "15",
                    "Region": "Rest Africa",
                    "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4576877.jpg"
                },
                "Dinner": {
                    "Recipe_id": "2614",
                    "Recipe_title": "Dukkah",
                    "Calories": "45.0",
                    "total_time": "25",
                    "Region": "Middle Eastern",
                    "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4572970.jpg"
                }
            },
            "Day 5": {
                "Breakfast": {
                    "Recipe_id": "2631",
                    "Recipe_title": "Ta'ameya (Egyptian Falafel)",
                    "Calories": "234.0",
                    "total_time": "508",
                    "Region": "Middle Eastern",
                    "img_url": "https://images.media-allrecipes.com/userphotos/560x315/3841093.jpg"
                },
                "Lunch": {
                    "Recipe_id": "2624",
                    "Recipe_title": "Dukka",
                    "Calories": "189.0",
                    "total_time": "10",
                    "Region": "Middle Eastern",
                    "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4458021.jpg"
                },
                "Dinner": {
                    "Recipe_id": "3017",
                    "Recipe_title": "Hot and Sour Chinese Eggplant",
                    "Calories": "153.0",
                    "total_time": "35",
                    "Region": "Chinese and Mongolian",
                    "img_url": "https://images.media-allrecipes.com/userphotos/250x250/798089.jpg"
                }
            },
            "Day 6": {
                "Breakfast": {
                    "Recipe_id": "2828",
                    "Recipe_title": "Tomato Chutney",
                    "Calories": "33.0",
                    "total_time": "30",
                    "Region": "Rest Africa",
                    "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4556958.jpg"
                },
                "Lunch": {
                    "Recipe_id": "3023",
                    "Recipe_title": "Sichuan Cucumber Salad",
                    "Calories": "160.0",
                    "total_time": "28",
                    "Region": "Chinese and Mongolian",
                    "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4487117.jpg"
                },
                "Dinner": {
                    "Recipe_id": "2614",
                    "Recipe_title": "Dukkah",
                    "Calories": "45.0",
                    "total_time": "25",
                    "Region": "Middle Eastern",
                    "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4572970.jpg"
                }
            },
            "Day 7": {
                "Breakfast": {
                    "Recipe_id": "3216",
                    "Recipe_title": "Raw Pad Thai",
                    "Calories": "452.0",
                    "total_time": "30",
                    "Region": "Thai",
                    "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png"
                },
                "Lunch": {
                    "Recipe_id": "3249",
                    "Recipe_title": "The Best Thai Curry-Peanut Sauce",
                    "Calories": "179.0",
                    "total_time": "20",
                    "Region": "Thai",
                    "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png"
                },
                "Dinner": {
                    "Recipe_id": "2777",
                    "Recipe_title": "Non-Traditional Tabbouleh Salad with Pineapple and Pomegranate Seeds",
                    "Calories": "231.0",
                    "total_time": "35",
                    "Region": "Rest Africa",
                    "img_url": "https://images.media-allrecipes.com/images/79591.png"
                }
            }
        }
    }
  ```


**Response Time**
   `65ms` 

### **16. Get Recipe by Energy**(Implemented)

- **Endpoint:** `GET api/byenergy/energy`

- **Query Parameters:**
  - **minEnergy** (integer, required): The minimum energy for the recipe.
  - **maxEnergy** (integer, required): The maximum energy for the recipe.
  - **limit** (integer, optional): The limit of number of responses (by default 10).

**Sample Request**:  
`GET api/byenergy/energy?minEnergy=-1&maxEnergy=220&&limit=7`

**Example Response:**
  ```json
 "recipes": [
        {
            "_id": "6405721fa13d0d2d35890e47",
            "Recipe_id": "2832",
            "Calories": "290.0",
            "cook_time": "15",
            "prep_time": "0",
            "servings": "8",
            "Recipe_title": "Eba",
            "total_time": "15",
            "url": "http://allrecipes.com/recipe/90191/eba/",
            "Region": "Rest Africa",
            "Sub_region": "Nigerian",
            "Continent": "African",
            "Source": "AllRecipes",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4043190.jpg",
            "Carbohydrate, by difference (g)": "0.0",
            "Energy (kcal)": "0.0",
            "Protein (g)": "0.0",
            "Total lipid (fat) (g)": "0.0",
            "Utensils": "pot",
            "Processes": "boil||sprinkle||cook||stirring",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405721fa13d0d2d35890e7a",
            "Recipe_id": "2883",
            "Calories": "258.0",
            "cook_time": "20",
            "prep_time": "10",
            "servings": "32",
            "Recipe_title": "Sekanjabin (Iranian Mint Vinegar Syrup)",
            "total_time": "150",
            "url": "http://allrecipes.com/recipe/237255/sekanjabin-iranian-mint-vinegar-syrup/",
            "Region": "Middle Eastern",
            "Sub_region": "Rest Middle Eastern",
            "Continent": "Asian",
            "Source": "AllRecipes",
            "img_url": "https://images.media-allrecipes.com/images/79591.png",
            "Carbohydrate, by difference (g)": "0.0",
            "Energy (kcal)": "0.0",
            "Protein (g)": "0.0",
            "Total lipid (fat) (g)": "0.0",
            "Utensils": "pot",
            "Processes": "stir||boil||stir||add||heat||simmer||remove||heat||submerge||cool||remove||chill",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405721fa13d0d2d35890efc",
            "Recipe_id": "3013",
            "Calories": "61.0",
            "cook_time": "2",
            "prep_time": "20",
            "servings": "16",
            "Recipe_title": "Mandarin Pancakes",
            "total_time": "22",
            "url": "http://allrecipes.com/recipe/258245/mandarin-pancakes/",
            "Region": "Chinese and Mongolian",
            "Sub_region": "Chinese",
            "Continent": "Asian",
            "Source": "AllRecipes",
            "img_url": "https://images.media-allrecipes.com/images/79591.png",
            "Carbohydrate, by difference (g)": "0.0",
            "Energy (kcal)": "0.0",
            "Protein (g)": "0.0",
            "Total lipid (fat) (g)": "0.0",
            "Utensils": "bowl||skillet||skillet||skillet",
            "Processes": "combine||knead||shape||brush||place||heat||heat||place||cook||remove||cool||peel",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405721fa13d0d2d35890f2f",
            "Recipe_id": "3064",
            "Calories": "366.0",
            "cook_time": "15",
            "prep_time": "30",
            "servings": "4",
            "Recipe_title": "Chinese Scallion Pancakes",
            "total_time": "105",
            "url": "http://allrecipes.com/recipe/234472/chinese-scallion-pancakes/",
            "Region": "Chinese and Mongolian",
            "Sub_region": "Chinese",
            "Continent": "Asian",
            "Source": "AllRecipes",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1068447.jpg",
            "Carbohydrate, by difference (g)": "0.0",
            "Energy (kcal)": "0.0",
            "Protein (g)": "0.0",
            "Total lipid (fat) (g)": "0.0",
            "Utensils": "bowl||bowl||skillet",
            "Processes": "mix||pour||mix||knead||cover||brush||sprinkle||pick||take||heat||heat||place||roll||cook",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "6405721fa13d0d2d35891076",
            "Recipe_id": "3391",
            "Calories": "170.0",
            "cook_time": "35",
            "prep_time": "5",
            "servings": "4",
            "Recipe_title": "Mung Beans Cooked in Sweet Syrup",
            "total_time": "220",
            "url": "http://allrecipes.com/recipe/213986/mung-beans-cooked-in-sweet-syrup/",
            "Region": "Thai",
            "Sub_region": "Thai",
            "Continent": "Asian",
            "Source": "AllRecipes",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/1687049.jpg",
            "Carbohydrate, by difference (g)": "0.0",
            "Energy (kcal)": "0.0",
            "Protein (g)": "0.0",
            "Total lipid (fat) (g)": "0.0",
            "Utensils": "container||pot",
            "Processes": "place||cover||drain||combine||heat||cook||stir||cook||stir||remove||heat||warm",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057221a13d0d2d35891260",
            "Recipe_id": "3881",
            "Calories": "142.0",
            "cook_time": "20",
            "prep_time": "10",
            "servings": "4",
            "Recipe_title": "Latik (Fried Coconut Milk Curd)",
            "total_time": "30",
            "url": "http://allrecipes.com/recipe/212982/latik-fried-coconut-milk-curd/",
            "Region": "Southeast Asian",
            "Sub_region": "Filipino",
            "Continent": "Asian",
            "Source": "AllRecipes",
            "img_url": "https://images.media-allrecipes.com/images/79591.png",
            "Carbohydrate, by difference (g)": "0.0",
            "Energy (kcal)": "0.0",
            "Protein (g)": "0.0",
            "Total lipid (fat) (g)": "0.0",
            "Utensils": "bowl||bowl||skillet",
            "Processes": "mix||scoop||strain||boil||cook||dry",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "64057223a13d0d2d3589165c",
            "Recipe_id": "4901",
            "Calories": "114.0",
            "cook_time": "25",
            "prep_time": "20",
            "servings": "6",
            "Recipe_title": "Onigiri (Japanese Rice Balls)",
            "total_time": "55",
            "url": "http://allrecipes.com/recipe/246471/onigiri-japanese-rice-balls/",
            "Region": "Japanese",
            "Sub_region": "Japanese",
            "Continent": "Asian",
            "Source": "AllRecipes",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4534358.jpg",
            "Carbohydrate, by difference (g)": "0.0",
            "Energy (kcal)": "0.0",
            "Protein (g)": "0.0",
            "Total lipid (fat) (g)": "0.0",
            "Utensils": "saucepan||fork||bowl||tablespoon||bowl",
            "Processes": "combine||boil||cover||simmer||stirring||absorbed||cool||place||shape||shape||wrap",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        }
    ]
  ```

**Error Responses:**
1. **minEnergy > maxEnergy:**
   - **Status Code:** `400 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found in the specified Energy range"
     }
     ```
2. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found in the specified range."
     }
     ```
**Response Time**
   `92ms` 

### **17. Get Recipe by ingredients**(Implemented)

- **Endpoint:** `GET /api/recipebyingredient/by-ingredients`

- **Query Parameters:**
  - **include** (string, optional): The ingredients to include in recipe.
  - **exclude** (string, optional): The ingredients to exclude in recipe.
  - **limit** (integer, optional): The limit of number of responses (by default 10).

**Sample Request**:  
`GET /api/recipebyingredient/by-ingredients?include=&exclude=chicken&limit=5`

**Example Response:**
  ```json
 "success": true,
    "message": "Recipes fetched successfully",
    "data": [
        {
            "_id": "6405722ea13d0d2d35892a41",
            "Recipe_id": "10000",
            "Calories": "101.0",
            "cook_time": "180",
            "prep_time": "5",
            "servings": "12",
            "Recipe_title": "Sweet Honey French Bread",
            "total_time": "185",
            "url": "http://allrecipes.com/recipe/6818/sweet-honey-french-bread/",
            "Region": "French",
            "Sub_region": "French",
            "Continent": "European",
            "Source": "AllRecipes",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/344371.jpg",
            "Carbohydrate, by difference (g)": "201.5316",
            "Energy (kcal)": "1079.536",
            "Protein (g)": "32.8252",
            "Total lipid (fat) (g)": "13.5484",
            "Processes": "add||drizzle",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572c5a13d0d2d358a1aa2",
            "Recipe_id": "100000",
            "Calories": "272.8",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "06-Aug",
            "Recipe_title": "Southwestern Beef Brisket",
            "total_time": "205",
            "url": "http://www.geniuskitchen.com/recipe/southwestern-beef-brisket-77780",
            "Region": "South American",
            "Sub_region": "Argentine",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Carbohydrate, by difference (g)": "44.9113",
            "Energy (kcal)": "1245.2023",
            "Protein (g)": "99.6934",
            "Total lipid (fat) (g)": "73.941",
            "Processes": "season||heat||drain||combine||pour||cover||add||bake||remove||skim||reduce||slice||serve",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572c5a13d0d2d358a1aa3",
            "Recipe_id": "100001",
            "Calories": "465.8",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "Crushed Heirloom Potatoes",
            "total_time": "30",
            "url": "http://www.geniuskitchen.com/recipe/crushed-heirloom-potatoes-218673",
            "Region": "South American",
            "Sub_region": "Argentine",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/21/86/73/picnyIJ9c.jpg",
            "Carbohydrate, by difference (g)": "185.4988",
            "Energy (kcal)": "917.3564",
            "Protein (g)": "38.374",
            "Total lipid (fat) (g)": "4.2575",
            "Processes": "boil||crush||stir||blend||taste",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572c5a13d0d2d358a1aa4",
            "Recipe_id": "100002",
            "Calories": "467.6",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "4",
            "Recipe_title": "Heirloom Tomato Salad With Goat Cheese and Arugula",
            "total_time": "10",
            "url": "http://www.geniuskitchen.com/recipe/heirloom-tomato-salad-with-goat-cheese-and-arugula-98116",
            "Region": "South American",
            "Sub_region": "Argentine",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/98/11/6/picSrNuGL.jpg",
            "Carbohydrate, by difference (g)": "57.1692",
            "Energy (kcal)": "659.2041",
            "Protein (g)": "51.297",
            "Total lipid (fat) (g)": "30.5773",
            "Processes": "slice||season||drizzle||press||place||place||top||garnish",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "1.0",
            "ovo_lacto_vegetarian": "0.0"
        },
        {
            "_id": "640572c5a13d0d2d358a1aa5",
            "Recipe_id": "100003",
            "Calories": "297.1",
            "cook_time": "0",
            "prep_time": "0",
            "servings": "1",
            "Recipe_title": "Heirloom Tomato Sandwich With Basil Mayo",
            "total_time": "20",
            "url": "http://www.geniuskitchen.com/recipe/heirloom-tomato-sandwich-with-basil-mayo-308038",
            "Region": "South American",
            "Sub_region": "Argentine",
            "Continent": "Latin American",
            "Source": "Geniuskitchen",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/30/80/38/pic0e45os.jpg",
            "Carbohydrate, by difference (g)": "0.064",
            "Energy (kcal)": "512.0186",
            "Protein (g)": "89.8816",
            "Total lipid (fat) (g)": "14.27",
            "Processes": "slice||mix||chill||spread||add||slice",
            "vegan": "0.0",
            "pescetarian": "0.0",
            "ovo_vegetarian": "0.0",
            "lacto_vegetarian": "0.0",
            "ovo_lacto_vegetarian": "0.0"
        }
    ]
  ```

**Error Responses:**
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found in the specified range."
     }
     ```
**Response Time**
   `2.71s` 

### **18. Get Recipe of the day by ingredients (with instructions)**(Implemented)

- **Endpoint:** `GET recipe/recipe-day/with-ingredients`

- **Query Parameters:**
  - **excludeIngredients** (string, optional): The ingredients to exclude in recipe.
  - **limit** (integer, Required): The limit of number of responses .

**Sample Request**:  
`GET /recipe/recipe-day/with-ingredients?excludeIngredients=OnioN,garlic,beef,wateR,chicken,salt&&limit=5`

**Example Response:**
  ```json
 "success": "true",
    "message": "Recipes fetched successfully.",
    "payload": {
        "data": [
            {
                "_id": "64057301a13d0d2d358a92c8",
                "Recipe_id": "130778",
                "Calories": "239.8",
                "cook_time": "0",
                "prep_time": "0",
                "servings": "02-Apr",
                "Recipe_title": "Boursin Cheese and Sun-Dried Tomato Pizza",
                "total_time": "15",
                "url": "http://www.geniuskitchen.com/recipe/boursin-cheese-and-sun-dried-tomato-pizza-380187",
                "Region": "Italian",
                "Sub_region": "Italian",
                "Continent": "European",
                "Source": "Geniuskitchen",
                "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/38/01/87/pic1EF5K5.jpg",
                "Carbohydrate, by difference (g)": "3.9645",
                "Energy (kcal)": "18.0",
                "Protein (g)": "0.8415",
                "Total lipid (fat) (g)": "0.198",
                "Utensils": "oven",
                "Processes": "spread||distribute||chop||crumble||sprinkle||transfer||cook||remove||cut",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0",
                "instructions": "spread pesto sauce over the pizza base . distribute the salami evenly over the pizza . roughly chop the sun dried tomatoes and peppers and distribute evenly over the pizza . crumble the boursin cheese and distribute over the pizza . sprinkle the mozzarella sparingly over the pizza . transfer to the preheated pizza maker machine and cook until the crust is crisp and golden , rotating it 180 degrees half way through cooking to ensure it's cooked evenly . when the pizza is ready , remove , cut into pieces and serve immediately ."
            },
            {
                "_id": "6405723ba13d0d2d358943e6",
                "Recipe_id": "16570",
                "Calories": "856.0",
                "cook_time": "30",
                "prep_time": "10",
                "servings": "4",
                "Recipe_title": "Broccoli and Cheese Mashed Please",
                "total_time": "50",
                "url": "http://allrecipes.com/recipe/234782/broccoli-and-cheese-mashed-please/",
                "Region": "US",
                "Sub_region": "US",
                "Continent": "North American",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/250x250/1052974.jpg",
                "Carbohydrate, by difference (g)": "131.8206",
                "Energy (kcal)": "2725.8691",
                "Protein (g)": "72.5314",
                "Total lipid (fat) (g)": "212.4418",
                "Utensils": "oven",
                "Processes": "preheat||prepare||mix||fold||top||bake",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0",
                "instructions": "preheat oven to 375 degrees . prepare mashed potatoes following package directions . mix with the mayonnaise and soup . gently fold in the broccoli and half of the cheese . pour into a 9x13 casserole dish and top with remaining cheese and bread crumbs . bake for 30 minutes . let sit for a few minutes before serving ."
            },
            {
                "_id": "64057342a13d0d2d358ad733",
                "Recipe_id": "148302",
                "Calories": "101.0",
                "cook_time": "0",
                "prep_time": "0",
                "servings": "18",
                "Recipe_title": "Sugar Free-Fat Free- Cinnamon Hot Chocolate Mix",
                "total_time": "10",
                "url": "http://www.geniuskitchen.com/recipe/sugar-free-fat-free-cinnamon-hot-chocolate-mix-318838",
                "Region": "Canadian",
                "Sub_region": "Canadian",
                "Continent": "North American",
                "Source": "Geniuskitchen",
                "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/31/88/38/pictv6CUU.jpg",
                "Utensils": "container",
                "Processes": "mix||mix",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0",
                "instructions": "mix all ingredients together and place in an airtight container . to make hot chocolate , use 1/4 c mix and 1 c hot water . number of servings ,"
            },
            {
                "_id": "640572bba13d0d2d3589fbda",
                "Recipe_id": "92111",
                "Calories": "70.4",
                "cook_time": "0",
                "prep_time": "0",
                "servings": "18 rum balls",
                "Recipe_title": "Bacardi Rum Balls",
                "total_time": "15",
                "url": "http://www.geniuskitchen.com/recipe/bacardi-rum-balls-373792",
                "Region": "Caribbean",
                "Sub_region": "Puerto Rican",
                "Continent": "Latin American",
                "Source": "Geniuskitchen",
                "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
                "Carbohydrate, by difference (g)": "112.544",
                "Energy (kcal)": "639.1467",
                "Protein (g)": "9.8933",
                "Total lipid (fat) (g)": "18.192",
                "Utensils": "processor||bowl",
                "Processes": "crush||crush||place||add||roll",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0",
                "instructions": "crush the vanilla wafers using a food processor or if you don't have one , put the wafers in a sealed plastic bag and use a rolling pin to crush finely , no chunks or lumps . crush the nuts using the same process as for wafers . place in a large bowl , add the honey and rum . form into small balls and roll in powdered sugar ."
            },
            {
                "_id": "64057321a13d0d2d358ab658",
                "Recipe_id": "139885",
                "Calories": "389.6",
                "cook_time": "0",
                "prep_time": "0",
                "servings": "2",
                "Recipe_title": "Salmon With Cucumber Salad",
                "total_time": "20",
                "url": "http://www.geniuskitchen.com/recipe/salmon-with-cucumber-salad-424050",
                "Region": "Scandinavian",
                "Sub_region": "Swedish",
                "Continent": "European",
                "Source": "Geniuskitchen",
                "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/42/40/50/picEcFeZw.jpg",
                "Carbohydrate, by difference (g)": "5.5288",
                "Energy (kcal)": "834.8652",
                "Protein (g)": "180.9131",
                "Total lipid (fat) (g)": "5.5501",
                "Utensils": "sieve||plate",
                "Processes": "scoop||slice||sprinkle||season||steam||cover||rinse||dry||flake||mix||season||serve",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0",
                "instructions": "halve the cucumber lengthways and scoop out the seeds . slice into half moons and put in a sieve , sprinkle with a little salt and leave to drain for 10 minutes . season the salmon fillets and put on a plate . steam for 6 minutes or cover and microwave for 4 minutes or until cooked through . rinse the cucumber and pat dry . flake the salmon , mix with the cucumber , yogurt and dill and season with black pepper . serve with toast ."
            }
        ]
  ```

**Error Responses:**
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `834ms` 


### **19. Get Recipe of the day by Category (with instructions)**(Implemented)

- **Endpoint:** `GET /recipe-Day-category`

- **Query Parameters:**
  - **excludeDietrxCategories** (string, optional): The ingredients to exclude in recipe.
  - **limit** (integer, Required): The limit of number of responses .

**Sample Request**:  
`GET /recipe-Day-category?excludeDietrxCategories=Dairy&limit=5`

**Example Response:**
  ```json
"success": "true",
    "message": "Recipes fetched successfully.",
    "payload": {
        "data": [
            {
                "_id": "6405724aa13d0d2d358957eb",
                "Recipe_id": "50111",
                "Calories": "401.0",
                "cook_time": "0",
                "prep_time": "0",
                "servings": "4",
                "Recipe_title": "Moroccan Rice With Apricots and Pine Nuts",
                "total_time": "57",
                "url": "http://www.geniuskitchen.com/recipe/moroccan-rice-with-apricots-and-pine-nuts-446018",
                "Region": "Northern Africa",
                "Sub_region": "Moroccan",
                "Continent": "African",
                "Source": "Geniuskitchen",
                "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
                "Carbohydrate, by difference (g)": "558.4538",
                "Energy (kcal)": "3082.3008",
                "Protein (g)": "62.4095",
                "Total lipid (fat) (g)": "65.5836",
                "Utensils": "bowl||skillet",
                "Processes": "place||cover||set||chop||set||heat||heat||add||stirring||add||cook||stirring||seasoning||serve",
                "vegan": "1.0",
                "pescetarian": "1.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0",
                "instructions": "place the apricots in a heatproof bowl ; cover them with boiling water and set aside to soften , about 30 minutes . chop and set aside . heat the oil in a skillet over medium heat ; add in the pine nuts , stirring for 2 minutes , or until lightly browned . add in the scallions , rice , reserved apricots , parsley , salt , saffron , cayenne , cardamom , and cumin . cook , stirring until well mixed and heated through , about 10 minutes ; taste and adjust seasonings . serve ."
            },
            {
                "_id": "640572b7a13d0d2d3589f81f",
                "Recipe_id": "91156",
                "Calories": "686.8",
                "cook_time": "0",
                "prep_time": "0",
                "servings": "6",
                "Recipe_title": "My Favorite Souse",
                "total_time": "480",
                "url": "http://www.geniuskitchen.com/recipe/my-favorite-souse-207577",
                "Region": "Caribbean",
                "Sub_region": "Rest Caribbean",
                "Continent": "Latin American",
                "Source": "Geniuskitchen",
                "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
                "Carbohydrate, by difference (g)": "57.7616",
                "Energy (kcal)": "2511.0097",
                "Protein (g)": "192.04",
                "Total lipid (fat) (g)": "167.847",
                "Utensils": "pot||bowl",
                "Processes": "place||cover||cook||remove||drain||marinate||serve",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0",
                "instructions": "place the cut up meat in a large pot . cover with salted water . cook over medium heat until the meat is tender . remove the meat from the water , rinse in cold water , and drain . in a large bowl combine the cooked meat , garlic , onion , pepper , lime juice , water , salt , cucumbers , parsley and ground pepper . marinate for at least 6 hours . serve cold ."
            },
            {
                "_id": "64057331a13d0d2d358ac900",
                "Recipe_id": "144665",
                "Calories": "41.3",
                "cook_time": "0",
                "prep_time": "0",
                "servings": "6",
                "Recipe_title": "Cauliflower in a Coat (Dressed)",
                "total_time": "20",
                "url": "http://www.geniuskitchen.com/recipe/cauliflower-in-a-coat-dressed-24847",
                "Region": "Canadian",
                "Sub_region": "Canadian",
                "Continent": "North American",
                "Source": "Geniuskitchen",
                "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/24/84/7/picihcmRb.jpg",
                "Carbohydrate, by difference (g)": "5.7916",
                "Energy (kcal)": "208.565",
                "Protein (g)": "2.2757",
                "Total lipid (fat) (g)": "20.6184",
                "Processes": "steam||whisk||serve",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0",
                "instructions": "steam the cauliflower until tender . whisk together the remaining ingredients . pour the dressing over the cauliflower& serve ."
            },
            {
                "_id": "640572afa13d0d2d3589f3b5",
                "Recipe_id": "90023",
                "Calories": "567.3",
                "cook_time": "0",
                "prep_time": "0",
                "servings": "6",
                "Recipe_title": "Jamaican Me Crazy Burgers",
                "total_time": "75",
                "url": "http://www.geniuskitchen.com/recipe/jamaican-me-crazy-burgers-220999",
                "Region": "Caribbean",
                "Sub_region": "Rest Caribbean",
                "Continent": "Latin American",
                "Source": "Geniuskitchen",
                "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
                "Carbohydrate, by difference (g)": "46.4749",
                "Energy (kcal)": "2047.7155",
                "Protein (g)": "140.6289",
                "Total lipid (fat) (g)": "144.0984",
                "Utensils": "bowl||skillet",
                "Processes": "prepare||cover||stir||cover||refrigerate||serve||place||cook||stirring||remove||heat||stir||cover||refrigerate||handle||place||cover||cook||place||assemble||spread||place||add||serve",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0",
                "instructions": "prepare a medium hot fire in a charcoal grill with a cover , or preheat a gas grill to med high . make the mayonnaise , combine all the coconut mayonnaise ingredients in a bowl ; stir to combine ; cover and refrigerate until ready to serve . make the chutney , combine the duck sauce , salsa , and banana in an 8 inch fire proof skillet ; place on the grill rack and cook , stirring , until thickened—about 5 minutes . remove from heat , stir in the chopped tomatoes , cover , and refrigerate until serving . make the patties , combine the beef , bell pepper , green onion , soy sauce , allspice , thyme , and cayenne . handle as little as possible but combine mixture well . divide mixture into 6 equal portions ; form into patties to fit rolls . when the grill is ready , brush grill rack with oil ; place the patties on the rack , cover , and cook , turning once , until done to preference—5 7 minutes on each side for medium . during the last few minutes of cooking , place the rolls , cut side down , on the outer edges of the rack to toast lightly . assemble burgers , spread mayonnaise over the cut sides of the roll tops ; on each roll bottom , place ½ cup watercress , a patty , and an equal portion of the chutney ; add the roll tops and serve ."
            },
            {
                "_id": "640572b3a13d0d2d3589f5cb",
                "Recipe_id": "90557",
                "Calories": "267.3",
                "cook_time": "0",
                "prep_time": "0",
                "servings": "4",
                "Recipe_title": "Ginger, Lemon and Garlic Swordfish Steak.",
                "total_time": "31",
                "url": "http://www.geniuskitchen.com/recipe/ginger-lemon-and-garlic-swordfish-steak-233844",
                "Region": "Caribbean",
                "Sub_region": "Rest Caribbean",
                "Continent": "Latin American",
                "Source": "Geniuskitchen",
                "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/23/38/44/zbaEuKY4T5OI5vmo2m7c_263-grilled-swordfish.jpg",
                "Carbohydrate, by difference (g)": "0.4116",
                "Energy (kcal)": "1853.8311",
                "Protein (g)": "359.0894",
                "Total lipid (fat) (g)": "36.0799",
                "Utensils": "bowl",
                "Processes": "place||mix||add||mix||add||coat||preheat||remove||drizzle||serve",
                "vegan": "0.0",
                "pescetarian": "1.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0",
                "instructions": "place ginger and garlic in a small bowl and mix together to form a paste . add the lemon juice , spring onions , chili and oil , then mix again . add swordfish steaks and coat well with the mixture . leave to marinate for 15 minutes . preheat grill to high . remove fish from marinade and place on grill rack . grill for 5 6 minutes , turning once . drizzle with remaining marinade and serve with new potatoes , lime wedges and mixed salad ."
            }
        ]
  ```

**Error Responses:**
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found"
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `1.10s` 

### **20. Get Recipe by Protein**(Implemented)

- **Endpoint:** `GET /api/protein/protein-range`

- **Query Parameters:**
  - **min** (integer, required): The minimum value of the protein.
  -  **max** (integer, required): The max value of the protien.
  - **limit** (integer, optional): The limit of number of responses .

**Sample Request**:  
`GET /api/protein/protein-range?min=20&max=30&page=1&limit=10`

**Example Response:**
  ```json
 "success": true,
    "currentPage": 1,
    "totalPages": 928,
    "totalRecipes": 9278,
    "recipesPerPage": 10,
    "query": {
        "min": 20,
        "max": 30
    },
    "data": [
        {
            "_id": "6405723ba13d0d2d35894317",
            "Recipe_id": "16363",
            "Calories": "452.0",
            "cook_time": "60",
            "Recipe_title": "Irresistible Pecan Pie",
            "Region": "US",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4573769.jpg",
            "Protein (g)": 29.9992
        },
        {
            "_id": "64057235a13d0d2d35893945",
            "Recipe_id": "13846",
            "Calories": "452.0",
            "cook_time": "60",
            "Recipe_title": "Irresistible Pecan Pie",
            "Region": "US",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4573769.jpg",
            "Protein (g)": 29.9992
        },
        {
            "_id": "6405723ea13d0d2d358945c2",
            "Recipe_id": "17047",
            "Calories": "84.0",
            "cook_time": "25",
            "Recipe_title": "Crawfish Boulettes",
            "Region": "US",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4488289.jpg",
            "Protein (g)": 29.9983
        },
        {
            "_id": "6405732fa13d0d2d358ac474",
            "Recipe_id": "143500",
            "Calories": "342.7",
            "cook_time": "0",
            "Recipe_title": "Apple Almond Cake",
            "Region": "Canadian",
            "img_url": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/29/66/30/picQzsOUq.jpg",
            "Protein (g)": 29.9966
        },
        {
            "_id": "640572e4a13d0d2d358a5e0c",
            "Recipe_id": "117270",
            "Calories": "260.5",
            "cook_time": "0",
            "Recipe_title": "Swiss Chard Tacos With Caramelized Onion, Cheese and Chipotle",
            "Region": "Deutschland ",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Protein (g)": 29.9964
        },
        {
            "_id": "6405722ca13d0d2d35892825",
            "Recipe_id": "9459",
            "Calories": "150.0",
            "cook_time": "15",
            "Recipe_title": "Avgolemono",
            "Region": "Greek",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/2510.jpg",
            "Protein (g)": 29.9962
        },
        {
            "_id": "64057239a13d0d2d35893d4b",
            "Recipe_id": "14878",
            "Calories": "409.0",
            "cook_time": "10",
            "Recipe_title": "Crab Cakes II",
            "Region": "US",
            "img_url": "https://images.media-allrecipes.com/userphotos/250x250/951944.jpg",
            "Protein (g)": 29.9957
        },
        {
            "_id": "64057235a13d0d2d358938eb",
            "Recipe_id": "13756",
            "Calories": "1219.0",
            "cook_time": "15",
            "Recipe_title": "Jibarito",
            "Region": "US",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/715582.jpg",
            "Protein (g)": 29.9917
        },
        {
            "_id": "6405722ba13d0d2d358922f2",
            "Recipe_id": "8125",
            "Calories": "1219.0",
            "cook_time": "15",
            "Recipe_title": "Jibarito",
            "Region": "Caribbean",
            "img_url": "https://images.media-allrecipes.com/userphotos/560x315/715582.jpg",
            "Protein (g)": 29.9917
        },
        {
            "_id": "640572d5a13d0d2d358a3cce",
            "Recipe_id": "108752",
            "Calories": "72.4",
            "cook_time": "0",
            "Recipe_title": "Greek Lamb With Spinach and Orzo",
            "Region": "Greek",
            "img_url": "https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png",
            "Protein (g)": 29.9915
        }
    ]
  ```

**Error Responses:**
1. **min range> maxrange:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found in the specified protien range"
     }
     ```
     
2. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

3. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `907ms` 

### **21. Get Recipe by ID**(Implemented)

- **Endpoint:** `GET /api/protein/protein-range`

- **Query Parameters:**
  - **min** (integer, required): The minimum value of the protein.
  -  **max** (integer, required): The max value of the protien.
  - **limit** (integer, optional): The limit of number of responses .

**Sample Request**:  
`GET /api/protein/protein-range?min=20&max=30&page=1&limit=10`

**Example Response:**
  ```json
 "_id": "6405721fa13d0d2d35890d69",
    "Recipe_id": "2610",
    "Calories": "196.0",
    "cook_time": "30",
    "prep_time": "15",
    "servings": "4",
    "Recipe_title": "Egyptian Lentil Soup",
    "total_time": "45",
    "url": "http://allrecipes.com/recipe/222661/egyptian-lentil-soup/",
    "Region": "Middle Eastern",
    "Sub_region": "Egyptian",
    "Continent": "African",
    "Source": "AllRecipes",
    "img_url": "https://images.media-allrecipes.com/userphotos/560x315/5196784.jpg",
    "Carbohydrate, by difference (g)": "146.7606",
    "Energy (kcal)": "805.6975",
    "Protein (g)": "49.554",
    "Total lipid (fat) (g)": "5.6564",
    "Processes": "place||heat||cook||remove||cool||blend||smooth||stir||heat",
    "vegan": "0.0",
    "pescetarian": "0.0",
    "ovo_vegetarian": "0.0",
    "lacto_vegetarian": "0.0",
    "ovo_lacto_vegetarian": "0.0"
    
  ```

**Error Responses:**
     
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found"
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `51ms`    

### **22. Get Recipe by Category**(Implemented)

- **Endpoint:** `GET /api/recipes/dietary`

- **Query Parameters:**
  - **includeDietrxCategories** (string, optional): The category to include.
  -  **excludeDietrxCategories** (string, optional): The category to exclude.
  - **limit** (integer, optional): The limit of the number of responses .
  - **page** (integer, optional): The limit of number of responses.

**Sample Request**:  
`GET api/category?includedietrxcategories=&excludeDietrxCategories=Dairy&limit=5&page=1`

**Example Response:**
  ```json
  "success": "true",
    "message": "Recipes fetched successfully.",
    "payload": {
        "data": [
            {
                "Recipe_id": "2610",
                "Recipe_title": "Egyptian Lentil Soup",
                "Calories": "196.0",
                "cook_time": "30",
                "prep_time": "15",
                "servings": "4",
                "total_time": "45",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/5196784.jpg",
                "Carbohydrate": "146.7606",
                "Energy": "805.6975",
                "Protein": "49.554",
                "Fat": "5.6564",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0"
            },
            {
                "Recipe_id": "2611",
                "Recipe_title": "Egyptian Green Beans with Carrots",
                "Calories": "80.0",
                "cook_time": "35",
                "prep_time": "10",
                "servings": "4",
                "total_time": "45",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/2619313.jpg",
                "Carbohydrate": "39.3312",
                "Energy": "386.767",
                "Protein": "15.5638",
                "Fat": "19.7239",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0"
            },
            {
                "Recipe_id": "2612",
                "Recipe_title": "Egyptian Bamia",
                "Calories": "339.0",
                "cook_time": "120",
                "prep_time": "15",
                "servings": "4",
                "total_time": "135",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/3840150.jpg",
                "Carbohydrate": "34.0004",
                "Energy": "1762.7662",
                "Protein": "82.9034",
                "Fat": "146.8971",
                "vegan": "0.0",
                "pescetarian": "0.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0"
            },
            {
                "Recipe_id": "2614",
                "Recipe_title": "Dukkah",
                "Calories": "45.0",
                "cook_time": "5",
                "prep_time": "20",
                "servings": "24",
                "total_time": "25",
                "Region": "Middle Eastern",
                "Sub_region": "Egyptian",
                "Continent": "African",
                "Source": "AllRecipes",
                "img_url": "https://images.media-allrecipes.com/userphotos/560x315/4572970.jpg",
                "Carbohydrate": "83.0609",
                "Energy": "1006.238",
                "Protein": "26.18",
                "Fat": "73.1713",
                "vegan": "1.0",
                "pescetarian": "1.0",
                "ovo_vegetarian": "0.0",
                "lacto_vegetarian": "0.0",
                "ovo_lacto_vegetarian": "0.0"
            }
        ]
    
  ```

**Error Responses:**
     
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `472ms` 

### **23. Get Recipe by Region**(Implemented)

- **Endpoint:** `GET /api/recipes_cuisine/cuisine`

- **Query Parameters:**
  - **Region** (string, Required): Region to find for.

**Sample Request**:  
`GET /api/recipes_cuisine/cuisine/Middle Eastern`

**Example Response:**
  ```json
  "success": true,
    "page": 1,
    "totalPages": 391,
    "totalResults": 3905,
    "data": [
        {
            "_id": "6405721fa13d0d2d35890d69",
            "Recipe_id": "2610",
            "cook_time": "30",
            "prep_time": "15",
            "Recipe_title": "Egyptian Lentil Soup",
            "total_time": "45",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6a",
            "Recipe_id": "2611",
            "cook_time": "35",
            "prep_time": "10",
            "Recipe_title": "Egyptian Green Beans with Carrots",
            "total_time": "45",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6b",
            "Recipe_id": "2612",
            "cook_time": "120",
            "prep_time": "15",
            "Recipe_title": "Egyptian Bamia",
            "total_time": "135",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6c",
            "Recipe_id": "2613",
            "cook_time": "15",
            "prep_time": "15",
            "Recipe_title": "Magpie's Easy Falafel Cakes",
            "total_time": "60",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6d",
            "Recipe_id": "2614",
            "cook_time": "5",
            "prep_time": "20",
            "Recipe_title": "Dukkah",
            "total_time": "25",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6e",
            "Recipe_id": "2615",
            "cook_time": "30",
            "prep_time": "30",
            "Recipe_title": "Om Ali",
            "total_time": "60",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6f",
            "Recipe_id": "2616",
            "cook_time": "25",
            "prep_time": "10",
            "Recipe_title": "Rice Pudding with Lemon Juice and Caramelized Onion (Egyptian Kishk)",
            "total_time": "35",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d70",
            "Recipe_id": "2617",
            "cook_time": "30",
            "prep_time": "20",
            "Recipe_title": "Couscous with Olives and Sun-Dried Tomato",
            "total_time": "50",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d71",
            "Recipe_id": "2618",
            "cook_time": "10",
            "prep_time": "10",
            "Recipe_title": "Fava Bean Breakfast Spread",
            "total_time": "20",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d72",
            "Recipe_id": "2619",
            "cook_time": "60",
            "prep_time": "20",
            "Recipe_title": "Koshary",
            "total_time": "80",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        }
    ]
    
  ```

**Error Responses:**
     
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `78ms` 

### **24. Get Recipe by Region and continent**(Implemented)

- **Endpoint:** `GET /api/recipes_cuisine/cuisine/`

- **Query Parameters:**
  - **Region** (string, Required): Region to find for.
  - **Continent** (string, Required): Continent for recipe.

**Sample Request**:  
`GET /api/recipes_cuisine/cuisine/Middle Eastern?continent=African`

**Example Response:**
  ```json
  "success": true,
    "page": 1,
    "totalPages": 33,
    "totalResults": 325,
    "data": [
        {
            "_id": "6405721fa13d0d2d35890d69",
            "Recipe_id": "2610",
            "cook_time": "30",
            "prep_time": "15",
            "Recipe_title": "Egyptian Lentil Soup",
            "total_time": "45",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6a",
            "Recipe_id": "2611",
            "cook_time": "35",
            "prep_time": "10",
            "Recipe_title": "Egyptian Green Beans with Carrots",
            "total_time": "45",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6b",
            "Recipe_id": "2612",
            "cook_time": "120",
            "prep_time": "15",
            "Recipe_title": "Egyptian Bamia",
            "total_time": "135",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6c",
            "Recipe_id": "2613",
            "cook_time": "15",
            "prep_time": "15",
            "Recipe_title": "Magpie's Easy Falafel Cakes",
            "total_time": "60",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6d",
            "Recipe_id": "2614",
            "cook_time": "5",
            "prep_time": "20",
            "Recipe_title": "Dukkah",
            "total_time": "25",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6e",
            "Recipe_id": "2615",
            "cook_time": "30",
            "prep_time": "30",
            "Recipe_title": "Om Ali",
            "total_time": "60",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6f",
            "Recipe_id": "2616",
            "cook_time": "25",
            "prep_time": "10",
            "Recipe_title": "Rice Pudding with Lemon Juice and Caramelized Onion (Egyptian Kishk)",
            "total_time": "35",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d70",
            "Recipe_id": "2617",
            "cook_time": "30",
            "prep_time": "20",
            "Recipe_title": "Couscous with Olives and Sun-Dried Tomato",
            "total_time": "50",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d71",
            "Recipe_id": "2618",
            "cook_time": "10",
            "prep_time": "10",
            "Recipe_title": "Fava Bean Breakfast Spread",
            "total_time": "20",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d72",
            "Recipe_id": "2619",
            "cook_time": "60",
            "prep_time": "20",
            "Recipe_title": "Koshary",
            "total_time": "80",
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        }
    ]
    
  ```

**Error Responses:**
     
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found"
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `77ms` 
### **25. Get Recipe by Region,continent,subregion,Time(with type)**(Implemented)

- **Endpoint:** `GET /api/recipes_cuisine/cuisine/`

- **Query Parameters:**
  - **Region** (string, Required): Region to find for.
  - **Continent** (string, Required): Continent for recipe.
  - **Subregion** (string, Required): Subregion for recipe.
  - **Time** (integer, Required): Time for recipe.

**Sample Request**:  
`GET /api/recipes_cuisine/cuisine/Middle Eastern?continent=African`

**Example Response:**
  ```json
  "success": true,
    "page": 1,
    "totalPages": 19,
    "totalResults": 184,
    "data": [
        {
            "_id": "6405721fa13d0d2d35890d69",
            "Recipe_id": "2610",
            "cook_time": "30",
            "prep_time": "15",
            "Recipe_title": "Egyptian Lentil Soup",
            "total_time": 45,
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6a",
            "Recipe_id": "2611",
            "cook_time": "35",
            "prep_time": "10",
            "Recipe_title": "Egyptian Green Beans with Carrots",
            "total_time": 45,
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6c",
            "Recipe_id": "2613",
            "cook_time": "15",
            "prep_time": "15",
            "Recipe_title": "Magpie's Easy Falafel Cakes",
            "total_time": 60,
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6d",
            "Recipe_id": "2614",
            "cook_time": "5",
            "prep_time": "20",
            "Recipe_title": "Dukkah",
            "total_time": 25,
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6e",
            "Recipe_id": "2615",
            "cook_time": "30",
            "prep_time": "30",
            "Recipe_title": "Om Ali",
            "total_time": 60,
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d6f",
            "Recipe_id": "2616",
            "cook_time": "25",
            "prep_time": "10",
            "Recipe_title": "Rice Pudding with Lemon Juice and Caramelized Onion (Egyptian Kishk)",
            "total_time": 35,
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d70",
            "Recipe_id": "2617",
            "cook_time": "30",
            "prep_time": "20",
            "Recipe_title": "Couscous with Olives and Sun-Dried Tomato",
            "total_time": 50,
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d71",
            "Recipe_id": "2618",
            "cook_time": "10",
            "prep_time": "10",
            "Recipe_title": "Fava Bean Breakfast Spread",
            "total_time": 20,
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d74",
            "Recipe_id": "2621",
            "cook_time": "15",
            "prep_time": "10",
            "Recipe_title": "Fava Beans in Tahini Sauce",
            "total_time": 25,
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        },
        {
            "_id": "6405721fa13d0d2d35890d76",
            "Recipe_id": "2623",
            "cook_time": "23",
            "prep_time": "10",
            "Recipe_title": "Quick and Easy Egyptian Chicken Broth",
            "total_time": 33,
            "Region": "Middle Eastern",
            "Sub_region": "Egyptian",
            "Continent": "African",
            "Source": "AllRecipes"
        }
    ]
    
  ```

**Error Responses:**
     
1. **Database error:**
   - **Status Code:** `500 Bad Request`
   - **Response Body:**
     ```json
     {
         "success": false,
          "message": "No recipes found "
     }
     ```

2. **No Recipes Found:**
   - **Status Code:** `200 ok`
   - **Response Body:**
     ```json
     {
       "message": "No recipes found."
     }
     ```
**Response Time**
   `73ms` 
