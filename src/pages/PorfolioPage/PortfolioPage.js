import React from 'react'
import "./PortfolioPage.css"
import PortfolioProjects from '../../components/Section3/PortfolioCards/PortfolioProjects'

function PortfolioPage() {
  return (
    <div className='pp-container'>
      <h1>
        Take a look at some of my projects.
      </h1>
      <PortfolioProjects />
    </div>
  )
}

export default PortfolioPage