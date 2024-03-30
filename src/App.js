import React from 'react'
import NavBar from './component/NavBar/NavBar'
import SideBar from './component/SideBar/SideBar'
import Master from './component/Master/Master'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from './component/Project/Project'
import Contact from'./component/Contact/Contact'
import About from './component/About/About'
import Home from './component/Home/Home';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  let router=createBrowserRouter(
    [
      {path:'',element:<Master/>,children:[
        {path:'',element:<Home/>},
        {path:'Home',element:<Home/>},
        {path:'About',element:<About/>},
        {path:'Project',element:<Project/>},
        {path:'Contact',element:<Contact/>},
      ]}

    ]
    )
  return (
    <>

   <RouterProvider router={router}>
   <Toaster/>

    


   </RouterProvider>
    </>
  )
}

