import React from 'react';
import toothless from "../images/toothlessIcon.JPG"

const Header = () => {

  return (
     <header>
      <section className="nav-bar-container">
         <nav className="nav-bar-1">
            {/* <span className="nav-item">SKILLS</span> */}
            <a href="#skills">SKILLS</a>
            <span className="nav-item">PORTFOLIO</span>
            <span className="nav-item">ABOUT ME</span>
            <span className="nav-item">CONTACT</span>
         </nav>
      </section>
      <section className="header-title-container">
         <img className="header-icon" src={toothless} />
         <h1>NOAH ORR</h1>
         <h2> Software Developer<br /> 2019 World Silver Medalist </h2>
      </section>
     </header>
  )
}

      export default Header;