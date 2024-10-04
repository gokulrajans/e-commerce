import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import { PopularProducts } from "../components/PopularProduct/PopularProducts";
import { AboutUs } from "../components/AboutUs/AboutUs";
import ContactUs from '../components/ContactUs/ContactUs';
const Home = () => {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="secondary-hm-sec">
          <div className="main-left-wrp">
            <div className="hero-content">
              <h1>Premium Quality Motors</h1>
              <p>Innovation Electric Motors Since 1946.</p>
              <Button variant="contained">Explore our Products</Button>
              <div className="id-btns-wrapper">
              <Button variant="contained"><a href="#popular_product" className="id-cls">Popular Product</a></Button>
              <Button variant="contained"><a href="#about_us" className="id-cls">About Us</a></Button>
              <Button variant="contained"><a href="#contact_us" className="id-cls">Contact Us</a></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="popular_product" className="features-section">
        <div className="auto-product-rotate-wrap">
          <div className="rotate-card-wrp">
            <h1 className="popular-head-name">Popular Products</h1>
            <PopularProducts />
          </div>
        </div>
      </section>
      <section id="about_us" className="aboutus-section-main-wrap">
        <div className="about-main-wrapper">
          <div className="about-sub-wrapper">
            <AboutUs></AboutUs>
          </div>
        </div>
      </section>
      <section id="contact_us" className="contactus-section-main-wrap">
      <div className="contact-main-wrapper">
          <div className="contact-sub-wrapper">
            <ContactUs></ContactUs>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
