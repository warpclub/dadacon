import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import InfiniteSpinner from './InfiniteSpinner'
import { useAtomValue } from 'jotai'
import { token, user } from '../../store'

function Users() {
  // const data=JSON.parse(localStorage.getItem('token'))
  const userToken = useAtomValue(token)
  const loggedInUser = useAtomValue(user)

  const [vis,setVis]=useState(false)
  const[ mes,setMes]=useState('')
  const [contacts, setContacts] = useState([])
  const [newContact, setNewContact] = useState('')
  const [loading, setLoading] = useState(true)
  const [infinte,setInfinite]=useState(false)
  // console.log(loggedInUser[0].id)

  const navigate = useNavigate()

  const fetchChats = () => {
    axios.get('https://dadacon.onrender.com/chat/', {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
      .then((res) => {
        setContacts(res.data)
        setLoading(false)
      })
  }

  useEffect(() => fetchChats(), [])

  const redirect = (id) => {
    localStorage.setItem('m', JSON.stringify(['Hello']))
    navigate(`/chat/${id}/`)
  }

  const addNewContact = (username) => {
    setVis(false)
    setInfinite(true)
    axios.post('https://dadacon.onrender.com/chat/start/', {
      'username': username
    },
    {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    .then((res) => {
      setVis(true)
      setInfinite(false)
      if (res.status == 200) {
        console.log(res.data)
        setMes(res.data.message)
        // window.location.reload()
        fetchChats()
      }
    })
    .catch((err) => console.log(err))
  }
  


  return (
    <div className='text-white py-8'>
      <h1 className='text-center text-3xl min-[470px]:text-5xl font-semibold font-Spy mb-5'>
        Your Contacts
      </h1>
      {loading && <Spinner />}
      <div className="flex flex-col w-2/3 min-[789px]:w-1/3 mx-auto ">
        <div className="grid grid-cols-1 gap-y-1">
          {/* <button onClick={redirect} id='username' className=" text-2xl p-5 shadow-gray-900/90 rounded-lg shadow-xl bg-gray-800 hover:cursor-pointer hover:bg-gray-600 min-[470px]:text-4xl font-semibold text-white mb-1 text-left ">admin</button>
          <button onClick={redirect} id='username' className=" text-2xl p-5 shadow-gray-900/90 rounded-lg shadow-xl bg-gray-800 hover:cursor-pointer hover:bg-gray-600 min-[470px]:text-4xl font-semibold text-white mb-1 text-left ">agent-beta</button> */}
          {
            contacts.map((contact) => (
              <button onClick={() => redirect(contact.id)} key={contact.id} className=" text-2xl p-5 shadow-gray-900/90 rounded-lg shadow-xl bg-gray-800 hover:cursor-pointer hover:bg-gray-600 min-[470px]:text-4xl font-semibold text-white mb-1 text-left ">
                {
                  loggedInUser[0].id === contact.initiator.id ?
                    contact.receiver.username : contact.initiator.username
                }
              </button>
            ))
          }



        </div>
        {!loading && <div className='flex flex-wrap w-full justify-evenly mt-2 items-center gap-y-2 border-transparent'>
          <input
            type='text'
            value={newContact}
            placeholder='Agent name'
            onChange={(e) => setNewContact(e.target.value)}
            className='text-black p-2 focus:outline-none rounded-sm'
          />
          <input type='submit' className='hover:cursor-pointer hover:text-black border text-lg font-semibold bg-purple-500 rounded-md px-2 mb-3 border-transparent' value='Add New Contact' onClick={()=>addNewContact(newContact)} />
        </div>}
        {infinte && <InfiniteSpinner/>}
        {vis ? <span className='text-red-400 block'>{mes}</span> : ''}

      </div>
    </div>
  )
}

export default Users
