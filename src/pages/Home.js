import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import { PopularProducts } from "../components/PopularProduct/PopularProducts";
import { AboutUs } from "../components/AboutUs/AboutUs";
import ContactUs from '../components/ContactUs/ContactUs';
import BackgroundVideo from '../components/BackgroundVideo/BackgroundVideo';
import { useNavigate } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";
import {
  useMediaQuery,
} from "@mui/material";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const navigateToProductPage =() => {
    navigate('/products');
  }

  const centerBigScreenCnt = () => (
    <div className="secondary-hm-sec">
      <div className="main-left-wrp">
        <div className="hero-content">
          <h1>Premium Quality Motors</h1>
          <p>Innovation Electric Motors Since 1946.</p>
          <Button variant="contained" onClick={navigateToProductPage}>
            Explore our Products
          </Button>
          <div className="id-btns-wrapper">
            {/* <Button variant="contained"><a href="#popular_product" className="id-cls">Popular Product</a></Button>
              <Button variant="contained"><a href="#about_us" className="id-cls">About Us</a></Button>
              <Button variant="contained"><a href="#contact_us" className="id-cls">Contact Us</a></Button> */}
          </div>
        </div>
      </div>
    </div>
  );

  

  const centerMobileCnt = () => (
    <h1>Test</h1>
  );
  return (
    <>
    <BackgroundVideo />
      <section id="home" className="hero-section overlay-content">
        {isMobile?<>{centerMobileCnt()}</>:<>{centerBigScreenCnt()}</>

        }
        
      </section>
      <section id="popular_product" className="features-section">
        <div className="auto-product-rotate-wrap">
          <div className="rotate-card-wrp">
            <h1 className="popular-head-name">Our Popular Products</h1>
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
