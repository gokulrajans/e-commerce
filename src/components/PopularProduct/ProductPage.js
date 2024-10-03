// src/ProductPage.js
import React, { useState } from "react";
import { PRODUCTS } from "../../constants/constant";
import Product from "./Product";
import styled from "styled-components";

// Container for product grid
const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f4edf7;
  border-radius: 8px;
`;

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <h1>Popular Products</h1>
      <ProductGrid>
        {PRODUCTS.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ProductGrid>
      <h2>Cart: {cart.length} items</h2>
    </div>
  );
};

export default ProductPage;
