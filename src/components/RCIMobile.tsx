
const images = [
  {
    name: 'Dashboard',
    image: '/image/dashboardpopup.png'
  },
  {
    name: 'Dashboard',
    image: '/image/dashboard2.png'
  },
  {
    name: 'Dashboard',
    image: '/image/dashboard3.png'
  },
]


const RCIMobile = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-around items-center gap-y-10'>
      <div
        className='flex flex-col xl:gap-y-16'
        data-aos='flip-right'
      // data-aos-offset='800'
      >
        <div className='font-bold text-[3rem]'>
          <span className='text-[#f1416c] border-b-2 border-yellow-300 rounded-sm'>RCI Mobile</span>
        </div>
        <div>
          <div>Mobile App</div>
          <div className='card-item my-3'>Frontend: <span className='text-blue-500'>Vue - Ionic</span></div> <br />
          <div className='card-item mb-6'>Backend: <span className='text-green-300'>Java Spring-Boot</span></div>
        </div>
        <div>
          
          {/* <a
            className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden 
            text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 
            to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white 
            dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
            href="https://vite-create-tsx.vercel.app/"
            target="_blank"
          >
            <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Visit
            </span>
          </a> */}
        </div>
      </div>
      <div
        className="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <img
          src='/image/rci_login.png'
          className='h-[300px] xl:h-[400px] lg:w-[100] rounded-xl'
          data-aos='flip-left'
        />
        <img
          src='/image/rci_home.png'
          className='h-[300px] xl:h-[400px] lg:w-[100] rounded-xl'
          data-aos='flip-left'
        />
      </div>

    </section >
  )
}

export default RCIMobile