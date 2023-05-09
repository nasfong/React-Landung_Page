import { TypeAnimation } from "react-type-animation";

const Logo = () => {
  return (
    <section
      className='text-[2rem] md:text-[3rem] font-bold text-center relative z-10'
    // data-aos='fade-down'
    // data-aos-delay='400'
    >
      <div>
        Become A <span className='text-[#E9EC4A]'>Professional</span>
      </div>
      <div>
        <TypeAnimation
          sequence={[
            'Web', // Types 'One'
            2000, // Waits 1s
            'Mobile', // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            // () => {
            //   console.log('Done typing!'); // Place optional callbacks anywhere in the array
            // }
          ]}
          wrapper="b"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '1em' }}
          className='text-[#00A3FF]'
          speed={1}
        />
        Development
      </div>

    </section>
  )
}

export default Logo