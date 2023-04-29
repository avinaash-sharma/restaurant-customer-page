import React from 'react'
import CartItem from './CartItem'

const index = (data, removeItem) => {
  
  return (
  <CartItem data={data.data} removeItem={removeItem} />
  )
}

export default index