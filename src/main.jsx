import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Project from './components/pages/Project'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects.jsx'

import { createBrowserRouter, RouterProvider  } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "newproject",
        element: <NewProject />,
      },
      {
        path: "project/:id",
        element: <Project />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      ],
    },
  ],
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
