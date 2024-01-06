import React from 'react';
import { NavbarCollapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NewNavbar = () => {
  return (
    <>
      <div className='header mb-4'>
      <div className='brand'>
        <h2><strong>Super<span>.Mall</span></strong></h2>
      </div>
      <div className='nav'>
        <ul>
          <li>
            <Link to="/home" className='link'>Home</Link>
          </li>
          <li>
            <Link to="/prod" className='link'>Products</Link>
          </li>
          <li>
            <Link to="/cart" className='link'>Cart</Link>
          </li>
          <li>
            <Link to="/about" className='link'>About</Link>
          </li>
          <li>
            <Link to="/contact" className='link'>Contact</Link>
          </li>
        </ul>
      </div>
      </div>
      
    </>
  )
}

export default NewNavbar

