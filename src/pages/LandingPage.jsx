import React, { useEffect, useState } from "react";
import Parallax from "react-rellax";
import snack from "../images/snack.png";
import cocktail from "../images/tail.png";
import food from "../images/foodtext.png";
import bgcook from "../images/bgcook.png";
import bgcocktail from "../images/bgcocktail.png";
import Title from "../components/Title";
// import { TimelineMax, Power1 } from "gsap";
import Portfolio from "../components/Portfolio";
import cake from "../images/delivery.jpg";
import bgcake from "../images/bgcake.png";
import contactbyk from "../images/contactbyk.png";
// import { Parallax } from "react-scroll-parallax";

function LandingPage() {
  // const [offsetY, setOffsetY] = useState(0);

  // const handleScroll = () => {
  //   setOffsetY(window.pageYOffset);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   // main();
  //   return () => window.removeEventListener("scroll", handleScroll);
  //   // style={{ transform: `translateY(${offsetY * 0.3}px)` }} inline
  // });

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
      <div className="header__wrap anim-text">
        <Parallax speed={-4}>
          <div className="title__header">
            <Title logo={snack} text={"DoraLovesPasteries"} />
          </div>
        </Parallax>
        <Parallax speed={-1} className="bgimgone">
          <img src={bgcake} alt="" />
        </Parallax>

        <div className="header__span__wrap"></div>
        <div className="line"></div>
      </div>
      {/*  */}
      <div className="cocktail__wrap anim-text" id="home">
        <Parallax speed={-4}>
          <div className="cocktail__header">
            <Title logo={cocktail} text={"DoraLovesCocktails"} />
          </div>
        </Parallax>
        <Parallax speed={-1} className="bgimgtwo">
          <img src={bgcocktail} alt="" />
        </Parallax>
        <div className="header__span__wrap"></div>
        <div className="line"></div>
      </div>
      {/*  */}
      <div className="food__wrap anim-text" id="home">
        <Parallax speed={-4}>
          <div className="food__header">
            <Title logo={food} text={"DoraCooksFire"} />
          </div>
        </Parallax>
        <Parallax speed={0} className="bgimgthree">
          <img src={bgcook} alt="" />
        </Parallax>
        <div className="header__span__wrap"></div>
        <div className="line"></div>
      </div>
      {/*  */}

      <section className="portfolios" id="portfolio">
        <Parallax speed={-4}>
          <div className="port__wrap">
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
        </Parallax>
        <Parallax speed={-4}>
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
        </Parallax>
      </section>
      {/*  */}
      <section className="contact">
        <div className="contact__wrapper">
          <Parallax speed={-4} className="contact__img">
            <img src={contactbyk} alt="" />
          </Parallax>
          <Parallax speed={-4} className="contact__icons">
            <div className="call">
              <h3>Call</h3>
              <i class="fas fa-phone-alt"></i>
            </div>
            <div className="whatsapp">
              <h3>WhatsApp</h3>
              <i class="fab fa-whatsapp"></i>
            </div>
            <div className="email">
              <h3>Email</h3>
              <i class="far fa-envelope-open"></i>
            </div>
            <form action="#" className="contact__form">
              <label htmlFor="message">Tell us what you want!</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                placeholder="type here"
                rows="10"></textarea>
            </form>
          </Parallax>
        </div>
      </section>

      {/* <footer className="footer" style={{transform: `translateY(${offsetY * 0.5}px)`}}></footer> */}
    </div>
  );
}

export default LandingPage;
