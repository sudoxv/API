import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

export default function ApiDocs() {
  return (
    <div style={{ padding: 16 }}>
      <SwaggerUI url="/api/swagger" docExpansion="none" defaultModelsExpandDepth={-1} />
    </div>
  );
}
