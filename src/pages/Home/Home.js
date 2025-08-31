import React from 'react'
import Contact from '../../components/Contact/Contact'
import Hero from '../../components/Section1/Hero'
import Brands from '../../components/Section2/Brands'
import Portfolio from '../../components/Section3/Portfolio'
function Home() {
  return (
    <div>
      <Hero/>
      <Brands />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default Home