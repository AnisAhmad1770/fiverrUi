import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
            {/* <Link to="/">
                
            </Link> */}
            <span className='text'>fiverr</span>
            <span className='dot'>.</span>
        </div>
        <div className="links">
         <span >FIverr Buisness</span>
         <span >Explore</span>
         <span >Engish</span>
         <span >Become a Seller</span>
         <span >Sign in</span>
         <button>Join</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
