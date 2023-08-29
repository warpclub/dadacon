import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function DadaHero() {
  return (
    <div className="text-white text-4xl min-[512px]:text-7xl font-extrabold flex flex-col justify-center bg-[url('/bgcompressed.png')] h-[300px] pb-3 pl-2 py-4 gap-y-2">
      <span>Shrouded in Secrecy, Forging Tomorrow
</span>
    <div className=" text-red-500 text-5xl min-[455px]:text-7xl ">
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
    </div>
  )
}

export default DadaHero
