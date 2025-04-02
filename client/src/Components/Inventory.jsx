import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router'
import './Components.css'
import AuthError from './AuthError'
import AuthContext from '../Contexts/AuthContext'
import DetailsContext from '../Contexts/DetailsContext'

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const { auth } = useContext(AuthContext);
  const { setDetails } = useContext(DetailsContext);

  useEffect(() => {
    fetch(`http://localhost:8080/items/user/${auth}`)
    .then(rawData => rawData.json())
    .then(data => setInventory(data))
    .catch((err) => console.log("There was an error!", err))
  }, [auth])

  return(
    <>
      <div className='main'>
        <h2>Vendor Inventory</h2>
        <div className='item-div'>
          {inventory.map((item, i) => {
            return(
              <Link to='/details' style={{textDecoration: 'none', color: 'inherit' }} key={i}>
                <div className='item' onClick={() => {setDetails(item)}}>
                  <h3>{item.item_name}</h3>
                  <p>Description: {item.description.slice(0, 100) + "..."}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </Link>
            )})}
            {
              auth == 0
                ? <AuthError />
                : <>
                    <Link to='/add' style={{textDecoration: 'none', color: 'inherit' }}>
                      <div className='item' style={{textAlign: "center"}}>
                        <h1>+</h1>
                        <p>Create an item...</p>
                      </div>
                    </Link>
                  </>
            }
        </div>
      </div>
    </>
  )
}

export default Inventory
