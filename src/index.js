import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// context
import { ContextProvider } from './context/ContextProvider'

import { registerLicense } from '@syncfusion/ej2-base';
registerLicense("ORg4AjUWIQA/Gnt2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRhUX1ecH1XQmhbVUw=");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
