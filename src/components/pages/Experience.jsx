import React from "react";

const Experience = () => {
  const experiences = [
    {
      _id: "1",
      title: "CodePrism Technologies",
      from: "01-Jun-2023",
      to: "01-Sep-2023",
      description:
        "Internship Program as Front-end React developer • Developed and maintained responsive user interfaces (UI) by using React.js and JavaScript • Implemented and optimized frontend features, improving the overall user experience of web applications. • Designed and developed interactive UNSTOP Project : by using React.js ,Javascript and Material UI. Github Link : https://github.com/ShahCodeCraft/unstopclone.github.io",
    },
    {
      _id: "1",
      title: "NareshIT Technology Hyderabad",
      from: "01-Jan-2023",
      to: "31-May-2023",
      description:
        "Full-Stack Web Development with React & Angular Certification Completed a comprehensive 6-month UI Web Development program at Naresh IT Institute, Hyderabad, covering key technologies such as HTML, CSS,Javascript, ReactJS, AngularJS MongoDB, and Node.js.",
    },
  ];

  return (
    <>
      <div className="experience_component">
        <h3>EXPERIENCE</h3>
        <div className="experiences_container">
          {experiences.map((element) => {
            return (
              <div key={element._id} className="experience">
                <div className="duration">
                  {element.from} <span>to</span> {element.to}
                </div>
                <div className="organization">
                  <p>{element.title}</p>
                  <p>{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Experience;
