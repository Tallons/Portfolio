import React, {useState} from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects/Projects";
import Vindermere from "./Projects/Vindermere";
import EcoVerde from "./Projects/EcoVerde";
import Pic1 from "../images/experience.png"
import Pic2 from "../images/pern-stack.png"
import Pic3 from "../images/DMT-worlds2.png";

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
                                      setToggle = {setToggle} />) : null }
            {toggleType === ecoVerde ? (
              <EcoVerde stopPropagation = {stopPropagation}
              setToggle = {setToggle} />) : null }
             </div> ) : null}
      <div className="quote-container">
        <h2 className="intro-quote">
        "Success is the natural consequence of <br />consistently applying basic fundamentals."<br />
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
      <section className="overview-container">
        <section className="feature-left">
          <div className="image">
            <img id="pic-one"src={Pic1} alt="light bulb, cogs, and a tool"  height="100%"/>
          </div>
          <div className="content">
              <h3>EXPERIENCE</h3> 
            <p>
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.
            </p>
          </div>
        </section>
        <section className="feature-right">
            <img src={Pic2} alt="PERN Stack" height="100%"/>
          <div className="content">
            <h3>DEVELOPMENT </h3>
            <p>
              PERN STACK
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus. 
            </p>
          </div>
        </section>
        <section className="feature-left">
              <img id= "pic-three" src={Pic3} alt="Double-Mini" height="150%" width="100%"/>
            <div className="content">
                <h3> GYMNASTICS</h3>
                <p>
                I have being competing in gymnastics for 10 + years.
                I competed at the 2019 World Championships in Tokyo, Japan and brought home a silver
                </p>
            </div>
        </section>
      </section>

   </main>
   )
}

export default Landing;