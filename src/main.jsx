import React from 'react';


import ReactDOM from 'react-dom/client';

import GlobalRouter from '@/pages/GlobalRouter';

import './index.css';
import { DarkModeContextProvider, UserContextProvider } from '@/context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <DarkModeContextProvider>
        <GlobalRouter />
      </DarkModeContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
