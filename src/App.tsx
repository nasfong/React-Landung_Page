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
import FrontendEngineer from './components/FrontendEngineer'
import RCIMobile from './components/RCIMobile'
import WebFinzcore from './components/WebFinzcore'

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
      {/* <ImageScroll />
      <BasicDemo />
      <RCIMobile />
      <WebFinzcore />
      <Figma /> */}
      {/* <Github /> */}
      {/* <FrontendEngineer /> */}

      <ScrollToTop showUnder={100} duration={2000}>
        <div
          dangerouslySetInnerHTML={{ __html: '<svg width="50px" height="50px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet"><path d="M116 4H12c-4.4 0-8 3.6-8 8v104c0 4.4 3.6 8 8 8h104c4.4 0 8-3.6 8-8V12c0-4.4-3.6-8-8-8z" fill="#427687"></path><path d="M109.7 4H11.5C7.4 4 4 7.4 4 11.5v97.9c0 4.2 3.4 7.5 7.5 7.5h98.1c4.2 0 7.5-3.4 7.5-7.5V11.5c.2-4.1-3.3-7.5-7.4-7.5z" fill="#8cafbf"></path><path d="M37 47.4l24-24c1.6-1.8 4.4-1.8 6 0l24 24c2.3 2.6.4 6.6-3 6.6H74c-1.1 0-2 .9-2 2v46c0 2.2-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4V56c0-1.1-.9-2-2-2H40c-3.4 0-5.3-4-3-6.6z" fill="#fafafa"></path><g><path d="M39.7 12.9c0-2.3-1.6-3-10.8-2.7c-7.7.3-11.5 1.2-13.8 4s-2.9 8.5-3 15.3c0 4.8 0 9.3 2.5 9.3c3.4 0 3.4-7.9 6.2-12.3c5.4-8.7 18.9-10.6 18.9-13.6z" opacity=".5" fill="#b4e1ed"></path></g></svg>' }}
        />
      </ScrollToTop>
      <div className='h-[100px]' />
    </div>
  )
}

export default App
