import React, {useState, useEffect} from  "react";
import { Link } from "react-router-dom";
import Family from "./Family";
import Gymnastics from "./Gymnastics";
import Injury from "./Injury";
import Worlds from "./Worlds";
import Experience from  "./Experience";
import Education from "./Education";
import pic from "../../images/DevMountain - Hexagon.png";
import hoverPic from "../../images/DevMountain - Hexagon 1.png";
import pic1 from "../../images/Family - Hexagon.png";
import hoverPic1 from "../../images/Family - Hexagon 1.png"
import pic2 from "../../images/Foot Injury - Hexagon.png";
import hoverPic2 from "../../images/Foot Injury - Hexagon 1.png";
import pic3 from "../../images/Experience - Hexagon.png";
import hoverPic3 from "../../images/Experience - Hexagon 1.png";
import pic4 from "../../images/Mission Farewell - Hexagon.png";
import hoverPic4 from "../../images/Mission Farewell - Hexagon 1.png";
import pic5 from "../../images/Gymnastics - Hexagon.png";
import hoverPic5 from "../../images/Gymnastics - Hexagon 1.png";
import pic6 from "../../images/Worlds - Hexagon 2.png";
// import hoverPic6 from "../../images/Gymnastics - Hexagon 1.png";

import "./AboutMe.scss";
import "./Hexagons.scss";


const AboutMe = (props) => {
   const [aboutMeToggle, setAboutMeToggle] = useState("me"),
            [overlay, setOverlay] = useState(false),
            [selected, setSelected] = useState(false)

   const me = "me",
             family = "family",
             gymnastics = "gymnastics",
             injury = "injury",
             worlds = "worlds",
             education = "education",
             experience = "experience"

   useEffect (() => {
     
   },[])

   console.log(props)
   console.log(aboutMeToggle)

return (
   <div className="about-me-page">
      <section className="hexagon-container">
         <div className="hexagon-row-one">
         { aboutMeToggle !== family ? (
            <img className="hexagon-two" src={pic1}
                     onClick={(e)=> {
                        setAboutMeToggle(family)
                        e.currentTarget.src=pic1 }}
                     onMouseOver={e => e.currentTarget.src=hoverPic1} 
                     onMouseOut={e => e.currentTarget.src=pic1} />
         ) : <img className="hexagon-selected" src={pic1} /> }
         { aboutMeToggle !== injury ? (
            <img className="hexagon-four" src={pic2} 
                     onClick={(e)=> {
                        setAboutMeToggle(injury)
                        e.currentTarget.src=pic2 }}
                     onMouseOver={e => e.currentTarget.src=hoverPic2} 
                     onMouseOut={e => e.currentTarget.src=pic2}/>
         ) : <img className="hexagon-selected" src={pic2} /> }
         { aboutMeToggle !== education ? (
            <img className="hexagon-six" src={pic} 
                     onClick={(e)=> {
                        setAboutMeToggle(education)
                        e.currentTarget.src=pic }}
                     onMouseOver={e => e.currentTarget.src=hoverPic} 
                     onMouseOut={e => e.currentTarget.src=pic} />
          ) : <img className="hexagon-selected" src={pic} /> }
            {/* <div className="hexagon hexagon-six"  ></div> */}
         </div>
         <div className="hexagon-row-two">
         { aboutMeToggle !== me ? (
            <img className="hexagon-one" src={pic4} 
                     onClick={(e)=> {
                           setAboutMeToggle(me)
                           e.currentTarget.src=pic4 }}
                     onMouseOver={e => e.currentTarget.src=hoverPic4} 
                     onMouseOut={e => e.currentTarget.src=pic4} />
         ) : <img className="hexagon-selected" src={pic4} /> }
         { aboutMeToggle !== gymnastics ? (
            <img className="hexagon-three" src={pic5} 
                     onClick={(e)=> {
                        setAboutMeToggle(gymnastics)
                        e.currentTarget.src=pic5 }}
                     onMouseOver={e => e.currentTarget.src=hoverPic5} 
                     onMouseOut={e => e.currentTarget.src=pic5}/>
         ) : <img className="hexagon-selected" src={pic5} /> }
            <img className="hexagon-five" src={pic6} onClick={()=> setAboutMeToggle(worlds)} />
         { aboutMeToggle !== experience ? (
            <img className="hexagon-seven" src={pic3} 
                     onClick={(e)=> {
                        setAboutMeToggle(experience)
                        e.currentTarget.src=pic3 }}
                     onMouseOver={e => e.currentTarget.src=hoverPic3} 
                     onMouseOut={e => e.currentTarget.src=pic3} />
         ) :  <img className="hexagon-selected" src={pic3} /> }
            </div>
         {/* <div className="hexagon-row-one">
            <img className="test" src={pic1}/>
            <img className="test" src={pic2}/>
         </div> */}
      </section>
         <Link to="/" className="return-link"> Back to Portfolio </Link>
      <section className="about-me-container">
         { aboutMeToggle === me ? (
            <section className="feature">
            {/* <img /> */}
            <div className="feature-description">
               <h1>A Closer Look </h1>
               <li>Favorite Movie Princess Bride </li>
               <li>LOVE WATERMELON</li>
               <li> At the age of two I was an accomplished escape artist</li>
               <li> I have been to almost 40 states and 7 Countries </li>
               <li>Learning Japanese</li>
               <li>Not a big bug fan especially scorpions </li>
               <li>Favorite band: Bee Gees</li>
               <li>I am a chocolate milk conoussier (ask me about my top five)</li>
               <li></li>
                     
            </div>
         </section>
          ) : null}


         {aboutMeToggle === family ? (
         <Family />) : null}

         {aboutMeToggle === gymnastics ? (
         <Gymnastics />) : null}

         { aboutMeToggle === injury ? (
         <Injury />) : null}

         {aboutMeToggle === worlds ? (
         <Worlds />) : null}

         {aboutMeToggle === education ? (
            <Education />) : null}

          {aboutMeToggle === experience ? (
            <Experience />) : null}
            

         
      </section>
   </div>
)
}
export default AboutMe;