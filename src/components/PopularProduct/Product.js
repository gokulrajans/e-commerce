// src/Product.js
import React from "react";
import styled from "styled-components";
import motor1 from "../../assets/PopularProductImages/motor-1.jpeg";
import motor2 from "../../assets/PopularProductImages/motor-2.jpeg";
import motor3 from "../../assets/PopularProductImages/motor-3.jpeg";
import motor4 from "../../assets/PopularProductImages/motor-4.jpeg";
import motor5 from "../../assets/PopularProductImages/motor-5.jpeg";
import motor6 from "../../assets/PopularProductImages/motor-6.jpeg";
import motor7 from "../../assets/PopularProductImages/motor-7.jpeg";
import motor8 from "../../assets/PopularProductImages/motor-8.jpeg";
import motor9 from "../../assets/PopularProductImages/motor-9.jpeg";
import motor10 from "../../assets/PopularProductImages/motor-10.jpeg";
import motor11 from "../../assets/PopularProductImages/motor-11.jpeg";
import motor12 from "../../assets/PopularProductImages/motor-12.jpeg";
import motor13 from "../../assets/PopularProductImages/motor-13.jpeg";
import motor14 from "../../assets/PopularProductImages/motor-14.jpeg";
import motor15 from "../../assets/PopularProductImages/motor-15.jpeg";
import motor16 from "../../assets/PopularProductImages/motor-16.jpeg";
import motor17 from "../../assets/PopularProductImages/motor-17.jpeg";
import motor18 from "../../assets/PopularProductImages/motor-18.jpeg";
import motor19 from "../../assets/PopularProductImages/motor-19.jpeg";
import motor20 from "../../assets/PopularProductImages/motor-20.jpeg";
import './PopularProduct.css';


// Styles for the product card
const ProductCard = styled.div`
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  min-width: 250px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-height: 250px;
    min-width: 250px;
`;

// const AddToCartButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 10px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

const getImageName = (key) => {
  switch (key) {
    case 1:
      return motor1;
    case 2:
      return motor2;
    case 3:
      return motor3;
    case 4:
      return motor4;
    case 5:
      return motor5;
    case 6:
      return motor6;
    case 7:
      return motor7;
    case 8:
      return motor8;
    case 9:
      return motor9;
    case 10:
      return motor10;
    case 11:
      return motor11;
    case 12:
      return motor12;
    case 13:
      return motor13;
    case 14:
      return motor14;
    case 15:
      return motor15;
    case 16:
      return motor16;
    case 17:
      return motor17;
    case 18:
      return motor18;
    case 19:
      return motor19;
    case 20:
      return motor20;
    default:
      return "wrong-url-page";
  }
};

const Product = ({ product, addToCart }) => {
  return (
    <ProductCard>
      <ProductImage src={getImageName(product.id)} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="product-msg-content">{product.message}</p>
      {/* <p>Price: ${product.price}</p> */}
      {/* <AddToCartButton onClick={() => addToCart(product)}>
        Add to Cart
      </AddToCartButton> */}
    </ProductCard>
  );
};

export default Product;
