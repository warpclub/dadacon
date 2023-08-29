import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';


function DadaNav() {
const data=JSON.parse(localStorage.getItem('token'))

async function fetchData() {
  // You can await here
  const response = await axios.get('https://dadacon.onrender.com/user/',{
    headers:{
      'Authorization': 'Bearer '+ data
    }
  });
  setUser(response.data.username)
  console.log(response.data)
  console.log(user)
  // ...
}

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


   const navigate=useNavigate()

   const handleLogout=()=>{
    axios.post('https://dadacon.onrender.com/auth/logout/',{}, {headers: {
      'Authorization': 'Bearer '+ data
  }}).then((res)=>{
    console.log(data);
      console.log(res.status)
      if(res.status===204){
        localStorage.clear()
        navigate('/login')
      }
    })
   }

  document.body.style.backgroundImage='linear-gradient(to bottom,#00004d,#adbed9)'
  document.title='DADA-CON'
  return (
    <div>
      <header className="text-gray-600 bg-purple-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2  flex-row items-center justify-between">
    <a className="flex title-font font-medium items-center text-gray-900 mb-0 max-[456px]:mx-auto">
   <img src="/dadaLogo.png" alt="dadaLogo" className='min-[410px]:h-16 h-12'/>
      <Link to='/dada' className="ml-3 text-lg min-[480px]:text-3xl font-semibold font-Spy hover:cursor-pointer pr-2">DADA-CON</Link>
    </a>
    <nav className="md:ml-auto max-[456px]:mx-auto flex flex-wrap items-center text-white justify-center">
      <Link className="mr-5 hover:cursor-pointer hover:text-gray-900" to='/notice'>Notices</Link>
      <Link to='/user' className="mr-5 hover:text-gray-900 hover:cursor-pointer" >Agents</Link>
      {/* <Link to='/chat' className="mr-5 hover:text-gray-900 hover:cursor-pointer" >Chat Room</Link> */}
      <Link onClick={handleLogout} className=" hover:cursor-pointer bg-white text-blue-500 border border-blue-500 px-2 py-1 rounded-md hover:bg-cyan-500 hover:text-white hover:border-white" >Logout</Link>
    </nav>

  </div>
</header>
    </div>
  )
}

export default DadaNav
