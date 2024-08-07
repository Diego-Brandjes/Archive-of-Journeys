import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./text.css";
import "./images.css";
import "./navigation.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Load pages
import CountrySelector from './pages/countryselector.tsx'
import Home from './pages/home/home.tsx'
import Contact from './pages/contact/contact.tsx'
import Gear from './pages/gear/gear.tsx'
import GalleryPage from './pages/gallery/gallery.tsx'
import NotFound from './pages/notfound.tsx'
import navbar from './compontents/navbar.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/gear",
    element: <Gear />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/country/:country",
    element: <CountrySelector />,
  },
  {
    path: "*",  // Catch-all route
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
