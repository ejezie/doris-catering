import React from "react";
import { Link } from "react-scroll";

function Navbar({ useBar, barStatus }) {
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
        </div>
        <div
          className={`${barStatus ? "bars__click" : "bars"}`}
          onClick={useBar}>
          <div className="barwrap__one">
            <div className="bar__one"></div>
            <div className="bar__two"></div>
          </div>
          <div className="barwrap__two">
            <div className="bar__three"></div>
            <div className="bar__four"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
