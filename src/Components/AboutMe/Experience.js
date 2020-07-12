import React from  "react";

import ecoVerdeLogo from "../../images/Eco Verde Logo.jpg";
import bfLogo from "../../images/B&F Logo.png";
import ldsLogo from "../../images/Church Logo.jpg";

const Experience = (props) => {

   console.log(props)
 



   const workList = [
      {image: ecoVerdeLogo,  alt: "Eco Verde Irrigation", name: "Eco Verde Irrigation", date: " June 2018 - Current", description: "I started as an apprentice. After nine months, I became a Licensed Contractor. I currently supervise and manage the majority of the finances for the business. ", highlightOne: "Established the company’s estimation process", highlightTwo: "Restructured business: $100,000+ in sales (800% increase)", highlightThree: "Used Excel to design monthly analytic reports for customers"},
      {image: bfLogo,  alt: "B & F Contracting", name: "B & F Contracting", date: " June 2017 - Feb 2019", description: "I started as a part-time receptionist/administrative assistant. After six months, I accepted a payroll position. I worked as the payroll administrator for a little over a year.", highlightOne: "	Remodeled the entire payroll system as it transitioned from paper to electronic",highlightTwo: "	Used Excel to create customized Payroll Tools ", highlightThree: "	Conducted in-house weekly payroll: 200+ employees weekly ($250,000+)" }

   ]
   ;
   const mappedWorkList = workList.map(el => {
      return ( <div className="feature feature-separator">
                        <img src={el.image} alt={el.alt} />
                        <div className="feature-description" borderBottom="2px solid red">
                           <h2>{el.name}</h2> 
                           <h3>{el.date}</h3>
                           <p>{el.description}</p>
                           <br></br>
                           <h3>Accomplishments</h3>
                           <li>{el.highlightOne}</li>
                           <li>{el.highlightTwo}</li>
                           <li>{el.highlightThree}</li>
                        </div>
                     </div>
                        )
   });
   return (
      <section className="feature-container">

               <h1>Work Experience</h1>
               <p className="feature-overview"> Due to my schedule, jobs were difficult to balance. I was either training/competing for gymnastics, studying what I could about computer science, or working a job. I love to work and do my best to lift where I stand. Although I didn't have any schooling in regard to my last two jobs, I was able to learn and quickly contribute to the business, ultimately improving the company overall.  </p>
               {mappedWorkList}

               <h1>Philanthropy Work</h1>
               <section className="feature">
                  <img src={ldsLogo}/>
                  <div className="feature-description">
                     <h2> The Church of Jesus Christ</h2>
                     <h3> April 2015 - April 2017</h3>
                     <p>I served in the Colombia Bogota North Mission for The Church of Jesus Christ of Latter-Day Saints. As a missionary, we traveled our designated area in search of providing support to individuals and families in need. We helped people solve/cope with problems in their everyday lives including: depression, family problems, illiteracy, addiction recovery, finding a job, etc. These problems were often solved through a greater understanding of Jesus Christ and His gospel.</p>
                     <br></br>
                     <h3> Skills & Accomplishments</h3>
                     <li>Work ethic, including working 70 hours a week</li>
                     <li>Responsible for dramatic increases (52-300%) in results and efficiency</li>
                     <li>Monitored weekly/monthly goal setting and generated reports</li>
                     <li>Organized and conducted meetings and trainings – up to 40 attendees</li>
                     <li>Member of Leadership Council</li>

                  </div>
               </section>
      </section>
)
}
export default Experience;