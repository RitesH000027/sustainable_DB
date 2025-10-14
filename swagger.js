
const swaggerAutogen = require('swagger-autogen')();
const config = require('./config/config')
const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: `localhost:${config.port}`,
 
};
  
  const outputFile = './swagger-output.json';
  const routes = ['./app.js'];

 

swaggerAutogen(outputFile, routes, doc);
