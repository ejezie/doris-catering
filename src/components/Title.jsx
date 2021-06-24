import React, { useEffect } from "react";
import { gsap, Power1 } from "gsap";

function Title({ logo, text }) {
  useEffect(() => {
    main();
  });

  function main() {
    let animsOne = document.querySelectorAll(".anim-text");

    let options = {
      threshold: [0, 0.5, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let targetOne = entry.target.querySelectorAll(".mask");
        if (entry.intersectionRatio > 0.5) {
          runAnim(targetOne);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    animsOne.forEach((animOne) => {
      observer.observe(animOne);
    });
  }

  function runAnim(targetOne) {
    //
    gsap.from(targetOne, {
      scaleX: 0,
      ease: Power1.easeInOut,
      duration: 1,
      delay: 2,
    });
  }
  return (
    <div className="title">
      <img className="logo" src={logo} alt="logo" />
      <div className="head__span__wrap">
        <h1 className="text__head">
          <span className="text">{text}</span>
          <span className="mask"></span>
        </h1>
      </div>
    </div>
  );
}

export default Title;
