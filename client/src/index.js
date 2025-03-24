import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@ant-design/v5-patch-for-react-19';
import 'antd/dist/reset.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
