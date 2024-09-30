import React, { useState } from 'react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    'Laptop',
    'Smartphone',
    'Headphones',
    'Smartwatch',
    'Camera',
  ];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((prod) => (
          <li key={prod}>
            <button onClick={() => setSelectedProduct(prod)}>{prod}</button>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <div>
          <h2>Selected Product: {selectedProduct}</h2>
          <p>Details about {selectedProduct} will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
