import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import DetailsContext from '../Contexts/DetailsContext'
import AuthContext from '../Contexts/AuthContext'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Details = () => {
  const { details, setDetails } = useContext(DetailsContext);
  const { auth } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false)
  const navigate = useNavigate();

  const handleChange = () => {
    editMode == true ? setEditMode(false) : setEditMode(true);
  }

  const handleInput = (event) => {
    const {id, value} = event.target;
    setDetails((details) => ({...details, [id]: value}));
  }

  const handleSave = () => {
    const request = details;

    fetch(`http://localhost:8080/items/${details.id}`, {
      method: 'PATCH',
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
    .then(() => setEditMode(false))
    .catch(err => console.log(err))
  }

  const handleDelete = () => {
    const requestID = details.id;

    fetch(`http://localhost:8080/items/${requestID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.message) {
        alert(data.message)
      }
    })
    .then(() => {navigate('/inventory')})
    .catch(err => console.log(err))
  }

  return(
    <>
      <div className='main'>
        <div className='details'>
          <h2>
            {editMode == true
              ? <>
                  <label htmlFor="item_name">Item Name: </label>
                  <input type="text" id="item_name" value={details.item_name} onChange={handleInput} />
                </>
              : details.item_name}
          </h2>
          <p><b><i>Description</i></b></p>
          <p>
            {editMode == true
              ? <textarea type="text" id="description" value={details.description} onChange={handleInput} />
              : details.description}
          </p>
          <p><b><i>Quantity</i></b></p>
          <p>
            {editMode == true
              ? <input type="number" id="quantity" value={details.quantity} onChange={handleInput}/>
              : details.quantity}
          </p>
          {
            editMode == true
              ? <button onClick={handleSave}>Save</button>
              : <></>
          }
          {
            auth !== 0
              ? <>
                  <FormGroup>
                    <FormControlLabel control={<Switch label="Edit" color="default" checked={editMode} onChange={handleChange}/>} label="Edit" />
                  </FormGroup>
                  <button onClick={handleDelete}>Delete Item</button>
                </>
              : <></>
          }
        </div>
      </div>
    </>
  )
}

export default Details;