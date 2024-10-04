import React, {useState, useEffect} from 'react';
import './PopularProduct.css';
import Product from "./Product";
import { POPULAR_PRODUCTS } from "../../Constant/Constant";
// import styled from "styled-components";

export const PopularProducts = () => {
    const [activeIndex, setActiveIndex] = useState(0);

//     const ProductGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   background-color: #f4edf7;
//   border-radius: 8px;
// `;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const addToCart =() => {
    console.log("testing")
  }

  return (
    <div className="carousel">
      <div
        className="cards-container"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {POPULAR_PRODUCTS.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}