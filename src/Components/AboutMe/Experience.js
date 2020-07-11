import React from  "react";

import ecoVerdeLogo from "../../images/Eco Verde Logo.jpg";
import bfLogo from "../../images/B&F Logo.png";

const Experience = (props) => {

   console.log(props)
 



   const workList = [
      {image: ecoVerdeLogo,  alt: "Eco Verde Irrigation", name: "Eco Verde Irrigation", date: " June 2018 - Current", description: "-	Built estimation software tool to automate processes and cut costs -	Supervised all company work including bookkeeping, labor, pricing, and more -	Established the company’s estimation process -	Restructured business: $100,000+ in sales (800% increase) -	Designed monthly analytic reports for customers using Excel" },
      {image: bfLogo,  alt: "B & F Contracting", name: "B & F Contracting", date: " June 2017 - Feb 2019", description: "", highlightOne: "-	Remodeled the entire payroll system as it transitioned from paper to electronic",highlightTwo: "-	Creation of customized Payroll Tools using Excel", highlightThree: "-	Conducted in-house weekly payroll: 200+ employees weekly ($250,000+)" }

   ]
   ;
   const mappedWorkList = workList.map(el => {
      return ( <div className="feature-container">
                        <div className="feature-column-title-box">
                           <img src={el.image} alt={el.alt} />
                           <div className="feature-column-title">
                              <h3>{el.name}</h3> 
                              <h4>{el.date}</h4>
                           </div>
                              </div>
                        <div className="feature-description">
                           
                           {/* <p>{el.description}</p> */}
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
                           <h4>Accomplishments</h4>
                           <p>{el.highlightOne}</p>
                           <p>{el.highlightTwo}</p>
                           <p>{el.highlightThree}</p>
                        </div>
                     </div>)
   });
return (
   <section className="experience-container">

{/* 
   <div className="radio-button">
         <input className="one" type="radio" name="aboutMeSelect" value="education" />
         <span>EXPERIENCE</span>
         </div> */}



         <section>
               <h2>Work Experience</h2>
               <div className="feature-container column">
               {mappedWorkList}
               </div>
         </section>

   {/* <div className="radio-button">
         <input type="radio" name="aboutMeSelect" value="work"/>
         <span>WORK</span>
         </div> */}



         <section className="feature">
            <img />
            <div className="feature-description">
               <h1>Philanthropy Work</h1>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
         </section>
   </section>
)
}
export default Experience;