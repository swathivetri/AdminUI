import React from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

const Home = () => {
  return (
    <div className='img'>
      <div className='text'>
        <h1>Welcome to the Admin Panel</h1>
        <div className='button-container'>
          <Link to='/admin'>
            <button className='button'>View Customer Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
