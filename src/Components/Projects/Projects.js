import React from 'react';
import { Link } from "react-router-dom";
import vindermerePic from "../../images/Vindermere - Login.jpg";
import ecoVerdePic from "../../images/Eco Verde Estimating - login.jpg";
import notepadPic from "../../images/Notepad - view.jpg";
import "./Projects.scss";

const Projects = (props) => {
  const {vindermere, ecoVerde} = props

  return (
   <div className="project-container">
     {/* <h1 >PORTFOLIO</h1> */}
     <section className="projects">
       <div className="project">
          <div className="project-info">
            <h1>Vindermere </h1>
            {/* <h3>Full Stack Application<br />
                    Group Project (3 Members)</h3> */}
            <p>"The early morning sun forces your eyes open; your throat is dry and your stomach growls with too many days without a meal. Your coin purse hasn't felt the weight of gold for far too long. This bad luck must end soon."</p>
            <div className="button-container">
            <button onClick={() => props.setToggle(vindermere)}>More Info</button>
            </div>
          </div>
            <div className="image-container">
              <img  src={vindermerePic} alt="Vindermere Picture"/>
              <div className="project-details" onClick={() => props.setToggle(vindermere)}> 
                {/* <h3>Vindermere </h3>
                <p> Full Stack Application<br />
                Group Project (3 Members)</p> */}
              </div>
            </div>
        </div>
      <div className="column-reverse">
          <div className="image-container">
            <img  src={ecoVerdePic} alt="Eco Verde Picture"/>
            <div className="project-details"> 
              {/* <h3>Eco Verde Estimating</h3>
              <p> Full Stack Application</p> 
              <p> Most Technical Award <p>*/}
            </div>
          </div>
          <div className="project-info">
            <h1>Eco Verde Estimating </h1>
            {/* <h3>Full Stack Application</h3> */}
            <p> An estimating software tailor made for Eco Verde Irrigation. This program allows for quick and customizable bids. Including material, payroll, and production rate adjustments. </p>
            <div className="button-container">
            <button onClick={() => props.setToggle(ecoVerde)}>More Info</button>
            </div>
         </div>
      </div>
       <div className="project">
         <div className="project-info">
         <h1>Notepad</h1>
            {/* <h3>Full Stack Application<br />
                    Group Project (3 Members)</h3> */}
            <p>Notepad allows you to create, edit, and delete notes. You may also search through your notes by title, date, or the note's content.
              <br></br>
              <br></br>
              Notepad was my first project as a student. It tested my understanding of a RESTful API and rudimentary functions used in building websites/applications
              <br></br>
              <br></br>
              This project was developed using JavaScript, CSS, and Express </p>
         </div>
         <div className="image-container">
          <img id="notepad" src={notepadPic} alt="NotePad Picture"/>
          <div className="project-details"> 
          {/* <h3>Notepad </h3>
          <p>No Database</p> */}
          </div>
          </div>
      </div>
     </section>
         {/* <Link to="/portfolio" className="button">
           View Portfolio
         </Link> */}
   </div>
  )
}

      export default Projects;