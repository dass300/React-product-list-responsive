import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client';
// import App4 from './App4';
import App5 from './App5';
import { BrowserRouter } from 'react-router-dom';
// import App2 from './App2';
// import App3 from './App3';
// import App from './App';
// import App from './App1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   <App5/>
    </BrowserRouter>
  </React.StrictMode>
);


