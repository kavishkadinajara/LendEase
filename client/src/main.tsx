import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ShootingStars } from './components/ui/shooting-stars';
import { StarsBackground } from './components/ui/stars-background';
import Root from './routes/Root';
import Register from './routes/Register';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard'; // Import the Dashboard component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard", // Add the dashboard path
    element: <Dashboard />, // Set the Dashboard component as the element
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="h-full min-h-screen rounded-md flex flex-col items-center justify-center relative w-screen">
      <StarsBackground />
      <ShootingStars />
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
