import React from "react";
import pink from "../images/food.jpg";

function LandingPage() {
  return (
    <div className="landing__page">
         <img src={pink} alt="background" />
      <div className="header">
        <div className="headertext__wrap">
          <h1 className="header__text">
            <span>D</span>
            <span>O</span>
            <span>R</span>
            <span>A</span>
            <span>K</span>
            <span>I</span>
            <span>T</span>
            <span>C</span>
            <span>H</span>
            <span>E</span>
            <span>N</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
