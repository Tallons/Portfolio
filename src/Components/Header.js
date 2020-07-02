import React from 'react';
import { HashLink as Link } from "react-router-hash-link"
import toothless from "../images/toothlessIcon.JPG"

const Header = () => {

  return (
     <header>
      <section className="nav-bar-container">
         <nav className="nav-bar-1">
            {/* <span className="nav-item">SKILLS</span> */}
            <Link to="#skills">SKILLS</Link>
            <Link to="#portfolio">PORFOLIO</Link>
            {/* <Link to="#skills">SKILLS</Link> */}
            {/* <span className="nav-item">PORTFOLIO</span> */}
            <span className="nav-item">ABOUT ME</span>
            <span className="nav-item">CONTACT</span>
         </nav>
      </section>
      <section className="header-title-container">
         {/* <img className="header-icon" src={toothless} /> */}
         <h1 className="name">NOAH ORR</h1>
         <h2 className="sub-heading"> Software Developer<br /> 2019 World Silver Medalist </h2>
      </section>
     </header>
  )
}

      export default Header;