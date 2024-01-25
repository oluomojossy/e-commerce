import { useState, useEffect } from 'react'
import './App.css'
import Header from "./Header"
// import Body from "./Body"
import Home from './Pages/Home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Home from './Pages/Home';
import Layout from './Layout'
import Categories from './Pages/Categories'
import Cart from './Pages/Cart'
import Detail from './Pages/Detail';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/category",
        element:<Categories/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/detail/:id",
        element:<Detail/>
      }
    ]
  },
]);





function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App


