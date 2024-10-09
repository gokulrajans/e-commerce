// src/SuccessModal.js
import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/system';


// Styled components for customization
const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  m: 0,
  p: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const SuccessModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <StyledDialogTitle>
        <Box display="flex" alignItems="center">
          <CheckCircleIcon color="success" sx={{ mr: 1 }} />
          <Typography variant="h6">Order Placed Successfully!</Typography>
        </Box>
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <StyledDialogContent>
        <Typography variant="body1">
          Thank you for your purchase. Your order has been placed successfully and is being processed.
        </Typography>
        
        {/* Logos Section */}
        <LogoContainer>
          {/* Replace the src with your logo URLs or import them as React components */}
          {/* <img src="https://via.placeholder.com/50" alt="Logo 1" />
          <img src="https://via.placeholder.com/50" alt="Logo 2" />
          <img src="https://via.placeholder.com/50" alt="Logo 3" /> */}
        </LogoContainer>
        
        {/* Close Button */}
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </StyledDialogContent>
    </Dialog>
  );
};

// PropTypes for type checking
SuccessModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SuccessModal;
