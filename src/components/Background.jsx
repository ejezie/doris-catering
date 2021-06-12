import React from "react";
import cakeOne from "../images/Cake9.svg";
import pinkCake from "../images/pinkcake.svg";
import pink from "../images/food.jpg";

function Background() {

  return (
    <div className={`background`}>
      <img src={pink} alt="background" />
      <div className="float__cakes__wrapper">
        {/* <img src={cakeOne} className="float__cake" alt="cake" />
        <img src={cakeOne} className="float__cake" alt="cake" />
        <img src={cakeOne} className="float__cake" alt="cake" />
        <img src={pinkCake} className="float__cake" alt="cake" />
        <img src={cakeOne} className="float__cake" alt="cake" />
        <img src={cakeOne} className="float__cake" alt="cake" />
        <img src={pinkCake} className="float__cake" alt="cake" />
        <img src={cakeOne} className="float__cake" alt="cake" />
        <img src={pinkCake} className="float__cake" alt="cake" />
        <img src={cakeOne} className="float__cake" alt="cake" />
        <img src={pinkCake} className="float__cake" alt="cake" /> */}
      </div>
    </div>
  );
}

export default Background;
