import React,{useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'

function Users() {
  const data=JSON.parse(localStorage.getItem('token'))

const navigate=useNavigate()

  // useEffect(async() => {
  //   // This will only run on initial render
  //   const response = await axios.get('/api/users');
  //   const users = await response.json();
  //   console.log(data);
  //   setNotices(data);
  //   setLoading(false);
  // }, []);
  const [user,setUser]=useState()
  const list=[]
  const [l,setL]=useState()
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get('https://dadacon.onrender.com/user/',{
        headers:{
          'Authorization': 'Bearer '+ data
        }
      });
      setUser(response.data[0].id)
      console.log(response.data)
      console.log(user)
      // ...
    }
    fetchData();
    async function userList(){
      const res = await axios.get('https://dadacon.onrender.com/auth/users/',{
        headers:{
          'Authorization': 'Bearer '+ data
        }
      });
      res.data.forEach((item)=>{
          list.push(item.id);
        })
      for (let i = 1; i <list.length; i++) {
            if (list[i]===user){
              list[i]=null
            }
          }
          
    setLoading(false)
    console.log(list)
    setL(list)
      console.log(res.data)
      
    }

    userList()
  }, []);

  // let username=e.target.id
  // localStorage.setItem(username,JSON.stringify(['Hello']))
  // navigate('/chat')

    const redirect=()=>{
      console.log(user)
        axios.post('https://dadacon.onrender.com/chat/start/',{username:user}, {headers: {
          'Authorization': 'Bearer '+ data
      }
    }
    )
    .then((res)=>{
        console.log(res);
          if(res.status===200){
            navigate('/chat')
          }
        })
       }

  return (
    <div className='text-white py-8'>
      <h1 className='text-center text-3xl min-[470px]:text-5xl font-semibold font-Spy mb-5'>Contact with Other Agents</h1>
            {loading && <Spinner/>}
      <div className="flex flex-col w-1/3 mx-auto ">
<div className="grid grid-cols-1 gap-y-1">
{!loading && l.map((name,i)=>{return(<button key={i} onClick={redirect} id='username' className=" text-2xl p-5 shadow-gray-900/90 rounded-lg shadow-xl bg-gray-800 hover:cursor-pointer hover:bg-gray-600 min-[470px]:text-4xl font-semibold text-white mb-1 text-left ">{name}</button>)})}
</div>
    </div>
    </div>
  )
}

export default Users
