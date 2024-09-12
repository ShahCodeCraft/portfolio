import React from "react";
import additional from "../data/additional.json";

const Additional = () => {

  return (
    <>
      <div className="container text-gray-800 mx-auto px-4 py-12" id="skills">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-50">ADDITIONAL</h1>
        <div className="grid grid-cols-1 gap-5 p-2">
          {additional.map((data, index) => (
            <div
              key={index}
              className=" w-full h-full sm:h-[150px] flex flex-col items-center border border-white sm:bg-[#0648EF] sm:text-[#FFFFFF]  bg-black text-white shadow-2xl px-2 rounded-lg transform transition duration-1000 hover:scale-105"
              data-aos="flip-left"
              data-aos-duration="1000"
            > 
             {/* <img
                src={data.imageSrc}
                alt={data.title}
                className="w-16 h-16 object-contain mb-4"
              /> */}
              <h3 className="text-xl sm:pt-3 pt-5 font-semibold">{data.title}</h3>
              <p className="text-gray-300 px-1 text-lg sm:pb-0 pb-3">{data.des}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Additional;
