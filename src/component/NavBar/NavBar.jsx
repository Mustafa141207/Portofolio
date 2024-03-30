import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
  <>
  <nav
  id='Nav'  class="navbar navbar-expand-sm navbar-dark bg-dark bg-gradient"
  >
    <div class="container">
      <a class="navbar-brand" href="#">MS07</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className=" m-0 p-1">
          <Link to={'/Home'}> <li>Home</li></Link>
          </li>
          <li className="m-0 p-1">
          <Link to={'/About'}> <li>About</li></Link>
          </li>
          <li className="m-0 p-1">
          <Link to={'/Project'}> <li>Project</li></Link>
          </li>
          <li className="m-0 p-1">
          <Link to={'/Contact'}> <li>Contact</li></Link>
          </li>
         
        </ul>
       
      </div>
    </div>
  </nav>
  
  
  </>
  )
}

