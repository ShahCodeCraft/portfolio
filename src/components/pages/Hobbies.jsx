import React from "react";
import { SiEpicgames } from "react-icons/si";
import { AiFillBook, AiFillCamera } from "react-icons/ai";
import { BiSolidBookAlt, BiSolidPlaneAlt } from "react-icons/bi";
import { MdSportsBaseball, MdSportsCricket } from "react-icons/md";

const Hobbies = () => {
  return <>

    <div className="hobbies">
      <span>
        <div>
          <SiEpicgames/>
          GAMING
        </div>
        <div>
          {/* <AiFillCamera/> */}
          {/* PHOTOGRAPHY */}

          <AiFillBook/>
          READING BOOKS

        </div>
      </span>
      <span>
        <div>
          <BiSolidPlaneAlt/>
          TRAVELLING
        </div>
        <div>
          {/* <MdSportsBaseball/> */}
          <MdSportsCricket/>
          SPORTS
        </div>
      </span>
    </div>
  
  </>;
};

export default Hobbies;
