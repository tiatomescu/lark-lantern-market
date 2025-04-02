import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import Inventory from './Components/Inventory'
import Details from './Components/Details'
import Add from './Components/Add'
import AuthContext from './Contexts/AuthContext'
import DetailsContext from './Contexts/DetailsContext'

function App() {
  const [auth, setAuth] = useState(0);
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  return (
    <>
    <DetailsContext.Provider value={{details, setDetails}}>
     <AuthContext.Provider value={{auth, setAuth}}>
          <header>
            <span>
              <h1>Lark & Lantern Market</h1>
              <p>A Farmers market for enchanted goods, fresh wonders, and mystical delights. Every Saturday at Downtown Plaza, from 9am to 2pm!</p>
            </span>
            <span className='nav-span'>
              {
                auth > 0
                  ? <>
                      <button onClick={() => {
                        setAuth(0)
                        navigate('/')}}>Logout</button>
                      <button onClick={() => {navigate('/inventory')}}>My Inventory</button>
                    </>
                  : <Link to='/login'><button>Vendor Login</button></Link>
              }
              <Link to='/'>
                <button>Home</button>
              </Link>
            </span>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/details" element={<Details />} />
            <Route path="/add" element={<Add />} />
          </Routes>

        </AuthContext.Provider>
      </DetailsContext.Provider>
    </>
  )
}

export default App
