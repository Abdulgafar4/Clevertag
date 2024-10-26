import React from 'react'
import { portfolioList } from '../PortfolioList'
import "./PortfolioProjects.css"

function PortfolioProjects({items}) {
    const limit = items ? items : portfolioList.length;
  return (
    <div>
      <div className="projects-container">
        {portfolioList.slice(0, limit).map((l) => (
          <a
            className="project-card"
            href={l.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-img-container">
              <img className="project-img" src={l.img} alt={l.name} />
            </div>
            <div className="project-card-title">
              <h2>{l.name}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PortfolioProjects