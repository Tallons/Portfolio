import React, {useState} from "react";
import jsIcon from "../../images/JS Logo 2.png";
import reactIcon from "../../images/React Icon.png";
import reduxIcon from "../../images/Redux Icon.png";
import nodejsIcon from "../../images/nodejs-icon.svg";
import postgresqlIcon from "../../images/Postgresql Logo.png";
import expressIcon from "../../images/Express Logo.png";
import sassIcon from "../../images/Sass_Logo.png";
import gsapIcon from "../../images/GSAP Icon.png";
import townView from "../../images/Vindermere Town View2.png";
import heroSelectView from "../../images/Vindermere Hero Select.png";
import newHeroView from "../../images/Vindermere New Hero.png";
// import marketView from "../../images/Vindermere Markest View.png";
import dungeonView from "../../images/Vindermere Dungeon.png";
import combatView from "../../images/Vindermere Combat.png";
import "./Vindermere.scss";

const Vindermere = (props) => {

   const [imageToggle, setPictureToggle] = useState(townView)

   const images = [townView, heroSelectView, newHeroView,dungeonView, combatView],
            icons = [
               {image: jsIcon, alt: "JavaScript Icon", description: "JavaScript"},
               {image: reactIcon, alt: "React Icon", description: "React"},
               {image: reduxIcon, alt: "Redux Icon", description: "Redux"},
               {image: postgresqlIcon, alt: "PostgreSQL Icon", description: "PostgreSQL"},
               {image: expressIcon, alt: "Expressjs Icon", description: "Expressjs"},
               {image: nodejsIcon, alt: "Nodejs Icon", description: "Nodejs"},
               {image: sassIcon, alt: "Sass Icon", description: "Sass"},
               {image: gsapIcon, alt: "GSAP Icon", description: " GreenSock"},
            ]


   const mappedImages = images.map(el => {
      return (<div className="pic">
      <img src={el} alt={`${el}`}  />
      <div className={imageToggle === el ? "pic-selected" : "pic-select"} onClick={() => setPictureToggle(el)}>
      </div>
   </div>)
   })

   const mappedIcons = icons.map(el => {
      return (  <div className="skills-icon-container">
      <img className="skill-icon" src={el.image} alt={el.alt} height="50px"/>
      <h4>{el.description} </h4>
   </div> )
   })

   return (
<section className="vindermere-container" onClick={(event) => props.stopPropagation(event)}>
   <div className="image-container">

      <div className="image-selector">
         {mappedImages}
      </div> 
      <img className="main-image" src={imageToggle} alt={`${imageToggle}`}/>
   </div>
   <div className="Vindermere-details">
         <h1> Vindermere</h1>
         {/* {imageToggle ?  : } */}
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         <div className="skills-container">
         {mappedIcons}

         </div>
   </div>
</section>
   )
 }
 
       export default Vindermere;