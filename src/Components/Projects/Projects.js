import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Vindermere from "./Vindermere";
import vindermerePic from "../../images/Vindermere Town View.png";
import ecoVerdePic from "../../images/Eco Verde Estimating - Dashboard.png";

const Projects = () => {

  const [viewToggle, setViewToggle] = useState()

  const vindermere = "Vindermere"

  return (
   <div className="project-container">
     <h1>PORTFOLIO</h1>
     <section className="projects">
       <div className="project">
          <img  src={vindermerePic} alt="Vindermere Picture"onClick={() => setViewToggle(Vindermere)}/>
          {viewToggle === vindermere ? (
          <Vindermere />) : null }
          <h3>Vindermere Dungeon Crawler</h3>
          <p> Full Stack Application<br />
          Group Project (3 Members)</p>
      </div>
       <div className="project">
          <img  src={ecoVerdePic} alt="Vindermere Picture"/>
          <h3>Eco Verde Estimating</h3>
          <p> Full Stack Application</p>
      </div>
       <div className="project">
          <img  src={vindermerePic} alt="Vindermere Picture"/>
          <h3>NotePad </h3>
          <p>No Database</p>
      </div>
     </section>
         {/* <Link to="/portfolio" className="button">
           View Portfolio
         </Link> */}
   </div>
  )
}

      export default Projects;