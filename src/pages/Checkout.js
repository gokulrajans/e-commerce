import React, { useState } from 'react';
import CheckoutPage from '../components/CheckOut/CheckoutPage';
import './Checkout.css';

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    // Simulate checkout process
    setOrderPlaced(true);
  };

  return (
    <div className='checkout-main-page'>
      <CheckoutPage></CheckoutPage>
    </div>
  );
};

export default Checkout;
