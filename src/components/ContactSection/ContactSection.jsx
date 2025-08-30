import React from "react";
import "./ContactSection.css"

const ContactSection = () => {
  return (
    <section id="contact-section">
      <div className="contact-section-div">
        <div className="s6-child-div">
          <div>
            <div className="s6-inner-div1">
              <h2>Let’s work together</h2>
              <div>
                This is a template Figma file, turned into code using Anima.
                Learn more at AnimaApp.com This is a template Figma file, turned
                into code using Anima. Learn more at AnimaApp.com
              </div>
            </div>
            <div className="s6-inner-div2">
              <figure>
                <img src="./assets/Vector.png" alt=""></img>
              </figure>
              <figure>
                <img src="./assets/Vector (1).png" alt=""></img>
              </figure>
              <figure>
                <img src="./assets/Vector (2).png" alt=""></img>
              </figure>
              <figure>
                <img src="./assets/Vector (3).png" alt=""></img>
              </figure>
              <figure>
                <img src="./assets/Vector (4).png" alt=""></img>
              </figure>
            </div>
          </div>
          <form>
            <div className="form-div">
              <input type="text" placeholder="NAME"></input>
              <input type="email" placeholder="EMAIL"></input>
              <textarea
                name=""
                id=""
                placeholder="Type your message here"
              ></textarea>
            </div>
            <div className="button">
              <p>Submit</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
