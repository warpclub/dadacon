import { useEffect, useState } from "react";
import React from 'react'
import Spinner from './Spinner'
import axios from "axios";


function Notices() {
  const data=JSON.parse(localStorage.getItem('token'))
  const [notices,setNotices]=useState()
  const [loading,setLoading]=useState(true)

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get('https://dadacon.onrender.com/bulletin/',{
          headers: {
            'Authorization': 'Bearer '+ data
        }});
        setNotices(response.data);
        setLoading(false);
      }
      fetchData();}, []);

  return (
    <div className='text-white py-8'>
      <h1 className='text-center text-3xl min-[470px]:text-5xl font-semibold font-Spy mb-5'>Orders From Boss</h1>
      {loading && <Spinner/>}
{!loading && notices.map((n,i)=>{return (
  <div key={i} className="flex flex-col w-2/3 mx-auto bg-gray-800 p-10 rounded-lg shadow-xl shadow-gray-900/90">
<div className="grid grid-cols-1 ">
<div className="flex flex-nowrap justify-between mb-4 min-[470px]:text-lg text-base">
  <span>{new Date(n.created_at).toString().slice(0,15)}</span><span>{new Date(n.created_at).toTimeString().slice(0,8)}</span>
</div>
<div className="text-2xl min-[470px]:text-4xl font-bold font-Spy text-purple-500 mb-1">{n.title}</div>
<div className="min-[470px]:text-lg text-base">{n.detail}</div>
</div>
</div>)})}

    </div>

  )
}

export default Notices
