const Figma = () => {
  return (
    <section
      className='flex flex-col-reverse lg:flex-row justify-around'
      data-aos='zoom-out-down'
      data-aos-offset='600'
    >
      <div>
        <img src="/image/figma.png" className="w-[750px] h-[400px] rounded-xl" />
      </div>
      <div className='flex flex-row justify-center items-center'>
        <img src="/svg/figma.svg" className="w-[80px] h-[80px]" />
        <div className='text-[100px]'>Figma</div>
      </div>
    </section>
  )
}

export default Figma