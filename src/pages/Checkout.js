import React, { useState } from 'react';

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    // Simulate checkout process
    setOrderPlaced(true);
  };

  return (
    <div>
      <h1>Checkout</h1>
      {!orderPlaced ? (
        <button onClick={handleCheckout}>Place Order</button>
      ) : (
        <p>Thank you! Your order has been placed.</p>
      )}
    </div>
  );
};

export default Checkout;
