import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Index route for Home */}
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="admin" element={<Admin />} />
          <Route path="login" element={<Login />} />
          {/* Catch-all route for undefined paths */}
          <Route
            path="*"
            element={
              <div>
                <h1>404 - Not Found</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
