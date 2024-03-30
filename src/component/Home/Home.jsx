import React from 'react'
import { Fade } from "react-awesome-reveal";
import { Slide,Swing } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import About from '../About/About';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';


export default function Home() {
  return (
<>
<>
       <section id='Home' className=' d-flex justify-content-center align-items-center'>
      <div className="container py-5 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12">
          <Slide direction='up' >
          <div className="content p-3">

<h1 className=' m-0 my-2 p-0'>Mustafa Saad Elsayed</h1>
<p className=' fw-bold m-0 p-0'>Front End Devolper </p>
<div className="icons d-flex my-2">
  <div className="icon">
 <Link to={'https://www.facebook.com/profile.php?id=100006248687938&mibextid=ZbWKwL'}>
 <i class="fa-brands fa-facebook"></i>
 </Link>
  </div>
  <div className="icon">
 <Link to={'https://www.linkedin.com/in/mustafa-saad-782215292/'}>
 <i class="fa-brands fa-linkedin"></i>
 </Link>
  </div>
  <div className="icon">
 <Link to={'https://github.com/Mustafa141207'}>
 <i class="fa-brands fa-github"></i>
 </Link>
  </div>
  <div className="icon">
 <Link to={''}>
 <i class="fa-brands fa-instagram"></i>
 </Link>
  </div>
  <div className="icon">
 <Link to={'https://wa.me/qr/I7ELQ2VM4TXWG1'}>
 <i class="fa-brands fa-whatsapp"></i>
 </Link>
  </div>


</div>




</div>

</Slide>
         
          </div>
      
        </div>

      </div>
    </section>
    <About/>
    <Project/>
    <Contact/>
 

    
    </>

</>
      
    
  )
}
