import React from 'react'
import { Link } from 'react-router-dom'
import PayPalBtns from './PayPalBtns';


const Cart = ({cartItem, setCartItem}) => {

  //qty increase
  function increase(prod){
    const exsit= cartItem.find((x) => {
      return x.id === prod.id;
    })
    setCartItem(cartItem.map((item) => {
     return item.id === prod.id ? {...exsit, quantity: exsit.quantity + 1}: item
    }))
  }
  //qty decrease
  function decrease(prod){
    const exsit= cartItem.find((x) => {
      return x.id === prod.id;
    })
    setCartItem(cartItem.map((item) => {
      return item.id === prod.id ? {...exsit, quantity: exsit.quantity - 1}: item
    }))
  }

  //remove prod
function remove(prod){
  const exsit= cartItem.find((x) => {
    return x.id === prod.id;
  })
  if(exsit.quantity > 0 ) {
    setCartItem(cartItem.filter((x) => {
      return x.id !== prod.id
    }) )
  }
}

//total price
const TotalPrice = cartItem.reduce((price, item) => price + item.quantity * item.Price, 0);




  return (
    <>
      {cartItem.length === 0 && 
      <>
      <h4 className='null'>Cart Is Empty. Please select a product</h4>
      <Link to="/prod">
      <button className='nowshop'>Shop Now</button>
      </Link>
      </>
      }
      <div className='cart_container'>
        <div className='cart_prod'>
        {
        cartItem.map((item) =>{
          return(
            <div className='cart_box' key={item.id}>
  <div className='cart_prod_container'>
    <div className='cart_img_box'>
      <img src={item.Img} alt={item.Title} />
    </div>
    <div className='cart_item_detail'>
      <h2>{item.Title} </h2>
      <h3>Price: ${item.Price} </h3>
      <button className='qty_decrease' onClick={() => decrease (item)}>-</button>
      <input type='text' value={item.quantity}/>
      <button className='qty_increase' onClick={() => increase (item)}>+</button>
<h3>Sub Total: ${item.Price * item.quantity} </h3>
    </div>
    <button className='remove_cart' onClick={() => remove (item)}>X</button>
  </div>
</div>
          )
        })
      }
        </div>
      </div>
      {cartItem.length > 0 &&
      <>
      
            <p className='cart_total_price'>Total: ${TotalPrice} </p>
      <button className='checkouts'>Checkout</button>
      <div className='check'>
      <PayPalBtns/>
      </div>
      </>}
    </>
  )
}

export default Cart
