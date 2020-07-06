import React, {useState} from "react";
import jsIcon from "../../images/JS Logo 2.png";
import reactIcon from "../../images/React Icon.png";
import reduxIcon from "../../images/Redux Icon.png";
import nodejsIcon from "../../images/nodejs-icon.png";
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
         {/* <h1> Vindermere</h1> */}
         {imageToggle === townView ?  <> <h4> Welcome to Vindermere Traveler!</h4> <p>The town view was designed as the landing page and is meant to accomadate a hero's interation with the town's people. You will be able to trade and train your skill. There is talk of the local bank opening.</p> <h4>Difficulties</h4> <li>Screen size was a big issue, the words and highlight boxes were distorted due to changes in a computer's screen size. </li> <li></li></> : null }

         {imageToggle === heroSelectView ?  <> <h4> Heroes</h4> <p>This window enables you to select your hero or create a new one. <br /> <strong>(not shown) </strong>After clicking delete, a delete prompt will show inside the same hero dropdown menu and ask if you are sure</p> <h4>Difficulties</h4> <li>Allowing only one hero file to show a dropdown. Once a file is chosen the previous hero file's dropdown closes and opens the selected hero file's dropdown </li> <li>Pulling all the heroes' information from the database and storing it in local storage <strong>(to prevent unnecessary database calls)</strong> </li></> : null }

         {imageToggle === newHeroView ?  <> <h4> New Hero</h4> <p>There are three classes: Warrior, Ranger, and Rogue; each having unique stats. You may also choose your gender </p> <h4>Difficulties</h4> <li>Getting all the images to correspond with the selected class and gender </li> <li>Once created, updating and setting up the hero in the database and local storage </li></> : null }

         {imageToggle === dungeonView ?  <> <h4> Inventory System </h4> <p> The Inventory system is drag and drop. Due to game design, the inventory is saved in three places: <li><strong>State:</strong> Items appear and can be used, but are deleted if game is not saved</li><li><strong>Local Storage:</strong> Kept track of hero's saved inventory</li> <li><strong>Database:</strong> used to get inventory on new game</li></p> <h4>Difficulties</h4> <li> Drag and drop items into hero model and inventory, while keeping track of the item's image and stats</li><li>Getting the state, local storage, and database to update and cooperate with each other.</li></> : null }

      <button>Return</button>
   </div>
         <div className="skills-container">
         {mappedIcons}
         

         </div>
</section>
   )
 }
 
       export default Vindermere;