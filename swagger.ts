import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'https://api-fdkf.vercel.app'
      }
    ]
  },
  apis: ['pages/api/**/*.ts']
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
