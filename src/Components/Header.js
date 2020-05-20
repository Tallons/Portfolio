import React from 'react';
import toothless from "../images/toothlessIcon.JPG"

const Header = () => {

  return (
     <header>
      <section className="nav-bar-container">
         <nav className="nav-bar-1" color="black">
            <span id="skills">SKILLS</span>
            <span id="projects">PORTFOLIO</span>
            <span id="about-me">ABOUT ME</span>
            <span id="contact">CONTACT</span>
         </nav>
      </section>
      <section className="header-title-container">
         <img className="header-icon" src={toothless} />
         <h1>NOAH ORR</h1>
         <h2> SOFTWARE DEVELOPER & 2019 WORLD SILVER MEDALIST </h2>
      </section>
     </header>
  )
}

      export default Header;