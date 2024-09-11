// import React from "react";

// const Education = () => {
//   const educations = [
//     {
//       _id: "1",
//       title: "Matriculation ( 2015 )",
//       description:
//         "I completed my matriculation at my hometown, Ramjewar High School Aurai,Muzaffarpur(Bihar), building a strong academic foundation.",
//     },
//     {
//       _id: "2",
//       title: "Intermediate ( 2017 )",
//       description:
//         "I completed my intermediate education in the pre-engineering field, laying the groundwork for my engineering studies. I completed my intermediate at my hometown, Vanijya Inter College Muzaffarpur Bihar "
//     },
//     {
//       _id: "3",
//       title: "Graduation",
//       description:
//         "I have completed my graduation (B.Tech) from Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV),Bhopal in 2021 with a degree in Software Engineering (CSE).",
//     },
//   ];

//   return (
//     <>
//       <div className="education_component" style={{ marginTop: "2rem" }}>
//         <h3>EDUCATION</h3>
//         {educations.map((element) => {
//           return (
//             <div className="education" key={element._id}>
//               <p>{element.title}</p>
//               <p>{element.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Education;

import React from "react";
import experience from "../data/education.json";

const Education = () => {
  return (

    <div className="container mx-auto px-4 py-12" id="experience">
      <h1 className="text-4xl font-bold text-center text-gray-50 mb-8">EDUCATION</h1>
      {experience.map((data) => {
        return (
          <div
            key={data.id}
            className="sm:flex block justify-between items-center sm:bg-white sm:text-gray-950 bg-black text-white my-5 p-8 w-full max-w-4xl rounded-lg border border-gray-50  sm:shadow-2xl shadow-2xl   transform transition duration-1000 hover:scale-105"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="">
              <img
                src={data.imageSrc}
                alt={data.title}
                className="w-full h-24 object-contain sm:hidden block"
              />
              {/* <img
                src={data.simageSrc}
                alt={data.title}
                className="w-24 h-24 object-contain hidden sm:block"
              /> */}
            </div>

            <div className=" ml-3">
              <h2 className="text-2xl font-semibold mb-1">{data.role}</h2>
              <h4 className="text-lg mb-1">
                <span className="sm:text-gray-600 text-gray-400">{data.startDate} {data.endDate}</span>
                <span className="sm:text-gray-600 text-gray-400 ml-5">{data.location}</span>
              </h4>
              {data.experiences.map((exp, index) => (
                <h5 key={index} className="sm:text-gray-900 text-gray-100 mb-1">{exp}</h5>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;

