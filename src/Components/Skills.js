import React from "react";
import jsIcon from "../images/JS Logo 2.png";
import tsIcon from "../images/TS Logo.png";
import javaIcon from "../images/Java Logo.png";
import htmlIcon from "../images/html-5-logo.png";
import reactIcon from "../images/React Icon.png";
import nodejsIcon from "../images/nodejs-icon.svg";
import reduxIcon from "../images/Redux Icon.png";
import postgresqlIcon from "../images/Postgresql Logo.png";
import expressIcon from "../images/Express Logo.png";
import sassIcon from "../images/Sass_Logo.png";
import postIcon from "../images/Postman Logo.png";
import chartIcon from "../images/chartjs-logo.svg";

const Skills = () => {
   return (
      <section className="skills-container">
         <div className="skills-icon-container">
      <img className="skill-icon" src={jsIcon} alt="JavaScript Icon" />
      <h4>JavaScript</h4>
    </div>
    <div className="skills-icon-container">
      <img className="skill-icon" src={tsIcon} alt="TypeScript Icon" />
      <h4>TypeScript</h4>
    </div>
    <div className="skills-icon-container">
      <img className="skill-icon" src={javaIcon} alt="Java Icon" />
      <h4>Java</h4>
    </div>
   <div className="skills-icon-container">
     <img className="skill-icon" src={postgresqlIcon} alt="PostgreSQL Icon" />
     <h4>PostgreSQL</h4>
     </div>
   <div className="skills-icon-container">
     <img className="skill-icon" src={htmlIcon} alt="HTML 5 Icon" />
     <h4>HTML 5</h4>
     </div>
    <div className="skills-icon-container">
      <img className="skill-icon" src={nodejsIcon} alt="Nodejs Icon" />
      <h4>Nodejs</h4>
    </div>
   <div className="skills-icon-container">
     <img className="skill-icon" src={reactIcon} alt="React Icon" />
     <h4>React</h4>
    </div>
   <div className="skills-icon-container">
     <img className="skill-icon" src={reduxIcon} alt="Redux Icon" />
     <h4>Redux</h4>
    </div>
    <div className="skills-icon-container">
      <img className="skill-icon" src={expressIcon} alt="Express Icon" />
      <h4>Express</h4>
    </div>
    <div className="skills-icon-container">
      <img className="skill-icon" src={chartIcon} alt="ChartJs Icon" />
      <h4>Chartjs</h4>
    </div>
   <div className="skills-icon-container">
     <img className="skill-icon" src={sassIcon} alt="Sass Icon" />
     <h4>Sass</h4>
    </div>
   <div className="skills-icon-container">
      <img className="skill-icon" src={postIcon} alt="Postman Icon" />
      <h4>Postman</h4>
    </div>
      </section>
   )
}
export default Skills;