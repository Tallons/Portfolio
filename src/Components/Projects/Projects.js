import React from 'react';
import { Link } from "react-router-dom";
import vindermerePic from "../../images/Vindermere - Login.png";
import ecoVerdePic from "../../images/Eco Verde Estimating - login.png";
import notepadPic from "../../images/Notepad - view.png";

const Projects = (props) => {

  const vindermere = "vindermere"

  return (
   <div className="project-container">
     <h1>PORTFOLIO</h1>
     <section className="projects">
       <div className="project">
          <div className="project-info">
            <h1 style={{fontSize: "32px"}}>Vindermere </h1>
            {/* <h3>Full Stack Application<br />
                    Group Project (3 Members)</h3> */}
            <p>"The early morning sun forces your eyes open; your throat is dry and your stomach growls with too many days without a meal. Your coin purse hasn't felt the weight of gold for far too long. this bad luck must end soon."</p>
            <button onClick={() => props.setToggle(vindermere)}>More Info</button>
          </div>
            <div className="image-container">
              <img  src={vindermerePic} alt="Vindermere Picture"/>
              <div className="project-details" onClick={() => props.setToggle(vindermere)}> 
                <h3>Vindermere </h3>
                <p> Full Stack Application<br />
                Group Project (3 Members)</p>
              </div>
            </div>
        </div>
      <div className="project">
          <div className="image-container">
            <img  src={ecoVerdePic} alt="Eco Verde Picture"/>
            <div className="project-details"> 
              <h3>Eco Verde Estimating</h3>
              <p> Full Stack Application</p>
            </div>
          </div>
          <div className="project-info">
            <h1>Eco Verde Estimating </h1>
            {/* <h3>Full Stack Application</h3> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum consequat posuere. Praesent auctor eros in magna facilisis ultricies. Nulla augue metus, euismod non pulvinar sit amet, venenatis non tortor. Quisque pharetra elit et pellentesque placerat. Proin sit amet odio leo. </p>
            <button>More Info</button>
         </div>
      </div>
       <div className="project">
         <div className="project-info">
         <h1>Notepad</h1>
            {/* <h3>Full Stack Application<br />
                    Group Project (3 Members)</h3> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum consequat posuere. Praesent auctor eros in magna facilisis ultricies. Nulla augue metus, euismod non pulvinar sit amet, venenatis non tortor. </p>
            <button>More Info</button>
         </div>
         <div className="image-container">
          <img id="notepad" src={notepadPic} alt="NotePad Picture"/>
          <div className="project-details"> 
          <h3>Notepad </h3>
          <p>No Database</p>
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