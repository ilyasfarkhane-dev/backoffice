import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense>
    <Toaster
      position="top-center" // Options: 'top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'
      duration={4000} // Duration in milliseconds
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
);
