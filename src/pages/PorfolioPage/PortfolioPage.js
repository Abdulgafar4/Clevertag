import React from 'react'
import "./PortfolioPage.css"
import PortfolioProjects from '../../components/Section3/PortfolioCards/PortfolioProjects'

function PortfolioPage() {
  return (
    <div className='pp-container'>
      <h1>
        Take a look at our projects <br /> this is a real project from all over the world.
      </h1>
      <PortfolioProjects />
    </div>
  )
}

export default PortfolioPage