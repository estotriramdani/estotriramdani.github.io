import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'papercss/dist/paper.min.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
