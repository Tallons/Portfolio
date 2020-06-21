import React from  "react";
import Experience from  "./Experience";
import "./AboutMe.scss";

const AboutMe = (props) => {
   const aboutMe = false;

   console.log(props)
return (
   <div className="about-me-page">
      <nav>
         <h3> About Me </h3>
         <h3> Experience </h3>
         <h3> Gymnastics </h3>
      </nav>

      <section className="about-me-container">
         { aboutMe ? (
            <section className="feature">
            <img />
            <div className="feature-description">
               <h1>Lorem Ipsum </h1>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
         </section>
          ) : null}
         
         <Experience />

         
      </section>
   </div>
)
}
export default AboutMe;