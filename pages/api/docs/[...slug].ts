import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import specs from '../../../swagger';

function ApiDocs() {
    return (
        <SwaggerUI
            swaggerSpec={specs}
            options={{
                customCss: `
                    .swagger-ui .opblock .opblock-summary {
                        border-radius: 10px;
                    }
                    .swagger-ui .opblock .opblock-summary-description {
                        border-radius: 10px;
                    }
                    .swagger-ui .scheme-container {
                        border-radius: 10px;
                    }
                `,
            }}
        />
    );
}

export default ApiDocs;
