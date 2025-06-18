import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';
import swaggerSpec from '../../swagger';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

export default function ApiDocsPage() {
  return (
    <div style={{ padding: 16 }}>
      <SwaggerUI
        spec={swaggerSpec}
        docExpansion="none"
        defaultModelsExpandDepth={-1}
        deepLinking
        displayRequestDuration
        persistAuthorization
        tryItOutEnabled
        supportedSubmitMethods={['get', 'post', 'put', 'delete']}
        showExtensions
        showCommonExtensions
        displayOperationId
        defaultModelExpandDepth={1}
        defaultModelRendering="example"
        plugins={[]}
        layout="BaseLayout"
        options={{
          customCss: `
            .swagger-ui .opblock {
              border-radius: 10px;
              border: 1px solid #eee;
              margin-bottom: 10px;
            }
            .swagger-ui .topbar { display: none }
          `,
        }}
      />
    </div>
  );
}
