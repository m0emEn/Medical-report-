import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import store from './store';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster position="top-right" />
    </Provider>
  </StrictMode>,
)
