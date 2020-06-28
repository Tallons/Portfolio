import React, {useState} from  "react";
import Experience from  "./Experience";
import Education from "./Education";
import pic from "../../images/DevMountain - Hexagon.png";
import pic1 from "../../images/Family - Hexagon.png";
import pic2 from "../../images/Foot Injury - Hexagon.png";
import "./AboutMe.scss";

const AboutMe = (props) => {
   const [aboutMeToggle, setAboutMeToggle] = useState("me")

   const me = "me",
             education = "education",
             experience = "experience"


   console.log(props)

return (
   <div className="about-me-page">
      {/* <nav>
         <h3 onClick={() => {setAboutMe(true), setExperience(false)}}> About Me </h3>
         <h3 onClick={() => {setAboutMe(false), setExperience(true)}}> Experience </h3>

         <h3> Gymnastics </h3>
      </nav> */}
      <section className="hexagon-container">
         <div className="hexagon-row-one">
            <img className="hexagon-two" src={pic1} onClick={()=> setAboutMeToggle(education)}/>
            <img className="hexagon-four" src={pic2} onClick={()=> setAboutMeToggle(education)}/>
            <img className="hexagon" src={pic} onClick={()=> setAboutMeToggle(education)}/>
            {/* <div className="hexagon hexagon-six"  ></div> */}
         </div>
         <div className="hexagon-row-two">
            <img className="hexagon" src={pic} onClick={()=> setAboutMeToggle(me)} />
            <img className="hexagon" src={pic} onClick={()=> setAboutMeToggle(me)} />
            <img className="hexagon" src={pic} onClick={()=> setAboutMeToggle(me)} />
            <img className="hexagon" src={pic} onClick={()=> setAboutMeToggle(experience)} />
            </div>
         <div className="hexagon-row-one">
            <img className="test" src={pic1}/>
            <img className="test" src={pic2}/>
         </div>
      </section>

      <section className="about-me-container">
         { aboutMeToggle === me ? (
            <section className="feature">
            <img />
            <div className="feature-description">
               <h1>Lorem Ipsum </h1>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
         </section>
          ) : null}


         { aboutMeToggle === education ? (
            <Education />) : null}

            { aboutMeToggle === experience ? (
            <Experience />) : null}

         
      </section>
   </div>
)
}
export default AboutMe;