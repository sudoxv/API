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
        ],
        {
  "openapi": "3.0.0",
  "info": {
    "title": "API Documentation",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://your-vercel-url.vercel.app"
    }
  ],
  "paths": {
    "/api/stalk/tiktok": {
      "get": {
        "summary": "Tiktok Stalker",
        "parameters": [
          {
            "in": "query",
            "name": "username",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Data TikTok"
          }
        }
      }
    }
  },
  apis: ["pages/api/**/*.ts"]
}

const specs = swaggerJsdoc(options);

export default specs;
