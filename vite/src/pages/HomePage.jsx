import React from 'react'
import Header from '../components/home/Header'
import Logo from '../components/home/Logo'
import Pricing from '../components/home/Pricing'
import HeroSection from '../components/home/Hero'

const HomePage = () => {
  return (
    <div>
      <div>
        <HeroSection/>
      </div>
     
      <div>
        <Header/>
      </div>
      <div>
        <Pricing/>
      </div>
      <div>
        <Logo/>
      </div>
      
    </div>
  )
}

export default HomePage
