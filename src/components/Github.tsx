const Github = () => {
  return (
    <section className='flex-row lg:flex lg:justify-around justify-center'>
      <div
        className='flex flex-row justify-center items-center'
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        // data-aos-offset='600'
      >
        <img src="/svg/github.svg" className="w-[80px] h-[80px]" />
        <div className='text-[100px]'>Github</div>
      </div>
      <a
        href="https://github.com/nasfong"
        target="_blank"
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <img
          src="/image/github.png"
          className="h-[300px] xl:h-[400px] w-full rounded-xl"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          // data-aos-offset='500'
        />
      </a>
    </section>
  )
}

export default Github