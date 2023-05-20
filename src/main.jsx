import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Main.jsx'
import AuthProviders from './Providers/AuthProviders'
import '@smastrom/react-rating/style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-2xl mx-auto bg-white'>
    <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
    </React.StrictMode>
  </div>
)
