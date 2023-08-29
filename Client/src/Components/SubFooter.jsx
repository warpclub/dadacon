import React from 'react'

export default function SubFooter() {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[#FFD59A]">
    <div className='flex max-[568px]:flex-wrap justify-around w-full xl:w-5/6 mx-auto py-12'>
      <div className='h-40 flex items-center'>
        <img src="/dumFav.png" alt="logo" className='min-[567px]:h-18 mx-auto min-[1047px]:w-52 min-[970]:w-36 w-20 rounded-md mr-10 ml-2'/>
        </div>
        <div className='flex flex-nowrap w-[500px]'>
      <p className='text-black pt-4 min-[698px]:text-base text-[10px] pl-2 pr-4 flex items-center'>The story of the New Delhi's most famous bakery begins in 1996 on a quaint, cobblestone corner in the Connaught Place where Bashir Bakers opened its doors for the first time. The sweet smell of cakes and cookies and bread and pudding tumbled out, wafting down the streets, beckoning all in.</p>
        </div>
      <p className='text-black w-[300px] pt-4 min-[378px]:text-sm text-[10px] pr-2'>
        <span className='text-lg min-[380px]:text-xl font-semibold'>Contact Us<br/>
      </span>
      <img src="/phone-removebg-preview.png" alt="phone" className='h-7 inline'/>
      +91 99998 77430<br/>
      <img src="/location-removebg-preview.png" alt="location"className='inline  h-7' />
      26, Municipal Market, Connaught Place, New Delhi

      </p>
    </div>
    </div>
  )
}
