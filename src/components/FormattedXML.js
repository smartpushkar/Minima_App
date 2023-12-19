import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose the style you prefer

const FormattedXML = ({ selectedXMLData }) => {
    return (
      <div>
        <SyntaxHighlighter language="xml" style={vscDarkPlus}>
          {selectedXMLData}
        </SyntaxHighlighter>
      </div>
    );
  };
  
  export default FormattedXML;
  