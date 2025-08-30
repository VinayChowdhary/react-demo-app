import React from "react";
import "./ClientsReview.css"

const ClientsReview = () => {
  return (
    <section id="clients-review">
      <div className="clients-review-div">
        <p>Clients</p>
        <div className="star-cards-parent">
          <div className="star-card">
            <div className="star-card-child">
              <figcaption>
                This is a template Figma file, turned into code using Anima.
                Learn more at AnimaApp.com
              </figcaption>
              <figure>
                <img src="./assets/Client info.png" alt=""></img>
              </figure>
            </div>
          </div>

          <div className="star-card">
            <div className="star-card-child">
              <figcaption>
                This is a template Figma file, turned into code using Anima.
                Learn more at AnimaApp.com
              </figcaption>
              <figure>
                <img src="./assets/Client info (1).png" alt=""></img>
              </figure>
            </div>
          </div>

          <div className="star-card">
            <div className="star-card-child">
              <figcaption>
                This is a template Figma file, turned into code using Anima.
                Learn more at AnimaApp.com
              </figcaption>
              <figure>
                <img src="./assets/Client info (2).png" alt=""></img>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsReview;
