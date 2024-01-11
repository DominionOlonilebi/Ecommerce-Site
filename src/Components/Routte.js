import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Prod from './Prod'
import Cart from './Cart'
import Home from './Home'
import About from './About'
import Contact from './Contact'


const Routte = ( {addtocart, cartItem, setCartItem}) => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
        <Route path='/prod' element={<Prod addtocart={addtocart}/>}/>
        <Route path='/cart' element={<Cart addtocart={addtocart} cartItem={cartItem} setCartItem={setCartItem} />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </>
  )
}

export default Routte
