import { useEffect, useState } from "react";
import React from 'react'
import Spinner from './Spinner'


function Notices() {
  const [notices,setNotices]=useState()
  const [loading,setLoading]=useState(true)
  // useEffect(async() => {
  //   // This will only run on initial render
  //   const response = await axios.get('/api/notices');
  //   const data = await response.json();
  //   console.log(data);
  //   setNotices(data);
  //   setLoading(false);
  // }, []);
  return (
    <div className='text-white py-8'>
      <h1 className='text-center text-3xl min-[470px]:text-5xl font-semibold font-Spy mb-5'>Orders From Boss</h1>
      {/* {loading && <Spinner/>} */}
{!loading && notices.map((n,i)=>{return (
<div key={i} className="flex flex-col w-3/4 mx-auto">
<div className="grid grid-cols-1 grid-rows-3">
<div className="flex flex-nowrap justify-between">
  <span>Tuesday,29 Aug,2023</span><span>Time</span>
</div>
<div>Title</div>
<div>Content of notice</div>
</div>
</div>)})}

<div className="flex flex-col w-2/3 mx-auto bg-gray-800 p-10 rounded-lg shadow-xl shadow-gray-900/90">
<div className="grid grid-cols-1 grid-rows-3">
<div className="flex flex-nowrap justify-between mb-4 min-[470px]:text-lg text-base">
  <span>Tuesday,29 Aug,2023</span><span>Time</span>
</div>
<div className="text-2xl min-[470px]:text-4xl font-bold font-Spy text-purple-500 mb-1">Title</div>
<div className="min-[470px]:text-lg text-base">Content of notice</div>
</div>
</div>
    </div>

  )
}

export default Notices
