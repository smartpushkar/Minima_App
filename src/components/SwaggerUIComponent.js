import React, { useEffect, useState } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import Swagger from 'swagger-js';

const loadSwagger = async (bearerToken) => {
  try {
    const url = 'http://localhost:8091/api-fw/v3/api-docs'; // Replace with the actual URL of your Swagger API documentation.
    const swagger = await Swagger({
      url,
      requestInterceptor: (req) => {
        if (bearerToken) {
          req.headers['Authorization'] = `Bearer ${bearerToken}`;
        }
      },
    });
    return swagger;
  } catch (error) {
    console.error('Error loading Swagger:', error);
    return null;
  }
};

const SwaggerUIComponent = ({ bearerToken }) => {
  const [swaggerData, setSwaggerData] = useState(null);

  useEffect(() => {
    loadSwagger(bearerToken).then((swagger) => {
      setSwaggerData(swagger);
    });
  }, [bearerToken]);

  return <>{swaggerData && <SwaggerUI spec={swaggerData} />}</>;
};

export default SwaggerUIComponent;
