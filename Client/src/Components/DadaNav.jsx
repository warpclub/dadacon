import React from 'react'
import { Link } from 'react-router-dom'


function DadaNav() {
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
   changeFavicon('/dadaLogo.png');
  document.body.style.backgroundImage='linear-gradient(to bottom,#00004d,#adbed9)'
  document.title='DADA-CON'
  return (
    <div>
      <header className="text-gray-600 bg-purple-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2  flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
   <img src="/dadaLogo.png" alt="dadaLogo" className='h-16 w-16'/>
      <Link to='/dada' className="ml-3 text-3xl font-semibold font-Spy hover:cursor-pointer">DADA-CON</Link>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-white justify-center">
      <Link className="mr-5 hover:cursor-pointer hover:text-gray-900" to='/dada/notice'>Notices</Link>
      {/* <Link className="mr-5 hover:text-gray-900 hover:cursor-pointer">Second Link</Link> */}
      <Link className="mr-5 hover:text-gray-900 hover:cursor-pointer" >Chat Room</Link>
    </nav>
    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
    </button> */}
  </div>
</header>
    </div>
  )
}

export default DadaNav
