import { useNavigate } from 'react-router';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const request = {
      first_name: event.target[0].value,
      last_name: event.target[1].value,
      username: event.target[2].value,
      password: event.target[3].value
    }

    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })
    .then(res => res.json())
    .then(data => {
      if(data.message) {
        alert(data.message)
      }
    })
    .then(() => navigate('/login'))
    .catch(err => console.log(err))
  }

  return(
    <>
      <div className="auth-div">
        <form onSubmit={handleSubmit}>
          <div>
            <h3>
              <label htmlFor="first_name">First Name: </label>
              <input type="text" id="first_name" />
              <label htmlFor="last_name">Last Name: </label>
              <input type="text" id="last_name" />
              <label htmlFor="username">Username: </label>
              <input type="text" id="username" />
              <label htmlFor="password">Password: </label>
              <input type="password" id="password" />
            </h3>
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </>
  )
}

export default Register