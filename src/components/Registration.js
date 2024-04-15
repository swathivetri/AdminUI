import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setCountry] = useState('')
  const [lastName, setCustomerId] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleRegistration = async () => {
    try {
      const response = await axios.post(
        'http://192.168.1.150:3201/user/register',
        {
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName,
          email: email
        }
      )
      console.log('User registered successfully:', response.data)
      navigate('/login')
    } catch (error) {
      console.error('Error during registration:', error)
    }
  }

  return (
    <div className='backimage'>
      <div className='registration'>
        <h1>Registration</h1>
        <input
          type='text'
          placeholder='first_name'
          value={firstName}
          onChange={e => setCountry(e.target.value)}
        />
        <br />
        <input
          type='text'
          placeholder='last_name'
          value={lastName}
          onChange={e => setCustomerId(e.target.value)}
        />
        <br />
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <input
          type='text'
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <button onClick={handleRegistration}>Register</button>
      </div>
    </div>
  )
}

export default Registration
