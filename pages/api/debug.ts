import swaggerJSDoc from 'swagger-jsdoc';

export default function handler(req, res) {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: { title: 'Debug API', version: '1.0.0' }
    },
    apis: ['pages/api/**/*.ts']
  };

  const spec = swaggerJSDoc(options);
  res.status(200).json(spec);
}
