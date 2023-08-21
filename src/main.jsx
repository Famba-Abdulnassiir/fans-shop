import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Aboutus from './pages/Aboutus.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact-us.jsx'
import Home from './pages/Home.jsx'
import Signup from './components/Signup.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>    
  },
  {
    path:"/signup",
    element:<Signup/>    
  },
  {
    path:"/dashboard",
    element:<Dashboard/>,
    children:[
      {
        path:"/dashboard",
        element:<Home/>
      },
      {
        path:"/dashboard/aboutus",
        element:<Aboutus/>
      },
      {
        path:"/dashboard/services",
        element:<Services/>
      },
      {
        path:"/dashboard/contactus",
        element:<Contact/>
      }
    ]
   
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>  
  </React.StrictMode>,
)
