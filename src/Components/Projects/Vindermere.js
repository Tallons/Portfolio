import React, {useState} from "react";
import townView from "../../images/Vindermere Town View.png";
import heroSelectView from "../../images/Vindermere Hero Select.png";
import newHeroView from "../../images/Vindermere New Hero.png";
// import marketView from "../../images/Vindermere Markest View.png";
import dungeonView from "../../images/Vindermere Dungeon.png";
import combatView from "../../images/Vindermere Combat.png";
const Vindermere = (props) => {

   const [pictureToggle, setPictureToggle] = useState(townView)

   const pictures = [townView, heroSelectView, newHeroView,dungeonView, combatView]

   const mappedPic = pictures.map(el => {
      return (<div className="pic">
      <img src={el} alt={`${el}`}  />
      <div className={pictureToggle === el ? "pic-selected" : "pic-select"} onClick={() => setPictureToggle(el)}>
      </div>
   </div>)
   })

   return (
<section className="vindermere-container" onClick={(event) => props.stopPropagation(event)}>

<img src={pictureToggle} />
   <div className="image-selector">
{mappedPic}
      {/* <div className="pic">
         <div className={pictureToggle === townView ? "pic-selected" : "pic-select"}>
         <img src={townView} alt="Game town view"/>
         </div>
      </div>
      <div className="pic">
         <div className={pictureToggle === heroSelectView ? "pic-selected" : "pic-select"}>
            <img src={heroSelectView}/>
         </div>
      </div>
      <div className="pic">
         <div className={pictureToggle === newHeroView ? "pic-selected" : "pic-select"}>
            <img src={newHeroView}/>
         </div>
      </div>
      <img className={pictureToggle === marketView ? "pic-selected" : "pic-select"} src={marketView} />
      </div>
      <div className={pictureToggle === townView ? "pic-selected" : "pic-select"}>
         </div>
      <img className={pictureToggle === dungeonView ? "pic-selected" : "pic-select"} src={dungeonView} />
      <div className={pictureToggle === townView ? "pic-selected" : "pic-select"}>
         </div>
      <img className={pictureToggle === combatView ? "pic-selected" : "pic-select"} src={combatView} />
      <div className={pictureToggle === townView ? "pic-selected" : "pic-select"}>
         </div> */}
   </div> 
</section>
   )
 }
 
       export default Vindermere;