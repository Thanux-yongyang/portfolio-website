import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatarmale2.jpg'
import AVTR2 from '../../assets/avatarfemale.jpg'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar:AVTR1,
    name:'Bill Gates',
   review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

  },
  {
    avatar:AVTR2,
    name:'Billie Eillish',
   review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

  },
  {
    avatar:AVTR1,
    name:'Elon Musk',
   review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

  }
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',  // Custom class for next button
        prevEl: '.swiper-button-prev',  // Custom class for prev button
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    
      >
        {
          data.map(({avatar,name,review},index)=>(
            <SwiperSlide key={index} className='testimonials'>
          <div className="client_avatar">
            <img src={avatar} alt="Avatar1" />
          </div>
          <h5 className='client_names'>{name}</h5>
            <small className='client_review'>
            {review}
            </small>
        </SwiperSlide>
          ))
        }

      </Swiper>
    </section>
  )
}

export default Testimonials