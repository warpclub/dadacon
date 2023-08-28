import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Devices.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
const slides=[{
    url:'/SonicSightSunglasses.png'
},
{
    url:'/ChronoNoteWatch.png'
},
{
    url:'/Cubotage.png'
}
,
{
    url:'/Scanosphere.png'
},
{
    url:'/NexTech Briefcase.png'
},
{
    url:'/stealthsyncdatabeacon.png'
}
]

let index

function Devices(){
    
const sendData= (event)=>{
    index=event.target.getAttribute('id')
 }
  return (
    <div className="container">
      <h1 className="text-center text-5xl font-Spy">Our Devices</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {/* {slides.map((slide,index)=>{
            return(
              <SwiperSlide key={index}>
                <Link to='/device'></Link><img src={slide.url} alt="flower" />
              </SwiperSlide>
            )
        })} */}


        <SwiperSlide>
          <Link onClick={sendData} to='/device'><img src={slides[0].url} id='0' alt="slide_image" /></Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link onClick={sendData} to='/device' ><img id='1' src={slides[1].url} alt="slide_image" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to='/device' onClick={sendData} ><img id='2' src={slides[2].url} alt="slide_image" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to='/device' onClick={sendData} ><img id='3' src={slides[3].url} alt="slide_image" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link onClick={sendData} to='/device' ><img id='4' src={slides[4].url} alt="slide_image" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to='/device' onClick={sendData} ><img id='5' src={slides[5].url} alt="slide_image" /></Link>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination  text-purple-500"></div>
        </div>
      </Swiper>
    </div>
  );
}


export default Devices;

export {index}