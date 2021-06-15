import React, { useEffect } from "react";
import logo from "../images/logo.png";
import { TimelineMax, Power1 } from "gsap";
import Parallax from "react-rellax";

function LandingPage() {
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
    let tl = new TimelineMax();
    tl.staggerTo(targetOne, 4, { scaleX: 0, ease: Power1.easeInOut }, 1);
  }

  return (
    <div className="landing__page">
        <Parallax className="header__wrap" speed={-20}>
          <img className="logo" src={logo} alt="logo" />
          <div className="head__span__wrap">
            <h1 className="header__text1">
              <span>D</span>
            </h1>
            <h1 className="header__text2">
              <span>O</span>
            </h1>
            <h1 className="header__text3">
              <span>R</span>
            </h1>
            <h1 className="header__text4">
              <span>A</span>
            </h1>
            <h1 className="header__text5">
              <span>K</span>
            </h1>
            <h1 className="header__text6">
              <span>I</span>
            </h1>
            <h1 className="header__text7">
              <span>T</span>
            </h1>
            <h1 className="header__text8">
              <span>C</span>
            </h1>
            <h1 className="header__text9">
              <span>H</span>
            </h1>
            <h1 className="header__text10">
              <span>E</span>
            </h1>
            <h1 className="header__text11">
              <span>N</span>
            </h1>
          </div>

          <div className="header__span__wrap"></div>
          <div className="line"></div>
        </Parallax>
      {/*  */}
      {/*  */}
      <section className="text__section">
        <div className="text__wrap__one anim-text">
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">You can taste anywhere</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
        </div>
        {/*  */}
        <div className="text__wrap__two anim-text">
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
        </div>
        {/*  */}
        <div className="text__wrap__three anim-text">
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
          <h3 className="text__head">
            <span className="text">I make the best cake you</span>
            <span className="mask"></span>
          </h3>
        </div>
        {/*  */}
      </section>
    </div>
  );
}

export default LandingPage;
