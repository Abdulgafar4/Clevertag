import React, { useState } from "react";
import { navItems } from "../Navbar";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [navMenu, setNavMenu] = useState(false);

  const hamburger = (
    <div className="hamburger-container" onClick={() => setNavMenu(!navMenu)}>
      {navMenu ? (
        <div className="close"></div>
      ) : (
        <div className="hamburger">
          <span className="ham-span"></span>
          <span className="ham-span"></span>
          <span className="ham-span"></span>
        </div>
      )}
    </div>
  );

  const dropDown = (
    <div className="show-nav-items">
      <div className="dropdown-close hamburger-container">{hamburger}</div>
      {navItems.map((l) => (
        <Link
          key={l.id}
          className="nav-item"
          to={l.id}
          onClick={() => setNavMenu(false)}
        >
          {l.name}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo-container">
          <Link to="/">Abdulgafar Tajudeen</Link>
        </div>
        <div className="nav-items-container">
          {navItems.map((item) => (
            <Link key={item.id} to={item.id} className="nav-item">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="nav-button-container">
          <a
            href="/AbdulResume.pdf"
            download
            className="nav-button"
          >
            Download me
          </a>
        </div>
        {hamburger}
        {navMenu && dropDown}
      </div>
    </div>
  );
}
