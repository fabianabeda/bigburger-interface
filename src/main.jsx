import React from 'react';
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { Login } from './containers/Login';
import GlobalStyle from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
    <GlobalStyle />
    <ToastContainer autoClose={2000} theme="colored" />
  </React.StrictMode>,
)
