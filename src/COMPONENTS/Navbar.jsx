import React from 'react'
import "./Book-Store.css"

function Navbar() {
  return (
    <div>
<div className='navbar'>
    <h1 className='navbrand'>MY BOOK STORE </h1>
    <input className='searchbar' type='text'/>
  <button id="searchbtn" type='submit'>Search</button>
     </div>

      
    </div>
  )
}

export default Navbar
