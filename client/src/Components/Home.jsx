import { useState, useEffect } from 'react'
import '../App.css'

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
      <div>
      <h2>Items</h2>
        {items.map((item, i) => {
          return(
            <div key={i}>
              <h3>{item.item_name}</h3>
              <p>Description: {item.description.slice(0, 100) + "..."}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
