
import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

const PayPalBtns = () => {
  const createOrder = (data, actions) => {
    // Replace 'YOUR_ORDER_ID' with your actual order ID
    
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD', // Change to your currency code
            value: 10.00, // Change to your order total
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    // Capture the funds from the transaction
    return actions.order.capture().then((details) => {
      // Handle the successful payment
      console.log('Payment completed:', details);
    });
  };

  const onError = (err) => {
    // Handle errors that occur during the transaction
    console.error('Error during PayPal checkout:', err);
  };



  return (
    <PayPalScriptProvider>
    <PayPalButtons
      createOrder={createOrder}
      onApprove={onApprove}
      onError={onError}
      style={{
        color: 'gold',
        shape: 'pill',
        height: 40,
      }}
    />
    </PayPalScriptProvider>
  );
};

export default PayPalBtns;
