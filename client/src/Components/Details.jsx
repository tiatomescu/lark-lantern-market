import { useContext, useEffect, useState } from 'react'
import DetailsContext from '../Contexts/DetailsContext'

const Details = () => {
  const {details} = useContext(DetailsContext);

  return(
    <>
      <div className='main'>
        <div className='details'>
          <h2>{details.item_name}</h2>
          <p><b><i>Description</i></b></p> <p>{details.description}</p>
          <p><b><i>Quantity</i></b></p> <p>{details.quantity}</p>
        </div>
      </div>
    </>
  )
}

export default Details;