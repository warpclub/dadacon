import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function DadaHero() {
  return (
    <div className=" text-white text-7xl flex items-end pb-3 pl-2 font-extrabold bg-[url('/bgcompressed.png')] h-[300px]">

          <Typewriter
            words={['Unseen.', 'Unheard.', 'Unmatched.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1000}
          />

    </div>
  )
}

export default DadaHero
