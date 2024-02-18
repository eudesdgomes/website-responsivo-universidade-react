import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <h4>{val.name}</h4>
          <h1>
            <span>R$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className='outline-btn'>ASSINAR</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard
