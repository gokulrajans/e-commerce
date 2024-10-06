import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import "./App.css";
import { setPage } from "./store/Slice/pageSlice";
import { initializeApp } from "firebase/app";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAN3Uy3P-DBDFkcRnp0L1qSyiNrZps-B5A",
    authDomain: "ecommerce-fb056.firebaseapp.com",
    databaseURL: "https://ecommerce-fb056-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ecommerce-fb056",
    storageBucket: "ecommerce-fb056.appspot.com",
    messagingSenderId: "599264430490",
    appId: "1:599264430490:web:edeee541b1935246b85223"
  };
  const app = initializeApp(firebaseConfig);
  
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

function MainRoutes() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // Update global state when route changes
    dispatch(setPage(location.pathname));
  }, [location, dispatch]);

  return (
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
  );
}

export default App;
