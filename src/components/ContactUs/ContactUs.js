// src/pages/ContactUs.js
import React, { useState } from "react";
import { Button } from "@mui/material";
import ThankYouModal from "../ModelsComponent/ThankYouModel";
import "./ContactUs.css"; // Create a CSS file for styling

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('Gokulraj'); // Example name for now

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetFormData = ()=>{
    setFormData({
      name: "",
      mobile: "",
      email: "",
      message: "",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setName(formData.name);
    handleOpenModal();
    // You can handle form submission logic here (e.g., send it to a server)
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetFormData();
  };

  return (
    <>
    <div className="main-app-contactus">
      <div className="contact-us-container">
      <h1 className="contact-us-heading">Contact Us</h1>
      <div className="contant-cls-main-wrp">
        <div className="contact-form-section">
          
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Mobile Number:
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Enter Your Message Here:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <div className="submit-btn-wrap">
            {/* <button >Submit</button> */}
            <Button type="submit" variant="contained">Click To Connect With Us</Button>
            </div>
          </form>
        </div>
        <div className="contact-info-section">
          <h2>Manufacturing Unit</h2>
          <h4>Coimbatore Branch:</h4>
          <p>Anamalai Motors, Industrial Park,</p>
          <p>123 Motor Street, Coimbatore, TN, India</p>
          <h4>Salem Branch:</h4>
          <p>Anamalai Motors, Industrial Park,</p>
          <p>456 Motor Street, Salem, TN, India</p>
          <h3>Contact Information:</h3>
          <p>Phone: +91-9876543210</p>
          <p>Email: contact@anaimalaimotor.com</p>
        </div>
        </div>
      </div>
    </div>
    {isModalOpen && <ThankYouModal name={name} onClose={handleCloseModal} />}
    </>
  );
};

export default ContactUs;
