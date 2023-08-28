import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Hero() {
  const slides = [
    {
      url: '/hero1.jpg',
    },
    {
      url: '/hero2.jpg',

    },
    {
      url: '/hero3.jpg',

    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    
    return (<>
      <div className='h-[65vh] md:h-[65vh] w-full  relative group border-b-8 border-black'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='flex w-full h-full flex-col gap-y-7 bg-no-repeat bg-center bg-cover duration-500 justify-center items-center'
          
        ></div>
        {/* Left Arrow */}
        <div className=' group-hover:block absolute top-[50%] -translate-x-0 min-[600px]:hover:-translate-x-3  translate-y-[-50%] sm:left-10 text-2xl rounded-full sm:p-2 bg-transparent text-white cursor-pointer left-0 '>
          <BsChevronCompactLeft onClick={prevSlide} size={64} />
        </div>
        {/* Right Arrow */}
        <div className='group-hover:block absolute top-[50%] -translate-x-0 min-[600px]:hover:translate-x-3 translate-y-[-50%] sm:right-10 right-0 text-2xl rounded-full sm:p-2 bg-transparent text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={64} />
        </div>
        <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer px-6 py-3'

          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Hero
