import React from "react";
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio-parent">
        <div className="portfolio-parent-child">
          <div className="child-1">
            <div className="child-1-div1">
              <p>Branding | Image making</p>
            </div>
            <div className="child-1-div2">My awesome portfolio</div>
          </div>
          <div className="child-2">
            <p>And I made it myself! Yes. In Figma with Anima</p>
            {/* <p className="text">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p> */}
          </div>
        </div>
        <div className="portfolio-img">
          <img
            src="./assets/Image.png"
            alt=""
            height="424px"
            width="495px"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
