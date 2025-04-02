import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import DetailsContext from '../Contexts/DetailsContext'
import AuthContext from '../Contexts/AuthContext'
import './Components.css'

const Login = () => {
  const [loginMsg, setLoginMsg] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    let username = event.target[0].value;
    let password = event.target[1].value;
    let request = {username, password};

    fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })
    .then(res => res.json())
    .then(data => {
      if (data.message === 'Login successful') {
        setLoginMsg(data.message)
        setAuth(data.userId);
        navigate('/inventory');
      } else {
        setLoginMsg(data.message)
      }
    })
  }

  return(
    <>
      <div className="auth">
        <form onSubmit={handleSubmit}>
            <h3>
              <label htmlFor="username">Username: </label>
              <input type="text" id="username" />
              <label htmlFor="password">Password: </label>
              <input type="password" id="password" />
            </h3>
            <button type="submit">Login</button>
        </form>
          Don't have an account? <button onClick={() => {navigate('/register')}}>Register</button>
        <p>{loginMsg}</p>
      </div>
    </>
  )
}

export default Login