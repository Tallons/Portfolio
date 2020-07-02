import React, {useState} from "react";
import jsIcon from "../../images/JS Logo 2.png";
import reactIcon from "../../images/React Icon.png";
import reduxIcon from "../../images/Redux Icon.png";
import nodejsIcon from "../../images/nodejs-icon.png";
import postgresqlIcon from "../../images/Postgresql Logo.png";
import expressIcon from "../../images/Express Logo.png";
import sassIcon from "../../images/Sass_Logo.png";
import ecoDash from "../../images/Eco Verde Estimating - Dashboard.png";
import chartIcon from "../../images/chartjs-logo.svg";
import "./EcoVerde.scss"
const EcoVerde = (props) => {

   const [imageToggle, setPictureToggle] = useState(ecoDash)

   const images = [ecoDash],
            icons = [
               {image: jsIcon, alt: "JavaScript Icon", description: "JavaScript"},
               {image: reactIcon, alt: "React Icon", description: "React"},
               {image: postgresqlIcon, alt: "PostgreSQL Icon", description: "PostgreSQL"},
               {image: expressIcon, alt: "Expressjs Icon", description: "Expressjs"},
               {image: nodejsIcon, alt: "Nodejs Icon", description: "Nodejs"},
               {image: sassIcon, alt: "Sass Icon", description: "Sass"},
               {image: chartIcon, alt: "Chartjs Icon", description: "Chartjs"},
               {image: reduxIcon, alt: "Redux Icon", description: "Redux"},
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
<section className="eco-container" onClick={(event) => props.stopPropagation(event)}>
   <div className="image-container">

      <div className="image-selector">
         {mappedImages}
      </div> 
      <img className="main-image" src={imageToggle} alt={`${imageToggle}`}/>
   </div>
   <div className="eco-details">
         <h1> EcoVerde</h1>
         {/* {imageToggle ?  : } */}
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         <div className="skills-container">
         {mappedIcons}

         </div>

   </div>
</section>
   )
 }
 
       export default EcoVerde;