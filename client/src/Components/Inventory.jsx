import { useState, useEffect, useContext } from 'react'
import './Components.css'
import AuthContext from '../Contexts/AuthContext'

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
   const {auth, setAuth} = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:8080/items/user/${auth}`)
    .then(rawData => rawData.json())
    .then(data => setInventory(data))
    .catch((err) => console.log("There was an error!", err))
  }, [])

  return(
    <>
      <div className='home'>
        <h2>Vendor Inventory</h2>
        <div className='item-div'>
          {inventory.map((item, i) => {
            return(
              <div key={i} className='item'>
                <h3>{item.item_name}</h3>
                <p>Description: {item.description.slice(0, 100) + "..."}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Inventory
