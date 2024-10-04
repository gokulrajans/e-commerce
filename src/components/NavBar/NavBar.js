import React, { useState, useEffect } from "react";
import Grid from "@mui/system/Grid";
import Badge from '@mui/material/Badge';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  const selectedPage = useSelector((state) => state.page.selectedPage);
  console.log(selectedPage, "selected-page");
  const [isSticky, setIsSticky] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleScroll = () => {
    // If the scroll is greater than 50px, set isSticky to true
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getPageClassName = (pageName) => {
    switch (pageName) {
      case "/":
        return "home-page";
      case "/products":
        return "products-page";
      case "/checkout":
        return "checkout-page";
      default:
        return "wrong-url-page";
    }
  };

  return (
    <>
      <nav
        className={`${getPageClassName(selectedPage)} navbar ${
          isSticky ? "navbar--sticky" : ""
        }`}
      >
        <div className="sub-navbar">
          {/* Title section */}
          <Grid className={"heading-link-wrap"}>
            <h1>Anamalai Motors</h1>
          </Grid>
          {/* Nav section */}
          <Grid className={"content-nav-link"}>
            <div
              className={`${
                getPageClassName(selectedPage) === "home-page"
                  ? "disabled-cls"
                  : ""
              } nav-link-wrapper`}
            >
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </div>
            <div
              className={`${
                getPageClassName(selectedPage) === "products-page"
                  ? "disabled-cls"
                  : ""
              } nav-link-wrapper`}
            >
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </div>
            <div
              className={`${
                getPageClassName(selectedPage) === "checkout-page"
                  ? "disabled-cls"
                  : ""
              } nav-link-wrapper`}
            >
              <Badge badgeContent={totalItems} color="secondary">
                <NavLink to="/checkout" className="nav-link">
                  Checkout
                </NavLink>
              </Badge>
            </div>
          </Grid>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
