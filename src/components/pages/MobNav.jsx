import React from "react";

const Navbar = () => {
  return (
    <nav className="sm:flex md:hidden justify-between items-center bg-white text-black py-6 px-5 shadow-lg">
      {/* Logo */}
      <div className="w-[200px]"><img src="/ShahAlam.png" /></div>
    </nav>
  );
};

export default Navbar;