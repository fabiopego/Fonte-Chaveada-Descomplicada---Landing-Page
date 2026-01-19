
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

/**
 * Lógica de Basename:
 * Se estivermos no domínio de produção (ou se o caminho começar com /fonte-chaveada),
 * aplicamos o basename para o React Router. Caso contrário (como no editor), usamos a raiz.
 */
const getBasename = () => {
  const path = window.location.pathname;
  const isProductionPath = path.startsWith('/fonte-chaveada');
  
  if (isProductionPath) {
    return '/fonte-chaveada';
  }
  return '/';
};

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
