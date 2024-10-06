// src/UserInfoForm.js
import React, { useState } from 'react';
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Typography,
  Box,
  Button,
} from '@mui/material';

const UserInfoForm = ({ onClose }) => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobileNumber: '',
    email: '',
    pincode: '',
    paymentOption: '',
  });

  // State to hold form errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for the field
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // Validate form data
  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.address.trim()) tempErrors.address = 'Address is required';
    if (!formData.mobileNumber.trim()) {
      tempErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      tempErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (
      !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        formData.email
      )
    ) {
      tempErrors.email = 'Enter a valid email';
    }
    if (!formData.pincode.trim()) {
      tempErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      tempErrors.pincode = 'Enter a valid 6-digit pincode';
    }
    if (!formData.paymentOption) {
      tempErrors.paymentOption = 'Select a payment option';
    }

    setErrors(tempErrors);

    // Return true if no errors
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Form is valid, proceed with submission
      const submissionData = { ...formData };
      console.log('Form Submission:', submissionData);
      alert('Form submitted successfully! Check console for details.');

      // Reset form
      setFormData({
        name: '',
        address: '',
        mobileNumber: '',
        email: '',
        pincode: '',
        paymentOption: '',
      });

      // Close the modal
      onClose();
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      {/* Name */}
      <TextField
        margin="normal"
        label="Name"
        name="name"
        fullWidth
        value={formData.name}
        onChange={handleChange}
        error={Boolean(errors.name)}
        helperText={errors.name}
      />

      {/* Address */}
      <TextField
        margin="normal"
        label="Address"
        name="address"
        fullWidth
        multiline
        rows={3}
        value={formData.address}
        onChange={handleChange}
        error={Boolean(errors.address)}
        helperText={errors.address}
      />

      {/* Mobile Number */}
      <TextField
        margin="normal"
        label="Mobile Number"
        name="mobileNumber"
        fullWidth
        value={formData.mobileNumber}
        onChange={handleChange}
        error={Boolean(errors.mobileNumber)}
        helperText={errors.mobileNumber}
        inputProps={{ maxLength: 10 }}
      />

      {/* Email */}
      <TextField
        margin="normal"
        label="Email"
        name="email"
        type="email"
        fullWidth
        value={formData.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />

      {/* Pincode */}
      <TextField
        margin="normal"
        label="Pincode"
        name="pincode"
        fullWidth
        value={formData.pincode}
        onChange={handleChange}
        error={Boolean(errors.pincode)}
        helperText={errors.pincode}
        inputProps={{ maxLength: 6 }}
      />

      {/* Payment Options */}
      <FormControl
        component="fieldset"
        margin="normal"
        error={Boolean(errors.paymentOption)}
      >
        <FormLabel component="legend">Payment Option</FormLabel>
        <RadioGroup
          aria-label="paymentOption"
          name="paymentOption"
          value={formData.paymentOption}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Cash on Delivery"
            control={<Radio />}
            label="Cash on Delivery"
          />
          <FormControlLabel
            value="Pay Now"
            control={<Radio />}
            label="Pay Now"
          />
        </RadioGroup>
        {errors.paymentOption && (
          <Typography variant="body2" color="error">
            {errors.paymentOption}
          </Typography>
        )}
      </FormControl>

      {/* Submit Button */}
      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default UserInfoForm;
