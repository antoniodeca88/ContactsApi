const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');



const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API to manage a list of contacts',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./routes/*.js'],
};
