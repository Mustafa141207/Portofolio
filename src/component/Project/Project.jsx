import React, { useEffect, useRef } from "react";
import projectImg1 from "../Assets/img/Screenshot (18).png";
import projectImg2 from "../Assets/img/de.png";
import projectImg3 from "../Assets/img/cart.png";
import projectImg4 from "../Assets/img/gym.png";
import projectImg5 from "../Assets/img/favourite.png";
import { Link } from "react-router-dom";
import { Slide, Swing } from "react-awesome-reveal";


export default function Project() {
  let project = [
    {
      pname: "Favourite Site",
      Pimg: projectImg5,
      pLink: "https://mustafa141207.github.io/FavouriteSite/",
    },
    {
      pname: "Muscle House",
      Pimg: projectImg4,
      pLink: "https://mustafa141207.github.io/Muscle-house/",
    },
    {
      pname: "We TRAVELLERS",
      Pimg: projectImg1,
      pLink: "https://mustafa141207.github.io/WE-TRAVELLERS/",
    },
    {
      pname: "Devolfio",
      Pimg: projectImg2,
      pLink: "https://mustafa141207.github.io/devalifo/",
    },
    {
      pname: "Fresh Cart",
      Pimg: projectImg3,
      pLink: "https://ecomerce-sooty.vercel.app/login",
    },
  ];

  return (
    <>
      <section id="Project">
        <div className="container">
          <div className="content py-5">
            <h2 className=" text-center my-4">Projects</h2>
            <div className="row g-3">
              {project.map((project) => {
                return (
                 
                    <Slide delay={1} 	 direction="left" className=" col-md-4">
                      <div className="project  bg-dark bg-gradient  border-2  rounded-2 shadow">
                        <Link
                          className=" text-decoration-none"
                          to={project.pLink}
                        >
                          <div className="img">
                            <img
                              src={project.Pimg}
                              className="w-100"
                              height={200}
                              alt=""
                            />
                          </div>
                          <div className="des p-2 ">
                            <h6 className=" my-2">{project.pname}</h6>
                            <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="icons d-flex justify-content-between align-items-center">
                              <div className="icon">
                              <i class="fa-brands fa-github"></i>
                              </div>
                              <div className="icon">
                              <i class="fa-solid fa-link"></i>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </Slide>
                  
                );
              })}

              {/* <div className="col-md-4">
          <div className="project p-2  rounded-2 shadow">
            <div className="img">
              <img src={projectImg2} className='w-100' height={200} alt="" />
            </div>
            <div className="des p-2 ">
              <h6 className=' my-2'>We Travils</h6>
              <a href="https://mustafa141207.github.io/WE-TRAVELLERS/">we</a>
              <a href="https://mustafa141207.github.io/FavouriteSite/">we</a>
              <a href="https://mustafa141207.github.io/devalifo/">we</a>
              <a href="https://mustafa141207.github.io/Muscle-house/">we</a>
              <a href="https://ecomerce-sooty.vercel.app/login">we</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="project p-2  rounded-2 shadow">
            <div className="img">
              <img src={projectImg3} className='w-100' height={200} alt="" />
            </div>
            <div className="des p-2 ">
              <h6 className=' my-2'>We Travils</h6>
              <a href="https://mustafa141207.github.io/WE-TRAVELLERS/">we</a>
              <a href="https://mustafa141207.github.io/FavouriteSite/">we</a>
              <a href="https://mustafa141207.github.io/devalifo/">we</a>
              <a href="https://mustafa141207.github.io/Muscle-house/">we</a>
              <a href="https://ecomerce-sooty.vercel.app/login">we</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="project p-2  rounded-2 shadow">
            <div className="img">
              <img src={projectImg4} className='w-100' height={200} alt="" />
            </div>
            <div className="des p-2 ">
              <h6 className=' my-2'>Muscle House</h6>
              <div className=' d-flex justify-content-center align-items-center'>
              <button className=' btn btn-success  w-50  p-2'>   <a href="https://mustafa141207.github.io/Muscle-house/">
             </a>Visit</button>
              </div>
            </div>
          </div>
        </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
