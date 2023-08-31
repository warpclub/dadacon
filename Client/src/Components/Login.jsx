import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { user, token } from '../../store';
import Spinner from './Spinner'

const Login = ({ sendData }) => {
  document.title = 'Login'
  const navigate = useNavigate()

  const [loggedInUser, setUser] = useAtom(user)
  const [userToken, setToken] = useAtom(token)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    // username: '',
    email: '',
    password: '',
    // confirmPassword: ''
  })
  const [vis, setVis] = useState(0)

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = {}
    // if(!formData.username.trim()) {
    //     validationErrors.username = "username is required"
    // }

    if (!formData.email.trim()) {
      validationErrors.email = "Username is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Username is not valid"
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters"
    }

    // if (formData.confirmPassword !== formData.password) {
    //   validationErrors.confirmPassword = "Password not matched"
    // }

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true)
      axios.post('https://dadacon.onrender.com/auth/login/', { username: formData.email, password: formData.password }).then((res) => {
        // console.log(res.status)
        if (res.status === 200) {
          let token = res.data.token
          setToken(token)
          localStorage.setItem('token', JSON.stringify(token))
          // console.log(res)
          navigate('/dada')

          axios.get('https://dadacon.onrender.com/user/', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err))
        }
      }).catch((errors) => {
        setLoading(false)
        setVis(1)
      })
    }

  }

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen text-white bg-[url('/loginBg.jpg')] ">
      <form onSubmit={handleSubmit} className=' h-[310px] shadow-2xl shadow-gray-300/40  w-96 bg-black/80 grid grid-cols-1 grid-rows-3 gap-y-3 rounded-lg p-5'>

        <div>
          <label className='block font-semibold '>Email</label>
          <input
            className='w-full p-1 text-black'
            type="email"
            name="email"
            placeholder='example@gmail.com'
            autoComplete='off'
            onChange={handleChange}
          />
          {errors.email && <span className='text-red-400'>{errors.email}</span>}
        </div>
        <div>
          <label className='block font-semibold '>Password</label>
          <input
            className='w-full p-1 text-black'
            type="password"
            name="password"
            placeholder='******'
            onChange={handleChange}
          />
          {errors.password && <span className='text-red-400'>{errors.password}</span>}
        </div>
        {/* <div>
          <label className='block font-semibold'>Confirm Password</label>
          <input
            className='w-full p-1 text-black'
            type="password"
            name="confirmPassword"
            placeholder='******'
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className='text-red-400'>{errors.confirmPassword}</span>}
        </div> */}
        <div className='flex flex-col '>
          <button className='bg-purple-600 w-full font-semibold text-white hover:bg-[#2980b9] rounded-lg h-14' type="submit">Submit</button>
          {vis ? <span className='text-red-400 block'>Access denied</span> : ''}
        </div>
      </form>
      {loading && <Spinner />}

    </div>

  );
};

export default Login;