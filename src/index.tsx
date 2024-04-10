import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './localization/i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const query = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    <QueryClientProvider client={query}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </QueryClientProvider>
  </React.StrictMode>
);

