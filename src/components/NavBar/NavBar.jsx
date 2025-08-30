import React from "react";
import "./NavBar.css"
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">Logo</div>
      <div className="menu-list">
        <div>
          <a href="./about.html" style={{textDecoration:"none"}}>
            About
          </a>
        </div>
        <div>Work</div>
        <div>Content</div>
      </div>
      <img src="./assets/Menu.png" alt="" className="menu-pic"></img>
    </nav>
  );
};

export default NavBar;
