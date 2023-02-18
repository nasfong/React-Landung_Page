const Figma = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row justify-around'>
      <a
        href="https://www.figma.com/file/q1s1ytUjnpjRX52xeN1U9V/Untitled?node-id=0%3A1&t=AfwJR3JZaOcyMvKD-0"
        target="_blank"
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <img
          src="/image/figma.png"
          className="h-[300px] xl:h-[400px] w-full rounded-xl"
          data-aos='flip-up'
          // data-aos-offset='600'
        />
      </a>
      <div
        className='flex flex-row justify-center items-center'
        data-aos='flip-up'
        // data-aos-offset='600'
      >
        <img src="/svg/figma.svg" className="w-[80px] h-[80px]" />
        <div className='text-[100px]'>Figma</div>
      </div>
    </section>
  )
}

export default Figma