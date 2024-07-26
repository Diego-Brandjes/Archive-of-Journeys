import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Load pages
import Contact from './pages/contact/contact.tsx'
// import Egypt from './pages/egypt/egypt.tsx'
import Gear from './pages/gear/gear.tsx'
import Home from './pages/home/home.tsx'
// import Italy from './pages/italy/italy.tsx'
import Japan from './pages/japan/japan.tsx'


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
    path: "/Japan",
    element: <Japan />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
