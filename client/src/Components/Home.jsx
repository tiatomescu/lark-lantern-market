import { useState, useEffect } from 'react'
import './Components.css'

const Home = () => {
  const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/items')
        .then(rawData => rawData.json())
        .then(data => setItems(data))
        .catch((err) => console.log("There was an error!", err))
      }, [])

  return (
    <>
      <div className='home'>
      <h2>Vendor Items this Week</h2>
        <div className='item-div'>
          {items.map((item, i) => {
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

export default Home
