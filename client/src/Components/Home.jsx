import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router'
import './Components.css'
import DetailsContext from '../Contexts/DetailsContext'

const Home = () => {
  const [items, setItems] = useState([]);
  const {setDetails} = useContext(DetailsContext);

  useEffect(() => {
      fetch('http://localhost:8080/items')
      .then(rawData => rawData.json())
      .then(data => setItems(data))
      .catch((err) => console.log("There was an error!", err))
    }, [])

  const handleOverflow = (description) => {
    return description.length > 100 ? description.slice(0, 100) + "..." : description;
  }

  return (
    <>
      <div className='main'>
      <h2>Vendor Items this Week</h2>
        <div className='item-div'>
          {items.map((item, i) => {
            return(
              <Link to='/details' style={{textDecoration: 'none', color: 'inherit' }} key={i}>
                <div className='item' onClick={() => setDetails(item)}>
                  <h3>{item.first_name}'s {item.item_name}</h3>
                  <p>Description: {handleOverflow(item.description)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
