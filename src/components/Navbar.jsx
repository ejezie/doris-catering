import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav__wrapper">
        <Link to="home" smooth={true} duration={1000}>
          <div className="dora">DoraGroovyKitchen</div>
        </Link>
        <div className="links">
          <Link to="home" smooth={true} duration={1000}>
            <div className="home">Home</div>
          </Link>
          <Link to="portfolio" smooth={true} duration={1000}>
            <div className="port">portfolio</div>
          </Link>
          <Link to="contact" smooth={true} duration={1000}>
            <div className="contact">Contact</div>
          </Link>
          {/* <Link to="about" smooth={true} duration={1000}>
            <div className="about">About</div>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
