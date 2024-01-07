import React, { useEffect, useRef, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const PayPalBtns = ({ item, total }) => {
  const [palP, setPalP] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Shoe store checkout',
                amount: {
                  currency_code: 'USD',
                  value: total.toFixed(2),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPalP(true);
          console.log(order);
        },
        onError: (err) => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [item, total]);

  if (palP) {
    return <div>Thanks for making the purchase</div>;
  }

  if (error) {
    return <div>Error in processing payment. Please try again</div>;
  }

  return (
    <div>
      <ListGroup>
        {item.map((item, index) => (
          <ListGroupItem key={index}>
            {item.name} - ${item.value ? item.value.toFixed(2) : 'N/A'}
          </ListGroupItem>
        ))}
        <div>Total: ${total.toFixed(2)}</div>
        <div ref={paypalRef}></div>
      </ListGroup>
    </div>
  );
};

export default PayPalBtns;
