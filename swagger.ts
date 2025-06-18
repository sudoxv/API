import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0'
        }
    },
    apis: [path.join(__dirname, 'pages/api/**/*.ts')]
}

const specs = swaggerJsdoc(options);

export default specs;
