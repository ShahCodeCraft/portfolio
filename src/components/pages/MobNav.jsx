import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="sm:flex md:hidden justify-between items-center bg-white text-black py-6 px-5 shadow-lg">
      {/* Logo */}
      <div className="w-[200px]">
        <Link to={"/"}><img src="/ShahAlam.png" /></Link>
      
      </div>
    </nav>
  );
};

export default Navbar;