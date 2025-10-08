import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../../Pages/Home/Home';
import Apps from '../../Pages/Apps/Apps';
import Installation from '../../Pages/Installation/Installation';
import Error from '../../Pages/Error/Error';
import AppDetails from '../../Pages/AppDetails/AppDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/FakeData.json")
      },
      {
        path: "/Apps",
        element: <Apps></Apps>,
        loader: () => fetch("/FakeData.json")
      },
      {
        path: "/Installation",
        element: <Installation></Installation>,
      },
      {
        path: '/appDetails/:id',
        loader: () => fetch("/FakeData.json"),
        element:<AppDetails></AppDetails>
      }
    ],
  },
]);

export default router;