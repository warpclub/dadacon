import React from 'react'

function Navbar() {
  function changeFavicon(src) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
     document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
   }
   changeFavicon('/public/dumFav.png');
  document.title='Bashir Bakers'
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
    <img src="/dumLogo.png" alt="logo" className='inline w-36 h-18 rounded-md' />

</header>
    </div>
  )
}

export default Navbar
