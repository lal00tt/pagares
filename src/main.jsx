import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Pdf from './pages/pdf'
// import moment from 'moment'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/pdf',
    element: <Pdf />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(// <BrowserRouter>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
