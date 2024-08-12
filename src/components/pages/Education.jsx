import React from "react";

const Education = () => {
  const educations = [
    {
      _id: "1",
      title: "Matriculation ( 2015 )",
      description:
        "I completed my matriculation at my hometown, Ramjewar High School Aurai,Muzaffarpur(Bihar), building a strong academic foundation.",
    },
    {
      _id: "2",
      title: "Intermediate ( 2017 )",
      description:
        "I completed my intermediate education in the pre-engineering field, laying the groundwork for my engineering studies. I completed my intermediate at my hometown, Vanijya Inter College Muzaffarpur Bihar "
    },
    {
      _id: "3",
      title: "Graduation",
      description:
        "I have completed my graduation (B.Tech) from Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV),Bhopal in 2021 with a degree in Software Engineering (CSE).",
    },
  ];

  return (
    <>
      <div className="education_component" style={{ marginTop: "2rem" }}>
        <h3>EDUCATION</h3>
        {educations.map((element) => {
          return (
            <div className="education" key={element._id}>
              <p>{element.title}</p>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
