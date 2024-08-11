import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaGithubSquare, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

// Data configuration
const socialLinks = [
  {
    url: "https://www.instagram.com/z_4_zeeshuuu/",
    icon: <AiFillInstagram />,
  },
  {
    url: "https://www.facebook.com/people/Muhammad-Zeeshan-Khan/pfbid0r2fy5gefN1sTvwFSJYMBHkbij6eXHwzZMKDYemTYVu6Y7H2A4vsuDukaPaYRAjozl/",
    icon: <AiFillFacebook />,
  },
  {
    url: "https://www.linkedin.com/in/muhammad-zeeshan-khan-dev/",
    icon: <AiFillLinkedin />,
  },
  {
    url: "https://github.com/Zeeshu911",
    icon: <RiTwitterXLine />,
  },
  {
    url: "https://github.com/Zeeshu911",
    icon: <FaGithubSquare />,
  },
  {
    url: "", // Add the correct URL
    icon: <FaWhatsapp />,
  },
  {
    url: "https://www.youtube.com/@CodeWithZeeshu",
    icon: <FaYoutube />,
  },
];

const Home = ({ show, setShow }) => {
  return (
    <section className="page homePage">
      <Navbar show={show} />
      <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
      <div className="banner">
        <h1>SHAHNAWAZ</h1>
        <h1>ALAM</h1>
        <p>Web Developer <pre>(MERN STACK)</pre></p>
        <div className="btns">
          <Link to="./Shah-Fre-Res.pdf" target="_blank">
            Resume
          </Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </div>
      <footer>
        <ul>
          {socialLinks.map((link, index) => (
            <Link key={index} to={link.url} target="_blank">
              {link.icon}
            </Link>
          ))}
        </ul>
        <a
          className="download-btn"
          href="./Shah-Fre-Res.pdf"
          download="Shah-Resume.pdf"
        >
          [Download CV]
        </a>
      </footer>
    </section>
  );
};

export default Home;
