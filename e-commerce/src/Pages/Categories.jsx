import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Cart.css"

const Categories = () => {
  const [category, setCategory]= useState([])
  const [showCats, setShowCats]= useState(false)
  const [products, setProducts]= useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategory(json))
  },[])

  const fetchProducts=(e)=>{
    fetch(`https://fakestoreapi.com/products/categories/${e}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
            setShowCats(true)
  }


  return (
    <>
    <div className='category'>
      <div className='category-holder' >
        {
          showCats==false?category.map((e)=>(
            <div key={e} className='category-item' onClick={()=>fetchProducts(e)}>
              <h2>{e}</h2>
            </div>
          )):products.map((product)=>{
            return(
              <Link to={`/detail/${product.id}`} key={product.id} className='product'>
              <div className="imgDiv">
              <img src={product.image}/>
              </div>
            
              <div className="hDiv">
              <h3>{product.title}</h3>
              </div>
              <p>${product.price}</p>
            </Link>
            )
          })
        }
        {showCats && <button onClick={()=>setShowCats(false)}>back</button>}

      </div>

    </div>
    </>
  )
}

export default Categories