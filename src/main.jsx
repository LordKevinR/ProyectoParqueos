import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Layout from './Components/Layout'
import Entrada from './Components/Entrada'
import Salida from './Components/Salida'
import Index from './Components/Index'
import Disponibilidad from './Components/Disponibilidad'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index/>
      },
      {
        path: '/parqueos/entrada',
        element: <Entrada />
      },
      {
        path: '/parqueos/salida',
        element: <Salida />
      },
      {
        path: '/parqueos/disponibilidad',
        element: <Disponibilidad />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
