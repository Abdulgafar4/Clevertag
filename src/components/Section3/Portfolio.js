import React from "react";
import PortfolioProjects from "./PortfolioCards/PortfolioProjects";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="project-section">
          <PortfolioProjects />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
