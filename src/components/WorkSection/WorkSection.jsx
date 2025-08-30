import React from "react";
import "./WorkSection.css"

const WorkSection = () => {
  return (
    <section id="work-section">
      <h2 className="work1">My latest work</h2>
      <h2 className="work">Latest Work</h2>

      <div>
        <div className="cards-parent">
          <figure className="cards">
            <img
              src="./assets/free bird.jpg"
              alt=""
              height="315px"
              width="315px"
            ></img>
            <figcaption>
              <p>Free Bird</p>
              <p>Lynyrd Skynyrd</p>
            </figcaption>
          </figure>

          <figure className="cards">
            <img
              src="./assets/purple haze.jpg"
              alt=""
              height="315px"
              width="315px"
            ></img>
            <figcaption>
              <p>Purple Haze</p>
              <p>Jimi Hendrix</p>
            </figcaption>
          </figure>

          <figure className="cards">
            <img
              src="./assets/you really got me.jpg"
              alt=""
              height="315px"
              width="315px"
            ></img>
            <figcaption>
              <p>You Really Got Me</p>
              <p>The Kinks</p>
            </figcaption>
          </figure>
        </div>
        <div className="cards-parent">
          <figure className="cards">
            <img
              src="./assets/American girl.jpg"
              alt=""
              height="315px"
              width="315px"
            ></img>
            <figcaption>
              <p>American Girl</p>
              <p>Tom Petty</p>
            </figcaption>
          </figure>

          <figure className="cards">
            <img
              src="./assets/whole lotta love.jpg"
              alt=""
              height="315px"
              width="315px"
            ></img>
            <figcaption>
              <p>Whole Lotta Love</p>
              <p>Led Zeppelin</p>
            </figcaption>
          </figure>

          <figure className="cards">
            <img
              src="./assets/under pressure.jpg"
              alt=""
              height="315px"
              width="315px"
            ></img>
            <figcaption>
              <p>Under Pressure </p>
              <p>Queen</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
