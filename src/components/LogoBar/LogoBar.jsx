import React from "react";
import "./LogoBar.css"

const LogoBar = () => {
  return (
    <section id="logo-bar">
      <div className="logo-bar-div1">
        <img
          src="./assets/Behance.png"
          alt=""
          width="53.69px"
          height="34px"
        ></img>
        <img
          src="./assets/Google.png"
          alt=""
          width="103.29px"
          height="34px"
        ></img>
        <img
          src="./assets/Apple.png"
          alt=""
          width="38.11px"
          height="46.83px"
        ></img>
        <img
          src="./assets/Dribbble.png"
          alt=""
          width="139.01px"
          height="34px"
        ></img>
        <img
          src="./assets/Awwwards.png"
          alt=""
          width="213.85px"
          height="34px"
        ></img>
      </div>
    </section>
  );
};

export default LogoBar;
