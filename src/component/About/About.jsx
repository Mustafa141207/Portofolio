import React, { useEffect, useRef } from "react";
import $ from "jquery";
import { Slide, Swing } from "react-awesome-reveal";

export default function About() {
  const Progressbar = ({ bgcolor, progress, height }) => {
    const Parentdiv = {
      height: height,
      width: "100%",
      backgroundColor: "black",
      borderRadius: 40,
    };

    const Childdiv = {
      height: "100%",
      width: `${progress}%`,
      backgroundColor: bgcolor,
      borderRadius: 40,
      textAlign: "right",
    };

    const progresstext = {
      padding: 10,
      color: "red",
      fontWeight: 900,
    };

    return (
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>{`${progress}%`}</span>
        </div>
      </div>
    );
  };

  useEffect(() => {}, []);

  return (
    <>
      <section id="About" className=" py-5">
        <div className="container">
          <Slide   direction="right">
            <div className="content p-5">
              <div className="title text-center">
                <h2>About</h2>
              </div>
              <div className="about py-5">
                <p className=" text-center">
                  Dedicated and detail-oriented Front-End Developer with a
                  passion for creating seamless and intuitive user experiences.
                  I thrive on transforming innovative ideas into responsive,
                  visually appealing websites. Proficient in HTML, CSS, and
                  JavaScript, I am committed to staying abreast of industry
                  trends and continuously refining my skill set. With a keen eye
                  for design and a collaborative mindset, I excel in turning
                  concepts into reality, ensuring the delivery of high-quality,
                  user-centric solutions. Seeking opportunities to contribute my
                  skills and enthusiasm to a dynamic development team
                </p>
              </div>
              <div className="skills">
                <h3 className=" text-center">Skills</h3>
                <div className="row" id="Prog">
                  <div className="col-md-4">
                    <div className="bar">
                      <p className=" m-0 p-1">HTML</p>
                      <Progressbar bgcolor="white" progress="100" height={25} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bar">
                      <p className=" m-0 p-1">CSS</p>
                      <Progressbar bgcolor="white" progress="80" height={25} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bar">
                      <p className=" m-0 p-1">Java Script</p>
                      <Progressbar bgcolor="white" progress="80" height={25} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bar">
                      <p className=" m-0 p-1">Sass</p>
                      <Progressbar bgcolor="white" progress="60" height={25} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bar">
                      <p className=" m-0 p-1">React Js</p>
                      <Progressbar bgcolor="white" progress="60" height={25} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bar">
                      <p>JQuery</p>
                      <Progressbar bgcolor="white" progress="90" height={25} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bar">
                      <p className=" m-0 p-1">Next JS</p>
                      <Progressbar bgcolor="white" progress="60" height={25} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bar">
                      <p className=" m-0 p-1"> TypeScrpt</p>
                      <Progressbar bgcolor="white" progress="75" height={25} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bar">
                      <p className=" m-0 p-1">API</p>
                      <Progressbar bgcolor="white" progress="100" height={25} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </section>
    </>
  );
}
