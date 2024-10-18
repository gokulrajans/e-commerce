import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Layout.css'; // We'll create this CSS file next

const Layout = () => {
  return (
    <div className="layout">
      {/* <NavigationBar companyName='ANAIMALAI MOTORS' /> */}
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
