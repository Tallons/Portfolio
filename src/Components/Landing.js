import React, {useState} from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects/Projects";
import Vindermere from "./Projects/Vindermere";
import EcoVerde from "./Projects/EcoVerde";
import InProgress from "./InProgress/InProgress";
import Pic1 from "../images/Family - one.jpg"
import Pic2 from "../images/DMT-worlds2.png";

const Landing = () => {

  const [overlayToggle, setOverlayToggle] = useState(false),
             [toggleType, setToggleType] = useState();

  const vindermere = "vindermere",
            ecoVerde = "ecoVerde"

  const setToggle = (toggleType) => {
    console.log(toggleType)
    setToggleType(toggleType)
    setOverlayToggle(true);
  },

  resetToggle = () => {
    setToggleType();
    setOverlayToggle(false);
  },

  stopPropagation = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

   return(
   <main>
         {overlayToggle ? (
            <div id="one" className="landing-overlay"
                     onClick={()=>
                       resetToggle()}
                    // onMouseOver={() => document.getElementsByTagName("main").style.overflow='hidden'}
                    >
            {toggleType === vindermere ? (
               <Vindermere stopPropagation = {stopPropagation}
                                      setToggle = {setToggle}
                                      resetToggle = {resetToggle} />) : null }
            {toggleType === ecoVerde ? (
              <EcoVerde stopPropagation = {stopPropagation}
              setToggle = {setToggle} />) : null }
             </div> ) : null}
      <div className="quote-container">
        <h2 className="intro-quote">
        "Success is the natural consequence of consistently <br /> applying basic fundamentals."<br />
          - Jim Rohn - 
        </h2>
      </div>
      <div className="skills-container-border">
      <div className="skills-container-title">
        <Skills />
      </div>
      </div>
        <Projects setToggle = {setToggle}
                         vindermere = {vindermere}
                         ecoVerde = {ecoVerde}/>
      <InProgress />
      <section className="overview-container">
        <h1> ABOUT ME</h1>
        <section className="about-me-overview-container">
          <div className="images">
            <img className="pic-one"src={Pic1} alt=""  height="100%"/>
            <img className= "pic-two" src={Pic2} alt="Double-Mini" height="100%" width="100%"/>
          </div>
          <div className="content">
              <h3>ABOUT ME</h3> 
            <p>
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.
            </p>
 
              


            </div>
        </section>
            <Link to="/me"><button> Learn More</button></Link>
      </section>
      <section className="contact-me-container">
        <h1> CONTACT ME</h1>
      </section>

   </main>
   )
}

export default Landing;