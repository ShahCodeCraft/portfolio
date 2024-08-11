import React from "react";
import { Link } from "react-router-dom";
import { CiMobile3 } from "react-icons/ci";

const Navbar = ({ show }) => {
  return (
    <>
      <nav className={show ? "nav mobile-nav" : "nav"}>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/resume"}>Resume</Link>
          <Link to={"/portfolio"}>Portfolio</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
        <div className="phone">
          <CiMobile3 />
          <span>+917903561228</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
