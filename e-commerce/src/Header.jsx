import { NavLink } from "react-router-dom"
import "./Header.css"



function Header(){
    return(
        <>
        <div className="header">
            <h3>BIG JOE</h3>

           <div className="nav">
           <NavLink to="/" className={({isActive})=>
        isActive ? "active" : "inactive"}>Home</NavLink >
           <NavLink to="/category" className={({isActive})=>
        isActive ? "active" : "inactive"}>Category</NavLink >
           <NavLink to="/cart" className={({isActive})=>
        isActive ? "active" : "inactive"}>Cart: 0</NavLink >
{/* 
            <NavLink to="/category">Categories</NavLink >
            <NavLink to="/cart">Cart</NavLink > */}
           </div>

            {/* <div className="Toggle"> */}
            <label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
            {/* </div> */}

        </div>
        </>
    )
}




export default Header