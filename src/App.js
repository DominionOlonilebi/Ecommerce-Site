import React, { useState } from 'react';
import './App.css';
import PayPalBtns from './Components/PayPalBtns';
import Checkout from './Components/Checkout';
import NewNavbar from './Components/NewNavbar';
import Products from './Components/Products';
import Footer from './Components/Footer';
import {BrowserRouter as Router } from 'react-router-dom';
import Routte from './Components/Routte';

const App = () => {
  const [cartItem, setCartItem]= useState([]);
const addtocart =(prod) => {
const exsit =cartItem.find((x) =>{
  return x.id === prod.id;
})
if (exsit) {
  alert("This Product has Already been Added to Cart")
}else{
  setCartItem([...cartItem, {...prod, quantity:1}])
}
console.log(setCartItem)
}

  return (
    <>
    <Router>
    <NewNavbar/>
    <Routte addtocart={addtocart} cartItem={cartItem} setCartItem={setCartItem} />
      <Footer/>
    </Router>
    

    </>
  );
}

export default App;
