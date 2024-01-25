import React, { useState } from 'react'
import "./Cart.css"
import { useContext } from 'react'
import { Context } from '../useContext/Context'

const Cart = () => {
  const val = useContext(Context)
  console.log(val)
  const [ Add, setAdd]=useState[0]
  
  return (
   <div className='cart-page'>
    <div className='cart-item'>
      <div className='product'>
       {Add}
      </div>
    </div>
   </div>
  )
}

export default Cart