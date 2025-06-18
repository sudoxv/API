import React from 'react';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';
import specs from '../../swagger';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), {
  ssr: false,
});

const ApiDocs: React.FC = () => {
    return (
        <div style={{ padding: 16 }}>
        <SwaggerUI
            spec={specs}
            options={{
            customCss: `
                .swagger-ui .opblock .opblock-summary,
                .swagger-ui .opblock .opblock-summary-description,
                .swagger-ui .scheme-container,
                .swagger-ui .opblock-tag,
                .swagger-ui .opblock {
                    border-radius: 10px;
                }
            `,
            }}
        />
        </div>
    );
};

export default ApiDocs;
