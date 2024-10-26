import React from 'react'
import Contact from '../../components/Contact/Contact'
import Hero from '../../components/Section1/Hero'
import Brands from '../../components/Section2/Brands'
import Portfolio from '../../components/Section3/Portfolio'
import Services from '../../components/Section4/Services'
import Testimonial from '../../components/Testimonials/Testimonial'

function Home() {
  return (
    <div>
      <Hero/>
      <Brands />
      <Services />
      <Portfolio />
      <Testimonial/>
      <Contact />
    </div>
  )
}

export default Home