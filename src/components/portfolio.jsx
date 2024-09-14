// import React from "react";
// import Navbar from "./Navbar";
// import { TbGridDots } from "react-icons/tb";
// import { Link } from "react-router-dom";

// const Portfolio = ({ show, setShow }) => {
//   const projects = [
//     {
//       _id: "1",
//       title: "Portfolio With Dashboard",
//       category: "MERN STACK (Shopping cart)",
//       thumbnail: "/thumbnail.jpg",
//       projectUrl: "http://portfolio-rho-silk-77.vercel.app",
//     },
//     {
//       _id: "2",
//       title: "Chat-App",
//       category: "MERN STACK",
//       thumbnail: "/job.png",
//       projectUrl: "https://frontend-chat-app-omega.vercel.app",
//     },
//     {
//       _id: "3",
//       title: "Blogging Application",
//       category: "MERN STACK",
//       thumbnail: "/blogging.png",
//       projectUrl: "/",
//     },
//     {
//       _id: "4",
//       title: "Ecommerce Website MERN",
//       category: "MERN STACK",
//       thumbnail: "/hms.png ",
//       projectUrl: "https://fullstack-ecommerce-website-shah.vercel.app",
//     },
//     {
//       _id: "5",
//       title: "Restaurant Reservation",
//       category: "MERN STACK",
//       thumbnail: "/restaurant.png",
//       projectUrl: "/",
//     },
//   ];
//   return (
//     <section className="page portfolioPage">
//       <Navbar show={show} />
//       <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
//       <div className="banner">
//         <div className="header">
//           <img src="/star.png" alt="star" /> <h1>ALL PROJECTS</h1>
//           <img src="/star.png" alt="star" />
//         </div>
//         <div className="latest-projects">
//           <div className="first-column">
//             {projects.slice(0, 3).map((element) => {
//               return (
//                 <div className="card" key={element._id}>
//                   <img src={element.thumbnail} alt="project-thumbnail" />
//                   <div>
//                     <span>
//                       <p>{element.category}</p>
//                       <p>{element.title}</p>
//                     </span>
//                     <span>
//                       <Link to={element.projectUrl} target="_blank">
//                         <img src="/arrow.svg" alt="arrow" />
//                       </Link>
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="second-column">
//             <div className="header">
//               <img src="/star.png" alt="star" />
//               <h1>ALL PROJECTS</h1>
//               <img src="/star.png" alt="star" />
//             </div>
//             <div className="projects">
//               {projects.slice(3, 5).map((element) => {
//                 return (
//                   <div className="card" key={element._id}>
//                     <img src={element.thumbnail} alt="project-thumbnail" />
//                     <div>
//                       <span>
//                         <p>{element.category}</p>
//                         <p>{element.title}</p>
//                       </span>
//                       <span>
//                         <Link to={element.projectUrl} target="_blank">
//                           <img src="/arrow.svg" alt="arrow" />
//                         </Link>
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//         <div className="remaining-projects">
//           {projects.slice(5).map((element) => {
//             return (
//               <div className="card" key={element._id}>
//                 <img src={element.thumbnail} alt="project-thumbnail" />
//                 <div>
//                   <span>
//                     <p>{element.category}</p>
//                     <p>{element.title}</p>
//                   </span>
//                   <span>
//                     <Link to={element.projectUrl} target="_blank">
//                       <img src="/arrow.svg" alt="arrow" />
//                     </Link>
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;


import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import project from "./data/portfolio.json";

const Portfolio = ({ show, setShow }) => {
  return (
    <>
    <section className="page contactPage">
      <Navbar show={show} />
      <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
      <div className="mx-auto bg-gray-700 w-full h-full py-6">
        <h1 className="text-center text-4xl font-bold mb-5 text-gray-100 pt-5">LIVE PROJECTS</h1>
        <div className="flex flex-wrap justify-center items-center">
          {project.map((data) => (
            <div
              key={data.id}
              className="my-4 mx-4 sm:w-1/2 md:w-1/3 lg:w-1/4 transform transition duration-1000 hover:scale-105"
            >
              <div
                className="bg-gray-800 text-white rounded-lg overflow-hidden"
                style={{
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
               
              >
                <div className="flex justify-center items-center p-3">
                  <img
                    src={data.imageSrc}
                    alt={data.title}
                    style={{
                      height:"250px",
                      border: "2px solid yellow",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div className="text-center p-4 flex flex-col justify-between h-full">
                  <div className="mb-4">
                    <h5 className="text-3xl font-semibold truncate">
                      {data.title}
                    </h5>
                    <p className="my-2 text-sm">{data.description}</p>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Link
                      to={data.liveproject} target="_blank"
                      className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                      Live Project
                    </Link>
                    <Link to={data.source} target="_blank"
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200"
                    >
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default Portfolio;
