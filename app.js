const express = require('express');

const recipeRoutes = require('./routes/recipes');
const ingredientsRoutes = require('./routes/ingredients');
const config = require('./config/config');
const connectDB = require('./config/dbconfig'); // Import DB config
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const app = express();

// In Athena mode, this is just a placeholder function 
// that doesn't actually connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Middleware for swagger.js

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Register the routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/ingredients', ingredientsRoutes);

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
