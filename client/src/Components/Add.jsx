import { useContext } from 'react'
import { useNavigate } from 'react-router';
import AuthContext from '../Contexts/AuthContext'
import AuthError from './AuthError'

const Add = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const request = {
      user_id: auth,
      item_name: event.target[0].value,
      description: event.target[1].value,
      quantity: event.target[2].value,
    }

    fetch('http://localhost:8080/items', {
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
    .then(() => navigate('/inventory'))
    .catch(err => console.log(err))
  }

  return(
    <>
      <div className='main'>
        {
          auth == 0
          ? <AuthError />
          : <>
              <div className="auth">
                <form onSubmit={handleSubmit}>
                  <div>
                    <h3>
                      <label htmlFor="item_name">Item Name: </label>
                      <input type="text" id="item_name" />
                      <label htmlFor="description">Description: </label>
                      <textarea type="text" id="description" />
                      <label htmlFor="quantity">Quantity: </label>
                      <input type="number" id="quantity" />
                    </h3>
                  </div>
                  <button type="submit">Create Item</button>
                </form>
              </div>
            </>
        }
      </div>
    </>
  )
}

export default Add