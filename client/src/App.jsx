import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import Inventory from './Components/Inventory'
import AuthContext from './Contexts/AuthContext'

function App() {
  const [auth, setAuth] = useState(0);
  const navigate = useNavigate();

  return (
    <>
     <AuthContext.Provider value={{auth, setAuth}}>
        <header>
          <h1>Lark & Lantern Market</h1>
          {
            auth > 0
              ? <button onClick={() => {
                setAuth(0)
                navigate('/')
              }}>Logout</button>
              : <Link to='/login'><button>Vendor Login</button></Link>
          }
          <Link to='/'>
            <button>Home</button>
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </AuthContext.Provider>
    </>
  )
}

export default App
