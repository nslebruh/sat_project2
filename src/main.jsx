import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import MainPage from './MainPage'
import Login from './Login'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
