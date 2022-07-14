import React from 'react'
import { orders } from './orders'

const App21 = () => {
  return (
    <div>
      {
        orders.map(order => {
          return (
            <div>
              <img src={order.img} alt="" />
              <h1>{order.description}</h1>
              <h1>{order.id}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default App21