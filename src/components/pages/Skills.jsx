import React from "react";
import skills from "../data/skills.json";

const Skills = () => {

  return (
    <>
      <div className="container text-gray-800 mx-auto px-4 py-12" id="skills">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-50">SKILLS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-white sm:bg-white bg-black sm:text-black text-white shadow-2xl p-6 rounded-lg transform transition duration-1000 hover:scale-105"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
             <img
                src={data.imageSrc}
                alt={data.title}
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold">{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
