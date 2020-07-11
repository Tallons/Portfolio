import React from 'react';
import { HashLink as Link } from "react-router-hash-link"

const Header = () => {

  return (
     <header>
      <section className="nav-bar-container">
         <nav className="nav-bar">
            <Link to="#skills">SKILLS</Link>
            <Link to="#portfolio">PORFOLIO</Link>
            <Link to="#about-me">ABOUT ME</Link>
            <Link to="#contact">CONTACT</Link>
         </nav>
      </section>
      <section className="header-title-container">
         <h1 className="name">NOAH ORR</h1>
         <h2 className="sub-heading"> Software Developer<br /> Senior Elite Gymnast </h2>
      </section>
     </header>
  )
}

      export default Header;