import React, { useEffect, useState } from "react";
// import Parallax from "react-rellax";
import snack from "../images/snack.png";
import cocktail from "../images/tail.png";
import food from "../images/foodtext.png";
import bgcook from "../images/bgcook.png";
import bgcocktail from "../images/bgcocktail.png";
import Title from "../components/Title";
import { TimelineMax, Power1 } from "gsap";
import Portfolio from "../components/Portfolio";
import cake from "../images/delivery.jpg";
import bgcake from "../images/bgcake.png";
// import { Parallax } from "react-scroll-parallax";

function LandingPage() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // main();
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // function main() {
  //   let animsOne = document.querySelectorAll(".anim-text");

  //   let options = {
  //     threshold: [0, 0.5, 1],
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       let targetOne = entry.target.querySelectorAll(".mask");
  //       if (entry.intersectionRatio > 0.5) {
  //         runAnim(targetOne);
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   }, options);
  //   animsOne.forEach((animOne) => {
  //     observer.observe(animOne);
  //   });
  // }

  // function runAnim(targetOne) {
  //   let tl = new TimelineMax();
  //   tl.staggerTo(targetOne, 1.5, { scaleX: 0, ease: Power1.easeInOut }, 1);
  // }

  return (
    <div className="landing__page" id="home">
      <div
        className="header__wrap anim-text"
        
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
        <div className="title__header">
          <Title logo={snack} text={"DoraLovesPasteries"} />
        </div>
        <img
          src={bgcake}
          alt=""
          className="bgimgone"
          style={{ transform: `translateY(${offsetY / -5}px)` }}
        />
        <div className="header__span__wrap"></div>
        <div className="line"></div>
      </div>
      {/*  */}
      <div
        className="cocktail__wrap anim-text"
        id="home"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
        <div className="cocktail__header">
          <Title logo={cocktail} text={"DoraLovesCocktails"} />
        </div>
        <img
          src={bgcocktail}
          alt=""
          className="bgimgtwo"
          style={{ transform: `translateY(${offsetY / -4}px)` }}
        />
        <div className="header__span__wrap"></div>
        <div className="line"></div>
      </div>
      {/*  */}
      <div
        className="food__wrap anim-text"
        id="home"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
        <div className="food__header">
          <Title logo={food} text={"DoraCooksFire"} />
        </div>
        <img
          src={bgcook}
          alt=""
          className="bgimgthree"
          style={{ transform: `translateY(${offsetY / -5}px)` }}
        />
        <div className="header__span__wrap"></div>
        <div className="line"></div>
      </div>
      {/*  */}
      <section className="portfolios" id="portfolio">
        <div className="port__wrap" style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
          <div className="port__item">
            <Portfolio
              name={"Cake "}
              image={cake}
              Ingredient={"flour, egg, cheese, chocolate "}
              rating={"rating: "}
            />
          </div>
          <div className="port__item">
            <Portfolio
              name={"Cake "}
              image={cake}
              Ingredient={"flour, egg, cheese, chocolate "}
              rating={"rating: "}
            />
          </div>
          <div className="port__item">
            <Portfolio
              name={"Cake "}
              image={cake}
              Ingredient={"flour, egg, cheese, chocolate "}
              rating={"rating: "}
            />
          </div>
        </div>
        <div className="port__wraptwo">
          <div className="port__item">
            <Portfolio
              name={"Cake "}
              image={cake}
              Ingredient={"flour, egg, cheese, chocolate "}
              rating={"rating: "}
            />
          </div>
          <div className="port__item">
            <Portfolio
              name={"Cake"}
              image={cake}
              Ingredient={"flour, egg, cheese, chocolate"}
              rating={"rating: "}
            />
          </div>
          <div className="port__item">
            <Portfolio
              name={"Cake "}
              image={cake}
              Ingredient={"flour, egg, cheese, chocolate "}
              rating={"rating: "}
            />
          </div>
        </div>
      </section>
      {/* <footer className="footer" style={{transform: `translateY(${offsetY * 0.5}px)`}}></footer> */}
    </div>
  );
}

export default LandingPage;
