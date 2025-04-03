import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import DetailsContext from '../Contexts/DetailsContext'
import AuthContext from '../Contexts/AuthContext'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Details = () => {
  const { details, setDetails } = useContext(DetailsContext);
  const [newDetails, setNewDetails] = useState({});
  const { auth } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const { first_name, ...rest } = details;
    setNewDetails(rest);
  }, [details]);

  const handleChange = () => {
    editMode == true ? setEditMode(false) : setEditMode(true);
  }

  const handleInput = (event) => {
    const {id, value} = event.target;
    setNewDetails((newDetails) => ({...newDetails, [id]: value}));
  }

  const handleSave = () => {
    const request = newDetails;

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
    .then(() => {
      setEditMode(false)
      setDetails(newDetails);
    })
    .catch(err => console.log(err))
  }

  const handleDelete = () => {
    const requestID = details.id;

    if (confirm(`Select 'OK' to delete ${newDetails.item_name}.`)) {
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
  }

  return(
    <>
      <div className='main'>
        <div className='details'>
          <h2>
            {editMode == true
              ? <>
                  <label htmlFor="item_name">Item Name: </label>
                  <input type="text" maxLength="100" id="item_name" value={newDetails.item_name} onChange={handleInput} />
                </>
              : newDetails.item_name}
          </h2>
          <p><b><i>Description</i></b></p>
          <p>
            {editMode == true
              ? <textarea type="text" maxLength="255" id="description" value={newDetails.description} onChange={handleInput} />
              : newDetails.description}
          </p>
          <p><b><i>Quantity</i></b></p>
          <p>
            {editMode == true
              ? <input type="number" id="quantity" value={newDetails.quantity} onChange={handleInput}/>
              : newDetails.quantity}
          </p>
          {
            editMode == true
              ? <button onClick={handleSave}>Save</button>
              : <></>
          }
          {
            auth == details.user_id
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