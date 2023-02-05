import DrawerLayout from 'components/layouts/drawer-layouts';
import CerealsPage from 'pages/products-page/cereal-page';
import NotFoundPage from 'pages/products-page/not-found-page/not-found';
import SingleCerealPage from 'pages/products-page/single-page';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DrawerLayout />,
    children: [
      {
        index: true,
        element: <CerealsPage />,
      },
      {
        path: '/cereal/:cerealId',
        element: <SingleCerealPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
