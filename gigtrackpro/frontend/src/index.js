import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import { GlobalStyle } from './styles/GlobalStyles';
import { GlobalProvider } from './context/Global';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);
