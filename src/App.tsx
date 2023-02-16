import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import BasicDemo from './components/BasicDemo'
import Figma from './components/Figma'
import ImageScroll from './components/ImageScroll'
import Logo from './components/Logo'
import Profile from './components/Profile'
import Github from './components/Github'



function App() {

  function handleMode() {
    document.body.classList.toggle('dark')
  }
  Aos.init({
    duration: 1000,
    offset: 0,
  })

  return (
    <div className='container mx-auto flex flex-col gap-y-[50px] lg:gap-y-[250px] px-6'>
      {/* <button onClick={handleMode}>Mode</button> */}
      {/* background */}
      <img src="/svg/blob.svg" alt="" className="absolute top-0 right-0 pointer-events-none" />
      <Logo />
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
