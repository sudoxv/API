import dynamic from 'next/dynamic';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

import 'swagger-ui-react/swagger-ui.css';
import specs from '../../../swagger';

const ApiDocs = () => {
    return (
        <SwaggerUI 
            spec={specs} 
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
                    .swagger-ui .opblock-tag {
                        border-radius: 10px;
                    }
                    .swagger-ui .opblock {
                        border-radius: 10px;
                    }
                `,
            }}
        />
    );
};

export default ApiDocs;
