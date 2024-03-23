import React, { useState } from "react";
import { Link } from "react-router-dom";
import PayPalBtns from "./PayPalBtns";
import { Col, Container, Row } from "react-bootstrap";

const Cart = ({ cartItem, setCartItem }) => {
  // Qty increase
  const increase = (prod) => {
    const exist = cartItem.find((x) => x.id === prod.id);
    setCartItem((prevCart) =>
      prevCart.map((item) =>
        item.id === prod.id ? { ...exist, quantity: exist.quantity + 1 } : item
      )
    );
  };

  // Qty decrease
  const decrease = (prod) => {
    const exist = cartItem.find((x) => x.id === prod.id);
    setCartItem((prevCart) =>
      prevCart.map((item) =>
        item.id === prod.id ? { ...exist, quantity: exist.quantity - 1 } : item
      )
    );
  };

  // Remove prod
  const remove = (prod) => {
    const exist = cartItem.find((x) => x.id === prod.id);
    if (exist && exist.quantity > 0) {
      setCartItem((prevCart) => prevCart.filter((x) => x.id !== prod.id));
    }
  };

  // Total price
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.Price,
    0
  );

  const [isCheckout, setIsCheckout] = useState(false);

  return (
    <>
      {cartItem.length === 0 && (
        <>
          <Container style={{ textAlign: "center" }}>
            <h4 className="null">Cart Is Empty. Please select a product</h4>
            <Link to="/prod">
              <button className="nowshop">Shop Now</button>
            </Link>
          </Container>
        </>
      )}
      <Container className="cart_container">
        <div className="cart_prod ">
          {cartItem.map((item) => (
            <div className="cart_box" key={item.id}>
              <Row className="d-flex justify-content-center cart_prod_container">
                <div className="col-3">
                  <img src={item.Img} alt={item.Title} className="img-fluid" />
                </div>
                <div className="col-4 cart_item_detail">
                  <h2>{item.Title}</h2>
                  <h3>Price: ${item.Price}</h3>
                  <button
                    className="qty_decrease"
                    onClick={() => decrease(item)}
                  >
                    -
                  </button>
                  <input type="text" value={item.quantity} readOnly />
                  <button
                    className="qty_increase"
                    onClick={() => increase(item)}
                  >
                    +
                  </button>
                  <h3 className="sub_total">
                    Sub Total: ${item.Price * item.quantity}
                  </h3>
                </div>
                <button className="remove_cart" onClick={() => remove(item)}>
                  X
                </button>
              </Row>
            </div>
          ))}
        </div>
      </Container>

      <Container
        style={{ textAlign: "center" }}
        className="cart_total_container"
      >
        <div className=" cart_total_price">Total: ${totalPrice}</div>
        <button
          className=" checkouts"
          onClick={() => {
            if (cartItem.length) {
              setIsCheckout(true);
            }
          }}
        >
          Checkout {`${cartItem.length}`}
        </button>
      </Container>
      <div className="check">
        {isCheckout && <PayPalBtns total={totalPrice} item={cartItem} />}
      </div>
    </>
  );
};

export default Cart;
