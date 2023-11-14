import { Fade } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import { frontends } from "../data"

const zoomOutProperties = {
  duration: 1000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: false,
  pauseOnHover: false

}

const FrontendEngineer = () => {
  return (
    <div className='p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex flex-col lg:flex-row gap-x-20 p-10 '>
        <div className='mb-6 lg:mb-0'>
          <div className='text-[25px] md:text-[70px] text-white'>Fontend&nbsp;Exercise</div>
          <div className='flex mt-4 space-x-3 md:mt-6'>
            <a href="https://github.com/nasfong/frontend-engineer" target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Source
            </a>
            <a href="https://frontend-engineer-three.vercel.app/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
              Visit
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-1 text-white text-[11px] sm:text-[20px]'>
          <span className="flex gap-x-5">
            <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            Typescript guideline
          </span>
          <span className="flex gap-x-5">
            <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            Material UI
          </span>
          <span className="flex gap-x-5">
            <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            API (https://api.github.com/)
          </span>
          <span className="flex gap-x-5">
            <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            React Vite(without JEST or Vitest)
          </span>
        </div>
      </div>
      <Fade {...zoomOutProperties}>
        {frontends.map((frontend, index) => (
          <div key={index}>
            <img src={frontend} className='w-full rounded-xl border border-sky-500' />
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default FrontendEngineer