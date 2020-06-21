import React from "react";
import jsIcon from "../images/JS Logo 2.png";
import tsIcon from "../images/TS Logo.png";
import javaIcon from "../images/Java Logo.png";
import htmlIcon from "../images/html-5-logo.png";
import reactIcon from "../images/React Icon.png";
import reduxIcon from "../images/Redux Icon.png";
import nodejsIcon from "../images/nodejs-icon.svg";
import postgresqlIcon from "../images/Postgresql Logo.png";
import expressIcon from "../images/Express Logo.png";
import sassIcon from "../images/Sass_Logo.png";
import postIcon from "../images/Postman Logo.png";
import chartIcon from "../images/chartjs-logo.svg";
import gitIcon from "../images/Git Icon.png";
import "./Skills.scss"

const Skills = () => {

  const iconList = [
    {image: jsIcon, alt: "JavaScript Icon", description: "JavaScript"},
    {image: tsIcon, alt: "TypeScript Icon", description: "TypeScript"},
    {image: javaIcon, alt: "Java Icon", description: "Java"},
    {image: postgresqlIcon, alt: "PostgreSQL Icon", description: "PostgreSQL"},
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
        <h1 id="skills">SKILLS</h1>
        {mappedIcons}
      </section>
   )
}
export default Skills;