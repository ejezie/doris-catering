import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav__wrapper">
        <Link to="/">
          <div className="home">Home</div>
        </Link>
        <Link to="portfolio" smooth={true} duration={1000}>
          <div className="port">portfolio</div>
        </Link>
        <Link to="/contact">
          <div className="contact">Contact</div>
        </Link>
        <Link to="/about">
          <div className="about">About</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
