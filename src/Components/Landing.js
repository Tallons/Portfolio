import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects/Projects";
import Vindermere from "./Projects/Vindermere";
import EcoVerde from "./Projects/EcoVerde";
import InProgress from "./InProgress/InProgress";
import Pic1 from "../images/2014 Family Picture.jpg"
import Pic2 from "../images/DMT - Worlds 2.jpg";
import emailIcon from "../images/contact-icons/email icon.png";
import resumeIcon from "../images/contact-icons/Resume icon.png";
import FacebookIcon from "../images/contact-icons/Facebook.png";
import GithubIcon from "../images/contact-icons/Github.png";
import GymIcon from "../images/contact-icons/USAG Logo - White.png";
import LinkIcon from "../images/contact-icons/LinkedIn.png";


const Landing = () => {

  const [overlayToggle, setOverlayToggle] = useState(false),
             [toggleType, setToggleType] = useState(),
             [copiedTextToggle, setCopiedTextToggle] = useState(false)

  const vindermere = "vindermere",
            ecoVerde = "ecoVerde"

  useEffect (() => {
    if (copiedTextToggle) {
      console.log("hit")
      setTimeout(function(){ setCopiedTextToggle(false)}, 1500)

    }}, [copiedTextToggle])

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
  },

  copyEmail = () => {
    let copyText = document.getElementById("email-address");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    setCopiedTextToggle(true)

  },

  openResume = ( ) => {
    window.open( "https://docs.google.com/document/d/16CnsZ55_xd1VB3OQsFU8bbyuoukBVdqDq6eitLvkMFk/edit?usp=sharing", "_blank" );
  }

const contactIconList = [
  // {image: EmailIcon, alt: "Email Icon", description: "Noahorr2@yahoo.com"},
  
  {image: LinkIcon, alt: "LinkedIn Icon", site: "https://www.linkedin.com/in/noah-orr-tallons/", description: "Noah Orr"},
  {image: GithubIcon, alt: "GitHub Icon", site: "https://github.com/Tallons", description: "Tallons"},
  {image: GymIcon, alt: "Usa Gymnastics Icon", site: "https://usagym.org/pages/athletes/athleteListDetail.html?id=227805", description: "Noah Orr Gymnastics Profile"},
  {image: FacebookIcon, alt: "Facebook Icon", site: "https://www.facebook.com/Tallons27", description: "Tallons27"},
  
]

const mappedContactIcons = contactIconList.map(el => {
  return (  <div className="contact-icon-container">
                    <a href={el.site} target="_blank">
                      <img className="contact-icon" src={el.image} alt={el.alt} />
                    </a>
                    {/* <h4>{el.description}</h4> */}
                 </div> )
})


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
                                setToggle = {setToggle} 
                                resetToggle = {resetToggle} />) : null }
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
      {/* <h1 className="section-title">IN PROGRESS</h1>
      <InProgress /> */}
        <h1 className="section-title"> ABOUT ME</h1>

        <section className="about-me-overview-container">
          <div className="images">
            <img className="pic-one"src={Pic1} alt=""  />
            <img className= "pic-two" src={Pic2} alt="Double-Mini" />
          </div>
          <div className="content">

            <p>
            After a successful career in Olympic-level gymnastics, I have jumped into the world of programming and am looking for a challenging role that will push me and continue to build my skills. I am not afraid of extensive research or hard work in order to become a key contributor to my team. I am a quick learner and thrive in leadership roles. Recently, I helped build a company from the ground up and loved the ability to wear multiple hats while it grew. I am ready to put my experience and coding skills to work in my next endeavor.
            </p>
            <div className="button-container">
            <Link to="/me">Learn More</Link>
            </div>
          </div>

        </section>
      <div  id="contact"></div>
        <h1 className="section-title"> CONTACT ME</h1>
      <section className="contact-me-container">
              <div className="email-resume-container">
                <div className="email-container" onClick={() => copyEmail()}>
                 <img src={emailIcon}/>
                <input id="email-address" type="text" value="Noahorr2@yahoo.com" /> 
               <h4>{copiedTextToggle ? "Email Address Copied" : "Noahorr2@yahoo.com"}</h4>
                </div>
                <div className="resume-container" onClick={() => openResume()}>
               <img src={resumeIcon}/>
               <h4> View Resume</h4>
                </div>
              </div>
             <div className="contact-icons-container">
              {mappedContactIcons}

             </div>
      </section>

   </main>
   )
}

export default Landing;