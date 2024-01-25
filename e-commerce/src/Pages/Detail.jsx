import React, { useState } from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./Cart.css"
import Cart from './Cart'

const Detail = () => {

const {id}=useParams()
const [detail, setDetail]=useState({})
console.log(id)



useEffect(()=>{
  fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res)=>res.json())
            .then((json)=>setDetail(json))
}, [id])


  return (
    <>
    <div className='detail'>
      <div className='product-detail' key={detail.id}>
        <img src={detail.image} alt ="produt image"/>
        <h2>{detail.title}</h2>
        <p>${detail.price}</p>
        <p>{detail.description}</p>
        {/* <button onClick={Cart()}>Add to cart</button> */}

      </div>
    </div>
    </>
  )
}

export default Detail