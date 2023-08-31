import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import { useAtomValue } from 'jotai'
import { token, user } from '../../store'

function Users() {
  // const data=JSON.parse(localStorage.getItem('token'))
  const userToken = useAtomValue(token)
  const loggedInUser = useAtomValue(user)
  const [contacts, setContacts] = useState([])
  const [newContact, setNewContact] = useState('')
  const [loading, setLoading] = useState(true)
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
    axios.post('https://dadacon.onrender.com/chat/start/', {
      'username': username
    },
    {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    .then((res) => {
      if (res.status == 200) {
        console.log(res.data)
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
      <div className="flex flex-col w-1/3 mx-auto ">
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
        <div>
          <input
            type='text'
            value={newContact}
            placeholder='Username'
            onChange={(e) => setNewContact(e.target.value)}
            className='text-black'
          />
          <input type='submit' value='Add New Contact' onClick={() => addNewContact(newContact)} />
        </div>
      </div>
    </div>
  )
}

export default Users
