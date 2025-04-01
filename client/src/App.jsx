import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import Inventory from './Components/Inventory'
import Details from './Components/Details'
import AuthContext from './Contexts/AuthContext'
import DetailsContext from './Contexts/AuthContext'

function App() {
  const [auth, setAuth] = useState(0);
  console.log(auth, setAuth);
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  return (
    <>
     <AuthContext.Provider value={{auth, setAuth}}>
        {/* <DetailsContext.Provider value={{details, setDetails}}> */}
        {/* something about detailscontext makes auth want to DIE DRAMATICALLY */}
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
          </Routes>

        {/* </DetailsContext.Provider> */}
      </AuthContext.Provider>
    </>
  )
}

export default App
