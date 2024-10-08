import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import Skills from "./pages/Skills";
import Languages from "./pages/Languages";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Hobbies from "./pages/Hobbies";
import Additional from "./pages/Additional";

const Resume = ({ show, setShow }) => {
  return (
    <>
      <section className="page resumePage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
        <div className="banner">
          <div className="first-column">
            <Skills />
            <Education />
         
          </div>
          <div className="second-column">
            <Experience />
            <Additional/>
            <Hobbies/>
          </div>
            {/* <Languages /> */}
          {/* <div className="third-column">
            <div>
              <h3>WHAT CAN I DO</h3>
              <p>
                Web Development - MERN Stack Development{" "}
                <span>Website Optimization - Problem Solving</span>
                <span>Code Debugging - Project Management</span>
              </p>
            </div>
            <div>
              <h3>ADDITIONAL EXPERTIES</h3>
              <p>
                Database Management - Responsive Design{" "}
                <span>Version Control - API Integration</span>
              </p>
            </div>
            <div className="personal-skills">
              <h3>PERSONAL SKILLS</h3>
              <p>Creativity - Team Work - Organization</p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Resume;
