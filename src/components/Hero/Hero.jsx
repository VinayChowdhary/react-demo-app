import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-div">
        <figure className="hero-fig">
          <div className="hero-fig-div">
            <img
              src= "./assets/bio-image.jpg"
              alt=""
              height="195px"
              width="195px"
            ></img>
          </div>
          <figcaption>
            <span>Pablo Designero</span><br />
            <span>Designer & Unicorn Trainer</span>
          </figcaption>
        </figure>
        <aside className="hero-aside">
          <div>
            <b>Bio:</b> Father of 3 humans, 5 unicorns & 2 dogs, I design since
            I can remember it. I often get asked where I get my inspiration
            from: in everyday’s lil’ details. And sometimes in leftover food I
            find in my beard.
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
