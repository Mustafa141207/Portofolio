import React, { useEffect } from 'react'
import SideBar from '../SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import $ from 'jquery'
import NavBar from '../NavBar/NavBar'

export default function Master() {
 
  return (
    <>
    <NavBar/>
    
     <div className="row g-0">
      <div className="col-12">
      <Outlet/>  
      </div>
    </div> 
    </>
      
    
  )
}
