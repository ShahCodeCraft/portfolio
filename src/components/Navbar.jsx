import React from "react";
import { Link } from "react-router-dom";
import { CiMobile3 } from "react-icons/ci";

const Navbar = ({ show }) => {
  return (
    <>
      <nav className={show ? "nav mobile-nav" : "nav"}>
        <img className="w-[200px] hidden md:flex" src="./src/assets/ShahAlam.png" />
        <div className="phone">
          <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/resume"}>Resume</Link>
          <Link to={"/portfolio"}>Portfolio</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
          <CiMobile3 className="hidden md:flex text-black"  />
          <span className="hidden md:flex text-black" >+917903561228</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
