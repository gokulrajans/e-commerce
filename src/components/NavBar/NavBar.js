import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LoginIcon from '@mui/icons-material/Login';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // We'll create this CSS file next

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" end className="nav-link">
      <HomeIcon>Home</HomeIcon>
      </NavLink>
      <NavLink to="/products" className="nav-link">
        <CategoryIcon>Products</CategoryIcon>
      </NavLink>
      <NavLink to="/checkout" className="nav-link">
        <ProductionQuantityLimitsIcon>Checkout</ProductionQuantityLimitsIcon>
      </NavLink>
      <NavLink to="/admin" className="nav-link">
        <AdminPanelSettingsIcon>Admin</AdminPanelSettingsIcon>
      </NavLink>
      <NavLink to="/login" className="nav-link">
        <LoginIcon>Login</LoginIcon>
      </NavLink>
    </nav>
  );
};

export default Navbar;
