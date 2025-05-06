import React from 'react'
import { HeroSection } from './Home/HeroSection'
import {About} from './About'

export const Home = () => {
  return (
  <div className='w-full border-6 h-full  bg-[#121212]'>
  <HeroSection/>
  <About/>
  </div>
  )
}

