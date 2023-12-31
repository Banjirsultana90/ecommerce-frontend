import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'

import "./index.css";
import AuthProvider from './Components/provider/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto bg-base-200'>
      <AuthProvider> <RouterProvider router={router} /></AuthProvider>
    </div>
  </React.StrictMode>,
)
