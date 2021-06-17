import React from "react";
import cake from "../images/delivery.jpg";

function Portfolio({ name, ingredient, rating }) {
  return (
    <div className="portfolio">
      <div className="drop">
        <div className="port__image__wrap">
          <i class="fas fa-chevron-down"></i>
          <img src={cake} alt="cake"  className="cake" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
