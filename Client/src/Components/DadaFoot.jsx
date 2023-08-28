import React from 'react'

function DadaFoot(props) {
    
  return (
    <div className={`w-full bg-black text-center text-white mt-4 py-3 font-semibold ${props.style}`}>
      Designed by <span className='text-cyan-300'>WarP</span>
      <img src="/mainLogo.jpg" alt="mainLogo" className='inline h-10'/>
    </div>
  )
}

export default DadaFoot
