import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../Contexts/AuthContext'
import './Components.css'

const Login = () => {
  const [loginMsg, setLoginMsg] = useState('');
  const navigate = useNavigate();
  const {auth, setAuth} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    let eventUsername = event.target[0].value;
    let eventPassword = event.target[1].value;

    fetch('http://localhost:8080/users')
    .then(rawData => rawData.json())
    .then(users => users.filter(user => {return user.username == eventUsername}))
    .then(foundUser => {
      if (foundUser.length == 0) {
        setLoginMsg('User not found.')
      } else {
        if (foundUser[0].password == eventPassword) {
          setAuth(foundUser[0].id);
          navigate('/inventory');
        } else {
          setLoginMsg('Password is incorrect.')
        }
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