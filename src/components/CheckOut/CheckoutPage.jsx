// src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "../../store/Slice/cartSlice";
import RemoveIcon from "@mui/icons-material/Remove"; // Correctly imported
import AddIcon from "@mui/icons-material/Add"; // Correctly imported
import "./CheckoutPage.css";
import FormDialog from "../UserInfoForm/FormDialog";

const CheckoutPage = () => {
  const [open, setOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

    // Function to open the dialog
    const handleOpen = () => {
      setOpen(true);
    };
  
    // Function to close the dialog
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={4}>
            {cartItems.map((item) => (
              <Grid item key={item.id} xs={12}>
                <Card sx={{ display: "flex", alignItems: "center" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      sx={{ mt: 1 }}
                    >
                      Price: ${item.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        color="primary"
                        onClick={() => handleDecrement(item.id)}
                        disabled={item.quantity <= 1}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton
                        color="primary"
                        onClick={() => handleIncrement(item.id)}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                    <IconButton
                      color="error"
                      onClick={() => handleRemove(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Total Price and Clear Cart Button */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <div className="first-section-main-wrp">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClearCart}
              >
                Clear Cart
              </Button>
            </div>
            <div className="second-section-main-wrp">
              <Typography variant="h6">Total: ${totalPrice}</Typography>
              {/* <Button
                variant="contained"
                color="secondary"
                onClick={handleClearCart}
              >
                Buy Now
              </Button> */}
              <Button variant="contained" color="secondary" onClick={handleOpen}>
          Buy Now
        </Button>
            </div>
          </Box>
          <FormDialog open={open} onClose={handleClose} />
        </>
      )}
    </Container>
  );
};

export default CheckoutPage;
