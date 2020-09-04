import React from "react";
import jsIcon from "../images/skill-icons/JS Logo 2.png";
import javaIcon from "../images/skill-icons/Java Logo.png";
// import tsIcon from "../images/skill-icons/TS Logo.png";
import PythonIcon from "../images/skill-icons/Python.png";
import htmlIcon from "../images/skill-icons/html-5-logo.png";
import reactIcon from "../images/skill-icons/React Icon.png";
import reduxIcon from "../images/skill-icons/Redux Icon.png";
import nodejsIcon from "../images/skill-icons/nodejs-icon.png";
import postgresqlIcon from "../images/skill-icons/Postgresql Logo.png";
import expressIcon from "../images/skill-icons/Express Logo.png";
import sassIcon from "../images/skill-icons/Sass_Logo.png";
import postIcon from "../images/skill-icons/Postman Logo.png";
import chartIcon from "../images/skill-icons/chartjs-logo.svg";
import gitIcon from "../images/skill-icons/Git Icon.png";
import mongoIcon from "../images/skill-icons/MongoDB.png";
import "./Skills.scss"

const Skills = () => {

  const iconList = [
    {image: jsIcon, alt: "JavaScript Icon", description: "JavaScript"},
    {image: javaIcon, alt: "Java Icon", description: "Java"},
    // {image: tsIcon, alt: "TypeScript Icon", description: "TypeScript"},
    {image: PythonIcon, alt: "Python Icon", description: "Python"},
    {image: postgresqlIcon, alt: "PostgreSQL Icon", description: "PostgreSQL"},
    {image:mongoIcon, alt: "MongoDB Icon", description: "MongoDB"},
    {image: htmlIcon, alt: "HTML 5 Icon", description: "HTML 5"},
    {image: nodejsIcon, alt: "Nodejs Icon", description: "Nodejs"},
    {image: reactIcon, alt: "React Icon", description: "React"},
    {image: reduxIcon, alt: "Redux Icon", description: "Redux"},
    {image: expressIcon, alt: "Expressjs Icon", description: "Expressjs"},
    {image: gitIcon, alt: "Git Icon", description: "Git"},
    {image: chartIcon, alt: "Chartjs Icon", description: "Chartjs"},
    {image: sassIcon, alt: "Sass Icon", description: "Sass"},
    {image: postIcon, alt: "Postman Icon", description: "Postman"}
  ]

  const mappedIcons = iconList.map(el => {
    return (  <div className="skills-icon-container">
                      <img className="skill-icon" src={el.image} alt={el.alt} />
                      <h4>{el.description}</h4>
                   </div> )
  })

   return (
      <section className="skills-container">
        {/* <h1 id="skills">SKILLS</h1> */}
        {mappedIcons}
      </section>
   )
}
export default Skills;