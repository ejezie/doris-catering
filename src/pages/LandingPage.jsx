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
// import cake from "../images/delivery.jpg";
import bgcake from "../images/bgcake.png";
import contactbyk from "../images/contactbyk.png";
import egusi from "../images/egusi.png";
import chop from "../images/chop.png";
import jollof from "../images/jollof.png";
import pcake from "../images/pcake.png";
import assort from "../images/assort.png";
import fried from "../images/fried.png";
import logo from "../images/logo.png";
import bgtray from "../images/bgtray.png";
import me from "../images/me.png";

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
      </div>
      {/*  */}
      <div className="food__wrap anim-text" id="home">
        <Parallax speed={-4}>
          <div className="food__header">
            <Title logo={food} text={"DoraCooksFire"} />
          </div>
        </Parallax>
        <Parallax speed={-1} className="bgimgthree">
          <img src={bgcook} alt="" />
        </Parallax>
      </div>
      {/*  */}

      <section className="portfolios">
        <Parallax speed={-4.5}>
          <div className="port__wrap">
            <div className="port__item">
              <Portfolio
                name={"Egusi "}
                image={egusi}
                Ingredient={"egusi, palm oil, meat, fufu "}
                rating={"rating: "}
              />
            </div>
            <div className="port__item">
              <Portfolio
                name={"Small chops"}
                image={chop}
                Ingredient={"flour, egg, letus, meat"}
                rating={"rating: "}
              />
            </div>
            <div className="port__item">
              <Portfolio
                name={"Jollof rice"}
                image={chop}
                Ingredient={"rice, tomatoes, chicken"}
                rating={"rating: "}
              />
            </div>
          </div>
        </Parallax>
        <Parallax speed={-4.5}>
          <div className="port__wraptwo">
            <div className="port__item">
              <Portfolio
                name={"Cake"}
                image={pcake}
                Ingredient={"flour, egg, cheese, chocolate "}
                rating={"rating: "}
              />
            </div>
            <div className="port__item">
              <Portfolio
                name={"Pepe Soup"}
                image={assort}
                Ingredient={"meat, ehuru, uda, onions"}
                rating={"rating: "}
              />
            </div>
            <div className="port__item" id="portfolio">
              <Portfolio
                name={"Fried Rice"}
                image={fried}
                Ingredient={"Rice, Chicken, Onions"}
                rating={"rating: "}
              />
            </div>
            {/* <Parallax speed={0} className="bgimgfour">
              <img src={bgtray} alt="" />
            </Parallax> */}
          </div>
        </Parallax>
      </section>
      {/*  */}
      <Parallax speed={-4.5}>
        <section className="contact">
          <div className="contact__img">
            <img src={contactbyk} alt="" />
          </div>
          <div className="contact__icons">
            <form action="https://formspree.io/f/xjvjovbw" method="POST" className="contact__form">
              <h3>
                Send us a message <i class="far fa-envelope-open"></i>
              </h3>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"></textarea>
              <button className="button">submit</button>
            </form>
            <div className="contact__text__wrap">
              <div className="contact__text">
                <h3>
                  <i class="fas fa-phone-alt"></i> 07055579622{" "}
                </h3>
              </div>
              <div className="contact__text">
                <h3>
                  <i class="fab fa-whatsapp"></i> 08068331683
                </h3>
              </div>
              <div className="contact__text">
                <h3>
                  <i class="far fa-envelope-open"></i> dorafc19@gmail.com
                </h3>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
      <Parallax speed={-3.5}></Parallax>
      <Parallax speed={-4}>
        <section>
          <div className="black__bg">
            <h1>DoraGroovyKitchen</h1>
            <img src={logo} alt="" />
          </div>
        </section>
      </Parallax>
      <Parallax speed={0}>
        <div id="contact"></div>
      </Parallax>
    </div>
  );
}

export default LandingPage;
