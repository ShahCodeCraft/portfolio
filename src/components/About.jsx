import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
const About = ({ show, setShow }) => {
  return (
    <>
      <section className="page aboutPage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />

        <div className="banner">
          <div className="content sm:mt-0 mt-60">
          {/* <img src="https://www.ie.edu/insights/wp-content/uploads/2021/07/shutterstock_1913016523.jpg" alt='error' className="object-contain lg:hidden" /> */}
            <div>
              <h1>ABOUT</h1>
              <h3>ershahalam12@gmail.com</h3>
              <br />
            </div>
            <div>
              I am Shahnawaz Alam. I have completed B.Tech in Computer Science
              and Engineering from IES Institute of Technology, Bhopal.{" "}
              <p>
                Recently, I completed a 9-month internship where I specialized
                in UI Full Stack Web Development (MERN Stack). My expertise
                spans across HTML, CSS, Tailwind CSS, JavaScript, React.js,
                MongoDB, Node.js, and Express.js. During this internship, I
                successfully developed end-to-end applications, managing both
                front-end and back-end tasks efficiently. My hands-on experience
                includes working on various projects, where I applied my
                technical skills to create dynamic and responsive web
                applications.
<br/><br/>
<blockquote>At CodePrism Technologies apointed as a Intern
Front-end React developer<br/>
• Developed and maintained responsive user interfaces (UI) by using React.js and JavaScript<br/>
• Implemented and optimized frontend features, improving the overall user experience of web applications.<br/>
• Designed and developed interactive "UNSTOP Project" by using React.js ,Javascript and Material UI</blockquote>
              </p>
            </div>
            <div>
              <p>Muzaffarpur, Bihar (INDIA)</p>
            </div>
          </div>
          <div className="profileImage">
            <img src="/shah_pic.png" alt="profilImage" className="object-cover hidden lg:block" />
          </div>
 
                    <div className="absolute top-0 items-center justify-center sm:hidden">
                        <img className="w-full h-full" src="/shah_pic.png" alt="profile" />
                    </div>
             
        </div>
      </section>
    </>
  );
};

export default About;


