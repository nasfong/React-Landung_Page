import { learn_by_myselfs, proficients, socails } from "../data"

const dateOne = new Date()
const dateTwo = new Date("2023-02-13")

const dateOneUTC = Date.UTC(
  dateOne.getFullYear(),
  dateOne.getMonth(),
  dateOne.getDate()
);
const dateTwoUTC = Date.UTC(
  dateTwo.getFullYear(),
  dateTwo.getMonth(),
  dateTwo.getDate()
);

const days = (dateOneUTC - dateTwoUTC) / (1000 * 60 * 60 * 24);

const Profile = () => {

  return (
    <section className='relative xl:px-[200px] text-[14px] sm:text-[1rem]'>
      <img
        src="/image/main.png"
        className='w-[635px] h-[622px] absolute xl:right-28 right-0 -top-[200px] opacity-50 xl:opacity-100 z-0'
      />
      {/* Card */}
      <div
        className='card max-w-[800px] flex flex-col gap-y-5'
        data-aos='fade-right'
      // data-aos-delay='400'
      >
        {/* header */}
        <div className='flex items-center gap-x-5'>
          <img
            src="/image/nasfong.jpg"
            className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] rounded-full border-white border object-cover'
          />
          <div className="">
            <div>Created by: <span className='font-bold'>NasFong</span> </div>
            <div>Phone number: <span className='font-bold'>093292931</span> </div>
            <div className="">Email: <span className='font-bold'>fongren007@gmail.com</span> </div>
            <div>Created date: <span className=''>13/02/2023 (<span className='text-[#50CD89] font-semibold'>{days}days ago</span>)</span> </div>
          </div>
        </div>
        {/* body */}
        <div className='flex'>
          <div className="whitespace-nowrap">Proficient: </div>
          <div className='flex flex-wrap gap-1'>
            {proficients.map((pro, idx) => (
              <div className={`card-item`} style={{ color: pro.color }} key={idx}>
                {pro.name}
              </div>
            ))}
          </div>
        </div>
        <div className='flex'>
          <div className="whitespace-nowrap">Learn by myself: </div>
          <div className='flex flex-wrap gap-1'>
            {learn_by_myselfs.map((learn, idx) => (
              <div className={`card-item`} style={{ color: learn.color }} key={idx}>
                {learn.name}
              </div>
            ))}
          </div>
        </div>
        {/* footer */}
        <div className="flex flex-row gap-x-10 lg:pt-10">
          {socails.map((social, idx) => (
            <div key={idx} className="flex flex-row items-center gap-x-2">
              <img src='/svg/facebook.svg' className='w-[20px] h-[20px] svg' />
              {/* <div
                className='icon'
                dangerouslySetInnerHTML={{ __html: social.icon }}
              /> */}
              <div>{social.name}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Profile