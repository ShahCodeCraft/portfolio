// import React from "react";

// const Experience = () => {
//   const experiences = [
//     {
//       _id: "1",
//       title: "CodePrism Technologies",
//       from: "01-Jun-2023",
//       to: "01-Sep-2023",
//       description:
//         "Internship Program as Front-end React developer • Developed and maintained responsive user interfaces (UI) by using React.js and JavaScript • Implemented and optimized frontend features, improving the overall user experience of web applications. • Designed and developed interactive UNSTOP Project : by using React.js ,Javascript and Material UI. Github Link : https://github.com/ShahCodeCraft/unstopclone.github.io",
//     },
//     {
//       _id: "1",
//       title: "NareshIT Technology Hyderabad",
//       from: "01-Jan-2023",
//       to: "31-May-2023",
//       description:
//         "Full-Stack Web Development with React & Angular Certification Completed a comprehensive 6-month UI Web Development program at Naresh IT Institute, Hyderabad, covering key technologies such as HTML, CSS,Javascript, ReactJS, AngularJS MongoDB, and Node.js.",
//     },
//   ];

//   return (
//     <>
//       <div className="experience_component">
//         <h3>EXPERIENCE</h3>
//         <div className="experiences_container">
//           {experiences.map((element) => {
//             return (
//               <div key={element._id} className="experience">
//                 <div className="duration">
//                   {element.from} <span>to</span> {element.to}
//                 </div>
//                 <div className="organization">
//                   <p>{element.title}</p>
//                   <p>{element.description}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Experience;

import React from "react";
import experience from "../data/experience.json";

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-12" id="experience">
      <h1 className="text-4xl font-bold text-center text-gray-50 mb-8">EXPERIENCE</h1>
      {experience.map((data) => {
        return (
          <div
            key={data.id}
            className="sm:flex block justify-between items-center sm:bg-white sm:text-gray-950 bg-black text-white my-5 p-5 w-full max-w-4xl rounded-lg border border-gray-50  sm:shadow-2xl shadow-2xl transform transition duration-1000 hover:scale-105"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="">
              <img
                src={data.imageSrc}
                alt={data.title}
                className="w-full h-24 object-contain sm:hidden block"
              />
            </div>

            <div className=" ml-3">
              <div className="flex justify-between mb-0 sm:-mb-12">
              <h2 className="text-2xl font-semibold mb-1">{data.role}</h2>
              <img
                src={data.simageSrc}
                alt={data.title}
                className="w-24 h-24  object-contain hidden sm:block"
              />
              </div> 

              <h4 className="text-lg mb-1">
                <span className="sm:text-gray-600 text-gray-400">{data.startDate} {data.endDate}</span>
                <span className="sm:text-gray-600 text-gray-400 ml-5">{data.location}</span>
              </h4>
              {data.experiences.map((exp, index) => (
                <h5 key={index} className="sm:text-gray-900 text-gray-100 ">{exp}</h5>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
