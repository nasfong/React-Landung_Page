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
import ScrollToTop from 'react-scroll-up'



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

      {/* <ScrollToTop showUnder={1000} duration={2000}>
        <div
          className='icon'
          dangerouslySetInnerHTML={{ __html: '<?xml version="1.0" ?><svg class="bi bi-file-arrow-up-fill" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM7.5 6.707 6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707z"/></svg>' }}
        />
      </ScrollToTop> */}
      <div className='h-[100px]' />
    </div>
  )
}

export default App
