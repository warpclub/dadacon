import React from 'react'

function Navbar() {
  document.body.style.backgroundColor='#FFFDD0'
  return (
    <div>
      <header className="text-black bg-[#F7C652] body-font w-full py-3 text-center">

    {/* <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a className="mr-5 hover:text-white hover:cursor-pointer">First Link</a>
      <a className="mr-5 hover:text-white hover:cursor-pointer">Second Link</a>
      <a className="mr-5 hover:text-white hover:cursor-pointer">Third Link</a>
      <a className="hover:text-white hover:cursor-pointer">Fourth Link</a>
    </nav> */}
    <img src="/dumLogo.png" alt="logo" className='inline w-14 h-17' />

</header>
    </div>
  )
}

export default Navbar
