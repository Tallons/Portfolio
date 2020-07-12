import React from  "react";
import devMountainLogo from "../../images/DevMountainLogo.png";
import courseraLogo from "../../images/CourseraLogo.jpg";
import udemyLogo from "../../images/UdemyLogo.jpg";
import mitLogo from "../../images/MIT OCW Logo.png";

const Education = (props) => {

   const educationList = [
      {image: devMountainLogo, alt: "DevMountain", name: "DevMountain", cert: "Web Development Certification", date: "Feb - May 2020", description: "Studied Full Stack Development using the PERN Stack (PostgreSQL, Express, ReactJS, Node)"},
      {image: courseraLogo, alt: "Coursera", name: "Coursera", cert: "", date: "June 2020 - Current", description: "Studying Machine Learning by Andrew Ng from Stanford"},
      {image: udemyLogo, alt: "Udemy", name: "Udemy", cert: "", date: "Jan 2019 - Current", description: "Studying Java & Python Development", classOne: "Java Programming Masterclass", classTwo: "Python Programming Masterclass", classThree: "Web Development"},
      {image: mitLogo, alt: "MIT OpenCourseWare", name: "MIT OpenCourseWare", cert: "", date: "Jan 2019 - Current", description: "Studying Computer Science", classOne: "6.00 - Introduction to CS and Programming", classTwo: " 6.01 - Introduction to EECS ", classThree: "6.170 - Software Studio", classFour: "6.005 - Software Construction"}
];

const mappedEducationList = educationList.map(el => {
   return ( <div className="feature feature-separator">
                     <img src={el.image} alt={el.alt} />
                     <div className="feature-description">
                        <h2>{el.name}</h2>
                        {el.cert ? <h3>{el.cert}</h3> :null}
                        <h3>{el.date}</h3>
                        <p>{el.description} </p>
                        {el.classOne ? <li>{el.classOne}</li> : null}
                        {el.classTwo ? <li>{el.classTwo}</li> : null}
                        {el.classThree ? <li>{el.classThree}</li> : null}
                        {el.classFour ? <li>{el.classFour}</li> : null}
                     </div>
                  </div>)
});

return (
   <section className="feature-container">
      <h1 className="feature-title">Education </h1>
      <p className="feature-overview"> Training and competing in Gymnastics occupied a majority of my time, along with working a full time job in 2018 and helping my friend grow his business. Due to these circumstances ,I have not been able to pursue my true passion. I have been dreaming for years about the day I would finally be able to work in the tech industry! My education path is not common, but my passion drives me to learn on my own and find resources to further my understanding. I am not afraid of doing hard things and I know that I can learn anything I set my mind to. Below are the lists of courses, books, and Certifications I have completed, studied, and/or currently studying</p>
      {mappedEducationList}
   </section>
)
}
export default Education;