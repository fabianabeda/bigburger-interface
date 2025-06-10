import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Login } from '../containers/Login';
import { Register } from '../containers/Register';

const ErrorPage = () => (
  <div>
    <h1>404 - Página não encontrada</h1>
    <p>Ops! A rota que você tentou acessar não existe.</p>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,  // ou um componente Home que você criar
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/cadastro',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]);
