import React from "react";
import { portfolioList } from "../PortfolioList";
import "./PortfolioProjects.css";

function PortfolioProjects() {
  return (
    <div className="projects-container">
      {portfolioList.map((l) => (
        <div className="project-image-container" key={l.id}>
          <img className="project-img" src={l.img} alt={l.name} />
        </div>
      ))}
    </div>
  );
}

export default PortfolioProjects;
