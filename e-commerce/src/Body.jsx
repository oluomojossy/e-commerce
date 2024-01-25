import { useState, useEffect } from 'react'
import './App.css'
import Header from "./Header"
import { Link } from 'react-router-dom'
const url = 'https://fakestoreapi.com/products'


function Body() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setProducts(res)
      })
      .catch((err)=>{
        setProducts(err)
      })Z                                                                              
  })
  // useEffect(()=>{
  //   fetch('https://fakestoreapi.com/products')
  //           .then((res)=>res.json())
  //           .then((json)=>setProducts(json))
  // },[])



  return (
    <>
      <div className="body">
        {/* <Header/> */}
        <div className="heroPage"></div>
        <main className='MainContainer'>
          {
            products.map((product) => {
              return (
                <Link to={`/detail/${product.id}`} key={product.id} className='product'>
                  <div className="imgDiv">
                    <img src={product.image} />
                  </div>

                  <div className="hDiv">
                    <h3>{product.title}</h3>
                  </div>
                  <p>$ {product.price}</p>
                  <button>Add to cart</button>

                </Link>
              )
            })
          }

        </main>

      </div>
    </>
  )
}

export default Body
