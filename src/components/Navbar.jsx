import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav__wrapper">
        <NavLink to="/">
          <div className="home">Home</div>
        </NavLink>
        <NavLink to="/portfolio">
          <div className="port">portfolio</div>
        </NavLink>
        <NavLink to="/contact">
          <div className="contact">Contact</div>
        </NavLink>
        <NavLink to="/about">
          <div className="about">About</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
