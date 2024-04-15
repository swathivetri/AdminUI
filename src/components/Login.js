import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './Admin.css'

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://192.168.1.150:3201/auth/auth-keycloak',
        {
          realm: 'master',
          clientId: 'node-microservice',
          username: username,
          password: password
        }
      )

      if (response.status === 200) {
        setIsLoggedIn(true)
        navigate('/home')
      } else {
        console.log('Authentication failed')
      }
    } catch (error) {
      console.error('Error during login:', error)
    }
  }

  return (
    <div className='background'>
      <div className='user'>
        <h1>Welcome to Admin Login</h1>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <div className='password-input'>
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className='eye-icon'
            onClick={() => setShowPassword(!showPassword)}
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button onClick={handleLogin}>Login</button>
        <div className='link'>
          <Link to='/registration'>Register for new user</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
