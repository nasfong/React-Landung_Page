import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  {
    name: 'Login',
    image: '/image/web_login.png'
  },
  {
    name: 'Menu',
    image: '/image/web_menu.png'
  },
]


const WebFinzcore = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-around items-center gap-y-10'>
      <div
        className='flex flex-col xl:gap-y-16'
        data-aos='flip-right'
      // data-aos-offset='800'
      >
        <div className='font-bold text-[3rem]'>
          Web <span className='text-[#f1416c] border-b-2 border-yellow-300 rounded-sm'>Finzcore360</span>
        </div>
        <div>
          <div>Mobile App</div>
          <div className='card-item my-3'>Frontend: <span className='text-blue-500'>React JS/TS</span></div> <br />
          <div className='card-item mb-6'>Backend: <span className='text-green-300'>Java Spring-Boot</span></div>
        </div>
      </div>
      <div
        className="flex transition ease-in-out delay-150"
      >
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={100}
          pagination={{
            // clickable: true,
          }}
          modules={[Pagination]}
        >
          {images.map((item, idx) => (
            <SwiperSlide key={idx} className='cursor-grab'>
              <img src={item.image} className='image pb-8' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section >
  )
}

export default WebFinzcore