import React from "react";
import { Link } from "react-scroll";

function Background({ useBar, barStatus }) {
  return (
    <div className={`background ${barStatus && "background__click"}`}>
      <div className="float__wrapper">
        <div className={`linkss ${barStatus && "linkss__open"}`}>
          <Link to="home" smooth={true} duration={1000} onClick={useBar}>
            <div className="home">Home</div>
          </Link>
          <Link to="portfolio" smooth={true} duration={1000} onClick={useBar}>
            <div className="port">portfolio</div>
          </Link>
          <Link to="contact" smooth={true} duration={1000} onClick={useBar}>
            <div className="contact">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Background;
