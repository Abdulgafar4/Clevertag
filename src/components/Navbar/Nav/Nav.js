import React, { useState } from "react";
import { socialIcons, navItems } from "../Navbar";
import "./Nav.css";

export default function Nav() {
  const [navMenu, setNavMenu] = useState(false);

  const closeMenu = () => {
    setNavMenu(false);
  };

  window.addEventListener("scxroll", closeMenu);

  const hamburger = (
    <p className="hamburger-container" onClick={() => setNavMenu(!navMenu)}>
      {navMenu ? (
        <div className="close"></div>
      ) : (
        <div className="hamburger">
          <span className="ham-span"></span>
          <span className="ham-span"></span>
          <span className="ham-span"></span>
        </div>
      )}
    </p>
  );

  const dropDown = (
    <div className="show-nav-items">
      <div className="dropdown-close hamburger-container">{hamburger}</div>
      {navItems.map((l) => (
        <a
          key={l.id}
          className="nav-item"
          href={l.id}
          onClick={() => setNavMenu(false)}
        >
          {l.name}
        </a>
      ))}
    </div>
  );

  return (
    <div className="flex justify-center mx-auto">
      <div className="navbar max-w-[1700px]" style={{ borderRadius: "50px" }}>
        <div className="logo-container">
          <a href="/">Clevertag</a>
        </div>
        <div className="nav-icon-container">
          {socialIcons.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </div>

        {hamburger}
        {navMenu && dropDown}
      </div>
    </div>
  );
}
