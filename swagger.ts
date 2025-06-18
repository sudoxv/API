import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0'
        }
    },
    apis: ['./pages/api/*.ts']
}

const specs = swaggerJsdoc(options);

export default specs;
