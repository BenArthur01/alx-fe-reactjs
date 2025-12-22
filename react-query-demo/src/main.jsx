// src/main.jsx
// Purpose: Provide React Query client at the root of the app.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const queryClient = new QueryClient(); // Creates a cache + config for queries

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Make React Query available to all components */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
