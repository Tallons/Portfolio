import React, {useState} from 'react';
import { Link } from "react-router-dom";
import vindermerePic from "../../images/Vindermere Town View.png";
import ecoVerdePic from "../../images/Eco Verde Estimating - login.png";

const Projects = (props) => {

  const [viewToggle, setViewToggle] = useState()

  const vindermere = "vindermere"

  return (
   <div className="project-container">
     <h1>PORTFOLIO</h1>
     <section className="projects">
       <div className="project">
          <div className="project-info"></div>
          <div className="image-container">
          <img  src={vindermerePic} alt="Vindermere Picture"/>
            <div className="project-details" onClick={() => props.setToggle(vindermere)}> 
          <h3>Vindermere Dungeon Crawler</h3>
          <p> Full Stack Application<br />
          Group Project (3 Members)</p>
          </div>
            </div>
      </div>
       <div className="project">
          <img  src={ecoVerdePic} alt="Vindermere Picture"/>
          <div className="project-details"> 
          <h3>Eco Verde Estimating</h3>
          <p> Full Stack Application</p>
          </div>
         <div className="project-info"></div>
      </div>
       <div className="project">
         <div className="project-info"></div>
          <img  src={vindermerePic} alt="Vindermere Picture"/>
          <div className="project-details"> 
          <h3>NotePad </h3>
          <p>No Database</p>
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