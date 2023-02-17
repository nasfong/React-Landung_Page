import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import BasicDemo from './components/BasicDemo'
import Figma from './components/Figma'
import ImageScroll from './components/ImageScroll'
import Logo from './components/Logo'
import Profile from './components/Profile'
import Github from './components/Github'
import Header from './components/Header'



function App() {

  Aos.init({
    duration: 1000,
    // offset: 0,
  })

  return (
    <div className='container mx-auto flex flex-col gap-y-[50px] lg:gap-y-[250px] px-6'>
      {/* background */}
      <img src="/svg/blob.svg" alt="" className="absolute top-0 right-0 pointer-events-none" />
      <Header />
      <Profile />
      <ImageScroll />
      <BasicDemo />
      <Figma />
      <Github />
      <div className='h-[100px]' />
    </div>
  )
}

export default App
