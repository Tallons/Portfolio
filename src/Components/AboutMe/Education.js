import React from  "react";
import devMountainLogo from "../../images/DevMountainLogo.png";
import courseraLogo from "../../images/CourseraLogo.jpg";
import udemyLogo from "../../images/UdemyLogo.jpg";
import mitLogo from "../../images/MIT OCW Logo.png";

const Education = (props) => {

   const educationList = [
      {image: devMountainLogo, alt: "DevMountain", name: "DevMountain", cert: "Web Development Certification", date: "Feb - May 2020", description: "Studied Full Stack Development using PERN Stack (PostgreSQL , Express, ReactJS, Node)"},
      {image: courseraLogo, alt: "Coursera", name: "Coursera", cert: "", date: "June 2020 - Current", description: "Studied Machine Learning by Andrew Ng from Stanford"},
      {image: udemyLogo, alt: "Udemy", name: "Udemy", cert: "", date: "Jan 2019 - Current", description: "Studied Java & Python Development"},
      {image: mitLogo, alt: "MIT OpenCourseWare", name: "MIT OpenCourseWare", cert: "", date: "Jan 2019 - Current", description: "Studies Computer Science"}
];

const mappedEducationList = educationList.map(el => {
   return ( <div className="feature">
                     <img src={el.image} alt={el.alt} />
                     <div className="feature-description">
                        <h3>{el.name}</h3>
                        <h3>{el.cert}</h3>
                        <h4>{el.date}</h4>
                        <p>{el.description}
                        </p>
                     </div>
                  </div>)
});

return (
   <section className="Education-container">
      <h2>Education </h2>
      {mappedEducationList}
   </section>
)
}
export default Education;