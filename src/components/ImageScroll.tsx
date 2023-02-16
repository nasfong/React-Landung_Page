import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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


const ImageScroll = () => {
  return (
    <section
      className="card"
      data-aos='fade-up'
      data-aos-offset='0'
    >
      <img src="/image/boy.png" alt="" className="absolute -top-[150px] lg:-top-[300px] -left-[100px] opacity-75 pointer-events-none" />

      <div className='text-center font-bold text-2xl mb-3'>
        My Work Project
      </div>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx} className='cursor-pointer'>
            <img src={item.image} alt={item.name} className='image' />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  )
}

export default ImageScroll