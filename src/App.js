import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import AdminView from './components/AdminView'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path='/registration' element={<Registration />} />
        {isLoggedIn ? (
          <>
            <Route path='/home' element={<Home />} />
            <Route path='/admin' element={<AdminView />} />
            <Route path='/' element={<Navigate to='/home' />} />
          </>
        ) : (
          <Route path='/' element={<Navigate to='/login' />} />
        )}
      </Routes>
    </Router>
  )
}

export default App
