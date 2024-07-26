import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./text.css";
import "./images.css";
import "./navigation.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Load pages
import Contact from './pages/contact/contact.tsx'
import Gear from './pages/gear/gear.tsx'
import Home from './pages/home/home.tsx'
import CountrySelector from './pages/countryselector.tsx'

const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/country/:country",
    element: <CountrySelector />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
