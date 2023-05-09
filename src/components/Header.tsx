import { useLayoutEffect, useState } from 'react'
import Logo from './Logo'

const Header = () => {
  const [render, setRender] = useState(false)
  const body = document.body.classList
  const theme: any = localStorage.getItem('theme')

  useLayoutEffect(() => {
    document.body.classList.add(theme || 'dark')
    if (!theme) {
      localStorage.setItem('theme', 'dark')
    }
  }, [theme])

  function handleMode() {
    body.toggle(theme)
    localStorage.setItem('theme', theme ?
      theme === 'dark' ? 'light' : 'dark'
      :
      'light')
    setRender(!render)
  }
  
  return (
    <section>
      <div className='sm:mb-[50px] mt-10 flex justify-between'>
        <div>
          LOGO
        </div>
        <div className=''>
          <label className="switch">
            <input
              type="checkbox"
              onChange={handleMode}
              checked={theme === 'light' ? true : false}

            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      <Logo />

    </section>
  )
}

export default Header