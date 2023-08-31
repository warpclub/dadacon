import React, { useEffect, useState } from 'react'


const info=[
    {
        src:'/videos/SonicSight Sunglasses.mp4',
        title:'SonicSight Sunglasses',
        description:'Elegant sunglasses with concealed cameras and microphones, featuring augmented reality overlays for amplified intelligence gathering. ',
        bullets:['Stylish sunglasses with inconspicuous built-in cameras and microphones.',
            'Augmented reality overlays for enhanced intelligence gathering.',
            "Seeing More Than What Meets the Eye.",
            ],
        color:'Black',
        size:'Small'

    },{
        
        src:'/videos/ChronoNote Wristwatch.mp4',
        title:'ChronoNote Wristwatch',
        description:'Classic wristwatch with a hidden digital display for live location tracking and secure messaging via invisible ink technology and encrypted real-time updates.',
        bullets:['Classic wristwatch design concealing a high-tech digital display.',
            'Secure messaging through invisible ink technology on the watch face.',
            'Real-time situational updates via encrypted notifications.',
            'Live-Location tracking',
            "Time waits for no one, but we do.",
            ],
        color:'Gold & Brown',
        size:'Small'

    },{
        
        src:'/videos/cubotage.mp4',
        title:'Cubeotage Emissary',
        description:'An inconspicuous cube for covert operations that opens automatically to disrupt signals, leaving no trace behind.',
        bullets:['An inconspicuous cube for covert operations',
            'Automatically opens to execute precise signal disruption.',
            'Leaves no trace after self-erasure.',
            "Chaos Unleashed, Signals Silenced.",
            ],
        color:'Grey & Blue',
        size:'Small'

    },{
        
        src:'/videos/scanosphere.mp4',
        title:'Scanosphere Scanner',
        description:'Pocket-sized portable scanner that digitizes documents via LIDAR, embedding hidden watermarks for agent identification.',
        bullets:['Portable scanner resembling a pocket-sized book.',
            'Captures and digitizes documents via LIDAR while providing a secure copy.',
            'Utilizes AI to create hidden watermarks for agent identification.',
            "Uncover Truths, Capture Dimensions."
            ],
        color:'Black & Yellow',
        size:'Small'

    },{
        
        src:'/videos/nexttechbriefcase.mp4',
        title:'NexTech Briefcase',
        description:' A high-end leather briefcase with integrated biometric lock, concealing a secure communication hub and holographic document projection for covert presentations',
        bullets:['Crafted from high-end leather, embodying sophistication and quality.',
        'Enhanced security through an integrated biometric lock.',
        'Can be used for storage of documents etc.',
        "Carrying Secrets, Delivering Solutions.",],
        size:'Black',
        color:'Large',

    },{
        
        src:'/videos/pendrive.mp4',
        title:'StealthSync Data Beacon',
        description:' Disguised as a USB drive, it wields advanced tech for undetectable data transfer. Auto-wipes post-transmission ensure security. "Sync in Stealth, Transmit in Silence.',
        bullets:['Disguised as a USB drive equipped with advanced tech.',
            'Undetectable data transfer for covert operations. ',
            'Auto-wipes data post-transmission. ',
            'App-enabled encryption ensures security.', 
            "Sync in Stealth, Transmit in Silence.",
            ],
        color:'Black & Red',
        size:'Small'
        
    }
]

function Device() {
   
const ind=Number(JSON.parse(localStorage.getItem('device_index')))
    const [Btn,switchBtn]=useState(0)

const clickDes=()=>{
        switchBtn(0)
    }
const clickFet=()=>{
        switchBtn(1)
    }

  return (
    <div className='text-white'>
      <section className=" body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap-reverse">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h1 className="text-cyan-500 text-3xl title-font font-medium font-Spy mb-4">{info[ind].title}</h1>
        <div className="flex mb-4">
          <a onClick={clickDes} className={`flex-grow border-b-2  ${Btn===0?'border-cyan-400 text-cyan-400':'border-gray-300'} py-2 text-lg px-1 hover:cursor-pointer`}>Description</a>
          <a onClick={clickFet} className={`flex-grow border-b-2  ${Btn!==0?'border-cyan-400 text-cyan-400':'border-gray-300'} py-2 text-lg px-1 hover:cursor-pointer`}>Features</a>
        </div>
        <div className='h-[200px]'>
      {Btn===0?<><p className="leading-relaxed mb-4">{info[ind].description}</p><div className="flex border-t border-gray-200 py-2">
        <span className="text-white">Color</span>
        <span className="ml-auto text-white">{info[ind].color}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
            <span className="text-white">Size</span>
            <span className="ml-auto text-white">{info[ind].size}</span>
            </div></>:<>
            <ul className='list-disc'>
            {info[ind].bullets.map((bullet,i)=>{
                return(
                    <li key={i}>{bullet}</li>
                    )
                })}
                </ul>
            </>}
            </div>
      </div>
      <video autoPlay='autoplay' muted='muted' loop alt="ecommerce" className="lg:w-1/2 w-full h-[412px] object-cover object-center rounded-lg" ><source src={info[ind].src} /></video>

    </div>
  </div>
</section>
    </div>
  )
}

export default Device
