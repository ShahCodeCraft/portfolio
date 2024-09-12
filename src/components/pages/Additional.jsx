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
              className=" w-full h-full flex flex-col items-center border border-white bg-[#0648EF] text-[#FFFFFF] shadow-2xl sm:px-2 p-8 rounded-full sm:rounded-lg transform transition duration-1000 hover:scale-105"
              data-aos="flip-left"
              data-aos-duration="1000"
            > 
             {/* <img
                src={data.imageSrc}
                alt={data.title}
                className="w-16 h-16 object-contain mb-4"
              /> */}
              <h3 className="text-xl font-semibold mt-2 sm:-mt-5">{data.title}</h3>
              <p className="ml-5 sm:-ml-0 text-gray-300">{data.des}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Additional;
