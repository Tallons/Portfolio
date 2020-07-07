import React, {useState} from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects/Projects";
import Vindermere from "./Projects/Vindermere";
import EcoVerde from "./Projects/EcoVerde";
import InProgress from "./InProgress/InProgress";
import Pic1 from "../images/2014 Family Picture.jpg"
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
      <div  id="skills"></div>
      <div className="skills-container-border">
      <div className="skills-container-title">
      <h1 className="section-title">SKILLS</h1>
        <Skills />
      </div>
      </div >
      <div  id="portfolio"></div>
      <h1 className="section-title">PORTFOLIO</h1>
        <Projects setToggle = {setToggle}
                         vindermere = {vindermere}
                         ecoVerde = {ecoVerde}/>
      <h1 className="section-title">IN PROGRESS</h1>
      <InProgress />
        <h1 className="section-title"> ABOUT ME</h1>
      <section className="overview-container">
        <section className="about-me-overview-container">
          <div className="images">
            <img className="pic-one"src={Pic1} alt=""  />
            <img className= "pic-two" src={Pic2} alt="Double-Mini" />
          </div>
          <div className="content">

            <p>
              This is me, here I am. Stuff goes here = )
            </p>
            <p> Remember to fill this in</p>
 
              


            </div>
            <Link to="/me"><button> Learn More</button></Link>
        </section>
      </section>
      <div  id="contact"></div>
        <h1 className="section-title"> CONTACT ME</h1>
      <section className="contact-me-container">

        <a> 
          GitHub </a>
        <a> Facebook </a>
        <a> LinkedIn </a>
        <a> USAG</a>
        <a> Email </a>
      </section>

   </main>
   )
}

export default Landing;