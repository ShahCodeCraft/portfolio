import React from "react";
import { SiEpicgames } from "react-icons/si";
import { AiFillBook, AiFillCamera } from "react-icons/ai";
import { BiSolidBookAlt, BiSolidPlaneAlt } from "react-icons/bi";
import { MdSportsBaseball, MdSportsCricket } from "react-icons/md";

const Hobbies = () => {
  return <>

   <div>
    <h3>HOBBIES AND INTERESTS</h3>
    </div>
    <div className="hobbies">
    
    <div className="sm:flex block">
    <span>
        <div className="bg-[#0648EF] rounded-lg w-[100px]">
          <SiEpicgames />
          GAMING
        </div>
        <div className="bg-[#0648EF] rounded-lg w-[100px]">
          {/* <AiFillCamera/> */}
          {/* PHOTOGRAPHY */}

          <AiFillBook/>
          READING

        </div>
      </span>
      <span>
      <div className="bg-[#E91E63] rounded-lg w-[100px]">
          <BiSolidPlaneAlt/>
          TRAVELLING
        </div>
        <div className="bg-[#E91E63] rounded-lg w-[100px]">
          {/* <MdSportsBaseball/> */}
          <MdSportsCricket/>
          SPORTS
        </div>
      </span>

    </div>
   </div>
  
  </>;
};

export default Hobbies;
