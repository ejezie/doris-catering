import React, { useState } from "react";

function Portfolio({ name, Ingredient, rating, image }) {
  const [rotateIcon, setRotateIcon] = useState(false);
  const [rotateDrop, setRotateDrop] = useState(false);
  const handleRotate = () => {
    setRotateIcon(!rotateIcon);
    setRotateDrop(!rotateDrop);
  };
  return (
    <div className="portfolio">
      <div className={`${rotateDrop ? "drop" : "dropped"}`}>
        <div className="drop__content">
          <p>Name : {name}</p>
          <p>Ingredient : {Ingredient}</p>
          <p>
            {rating} <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </p>
        </div>
      </div>
      <div className="port__image__wrap">
        <div className="icon__wrap">
          <i
            className={`fas fa-chevron-down ${
              rotateIcon ? "rotate__arrow" : "icon__arrow"
            } `}
            onClick={handleRotate}></i>
        </div>
        <img
          src={image}
          alt="cake"
          className={`${rotateIcon ? "show__pic" : "cake"}`}
        />
      </div>
    </div>
  );
}

export default Portfolio;
