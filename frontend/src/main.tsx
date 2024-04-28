import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { loadTokenFromStorage } from './services/tokenService.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

if (localStorage.token) {
  loadTokenFromStorage();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);