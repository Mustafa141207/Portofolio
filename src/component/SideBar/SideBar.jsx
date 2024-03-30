import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default function SideBar() {
  function handle(){
    if(window.innerWidth<700){
      $('#sideBar').fadeOut(1000);    
  }else{
    $('#sideBar').fadeIn(1000); 
  }
  }

  useEffect(()=>{
   let conWid= $('#sideBar .container').innerWidth();
   console.log(conWid);
    $('.box22').click(()=>{
      console.log('click')
      $('#sideBar .container').animate({left:-200+'px'})
    })

  },[])
  return (
  <>
  <aside id='sideBar' className='   '>
  <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">  <i class="fa-solid fa-bars"></i></button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">MS</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body container SideBody">
  <ul id='sideBarList'>

        
        </ul>
  </div>
</div>
  </aside>
  
  
  </>
      
    
  )
}
