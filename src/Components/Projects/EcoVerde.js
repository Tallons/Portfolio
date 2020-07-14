import React, {useState} from "react";
import jsIcon from "../../images/skill-icons/JS Logo 2.png";
import reactIcon from "../../images/skill-icons/React Icon.png";
import reduxIcon from "../../images/skill-icons/Redux Icon.png";
import nodejsIcon from "../../images/skill-icons/nodejs-icon.png";
import postgresqlIcon from "../../images/skill-icons/Postgresql Logo.png";
import expressIcon from "../../images/skill-icons/Express Logo.png";
import sassIcon from "../../images/skill-icons/Sass_Logo.png";
import chartIcon from "../../images/skill-icons/chartjs-logo.svg";
import ecoDash from "../../images/Eco Verde Estimating - Dashboard.jpg";
import ecoOne from "../../images/Eco Verde 1.jpg";
import ecoTwo from "../../images/Eco Verde 2.jpg";
import "./Project.scss"
const EcoVerde = (props) => {

   const [imageToggle, setPictureToggle] = useState(ecoDash)

   const images = [ecoDash, ecoOne, ecoTwo],
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
      return (<div className="skills-icon-container">
      <img className="skill-icon" src={el.image} alt={el.alt} height="50px"/>
      <h4>{el.description} </h4>
   </div> )
   })

   return (
<section className="project-page-container" onClick={(event) => props.stopPropagation(event)}>
   <div className="image-container">

      <div className="image-selector">
         {mappedImages}
      </div> 
      <img className="main-image" src={imageToggle} alt={`${imageToggle}`}/>
   </div>

   <div className="project-page-details">
      {imageToggle === ecoDash ? ( 
      <> 
         <h4> Two Week Personal Project </h4>
         <br></br>
         <h4> Landing Page</h4>
         <p>This is the user's dashboard. Here a user can see an overview of all their bids, along with a basic analysis of the division of materials, labor, and overhead. </p> 
         <br></br>
         <h4>Programming Challenges</h4> 
         <li>Pulling data from database and displaying it using Chartjs </li> 
      </> 
      ) : null }
      {imageToggle === ecoOne ? ( 
         <> 
            <h4> Bid Page</h4>
            <p> A user can select the materials needed for there project (materials type and quantity require blueprints) <br /> 
            Once the product has been selected a task type is needed to determine the production rate (amount of labor hours). This is then calculated and then the user is given the total material cost and labor hours. </p> 
            <br></br>
            <h4>Programming Challenges</h4> 
            <li>Designing a database that could handle multiple bids with multiple materials. Each material type contains several materials each having one or more task types. Each task type has a production rate attached to determine labor hours.</li> 
         </> 
      ) : null }

      {imageToggle === ecoTwo ? (
         <> 
            <h4 className="smaller-title-text"> Bid Page (Continued)</h4>
            <p className="smaller-text">As mentioned on the previous image, material types have multiple products. Thus a controller has five products in the database that can be selected. These dropdowns are affected by the database. </p>
            <div className="spacer"></div>
            <h4 className="smaller-title-text">Future Developments </h4>
            <li className="smaller-text">A payroll system will be implemented (allowing labor rates to be more accurate)</li>
            <li className="smaller-text">Database front-end adjustments (adding, removing, or adjusting products, prices, and production rates)</li>
            <div className="spacer"></div>
            <h4 className="smaller-title-text">Programming Challenges</h4> 
            <li className="smaller-text">Dynamic dropdown menus</li> 
            <li className="smaller-text"> Pulling the correct information based on selections</li> 
            <li className="smaller-text"> Saving the data and updating the page immediately</li> 
         </> 
       ) : null }
         </div>
         <button onClick={() => props.resetToggle()}>Return</button> 
         <div className="skills-container">
         {mappedIcons}

         </div>

</section>
   )
 }
 
       export default EcoVerde;