import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';
import { useRouter } from 'next/router';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

const ApiDocs = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div style={{ padding: 16 }}>
      <SwaggerUI
        url="/api/swagger"
        docExpansion="none"
        defaultModelsExpandDepth={-1}
        options={{
          customCss: `
            .swagger-ui .topbar { background-color: #0f172a; }
            .swagger-ui .topbar-wrapper img { content: url('https://nextjs.org/static/favicon/favicon-32x32.png'); height: 40px; }
            .swagger-ui .opblock .opblock-summary {
              border-radius: 10px;
              background-color: #f8fafc;
            }
            .swagger-ui .opblock-tag {
              font-size: 18px;
              color: #334155;
              background: #e2e8f0;
              border-radius: 6px;
              padding: 6px;
            }
          `,
        }}
      />
    </div>
  );
};

export default ApiDocs;
