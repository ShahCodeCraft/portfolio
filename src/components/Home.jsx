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
    url: "https://www.instagram.com/shahcodecraft?igsh=cXV2ZHV4Y3IyZXg4/",
    icon: <AiFillInstagram />,
  },
  {
    url: "https://github.com/ShahCodeCraft",
    icon: <FaGithubSquare />,
  },
  {
    url: "https://x.com/shahcodecraft?t=9_brlXfJcZ_SH2d5k752CA&s=08",
    icon: <RiTwitterXLine />,
  },
  {
    url: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
    icon: <AiFillLinkedin />,
  },
  {
    url: "https://www.facebook.com",
    icon: <AiFillFacebook />,
  },
  {
    url: "https://chat.whatsapp.com/GO0A7wzl1iM3syWymxDCBN", // Add the correct URL
    icon: <FaWhatsapp />,
  },
  {
    url: "https://www.youtube.com/@ShahCodeCraft",
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
        <p>Web Developer <br/>(MERN STACK)</p>
        <div className="btns">
          <Link to="./Shah-Exp-Res.pdf" target="_blank">
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
          href="./Shah-Exp-Res.pdf"
          download="Shah-Resume.pdf"
        >
          [Download CV]
        </a>
      </footer>
    </section>
  );
};

export default Home;
