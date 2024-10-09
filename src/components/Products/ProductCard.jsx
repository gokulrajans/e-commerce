// src/components/ProductCard.jsx
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/Slice/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import Image_1 from "../../assets/MainProductImages/34.png";
import Image_2 from "../../assets/MainProductImages/48.png";
import Image_3 from "../../assets/MainProductImages/47.png";
import Image_4 from "../../assets/MainProductImages/46.png";
import Image_5 from "../../assets/MainProductImages/45.png";
import Image_6 from "../../assets/MainProductImages/44.png";
import Image_7 from "../../assets/MainProductImages/43.png";
import Image_8 from "../../assets/MainProductImages/42.png";
import Image_9 from "../../assets/MainProductImages/41.png";
// import Image_10 from "../../assets/MainProductImages/97.png";
import Image_11 from "../../assets/MainProductImages/31.png";
// import Image_12 from "../../assets/MainProductImages/32.png";
import Image_13 from "../../assets/MainProductImages/33.png";
import Image_14 from "../../assets/MainProductImages/34.png";
// import Image_15 from "../../assets/MainProductImages/35.png";
import Image_16 from "../../assets/MainProductImages/36.png";
import Image_17 from "../../assets/MainProductImages/37.png";
import Image_18 from "../../assets/MainProductImages/38.png";
import Image_19 from "../../assets/MainProductImages/39.png";
import Image_20 from "../../assets/MainProductImages/40.png";
import Image_21 from "../../assets/MainProductImages/21.jpeg";
import Image_22 from "../../assets/MainProductImages/80.png";
import Image_23 from "../../assets/MainProductImages/23.jpeg";
import Image_24 from "../../assets/MainProductImages/42.png";
import Image_25 from "../../assets/MainProductImages/66.png";
import Image_26 from "../../assets/MainProductImages/26.jpeg";
import Image_27 from "../../assets/MainProductImages/27.png";
import Image_28 from "../../assets/MainProductImages/28.png";
import Image_29 from "../../assets/MainProductImages/29.png";
import Image_30 from "../../assets/MainProductImages/30.png";
import Image_31 from "../../assets/MainProductImages/31.png";
import Image_32 from "../../assets/MainProductImages/32.png";
import Image_33 from "../../assets/MainProductImages/33.png";
import Image_34 from "../../assets/MainProductImages/34.png";
import Image_35 from "../../assets/MainProductImages/35.png";
import Image_36 from "../../assets/MainProductImages/36.png";
import Image_37 from "../../assets/MainProductImages/37.png";
import Image_38 from "../../assets/MainProductImages/38.png";
import Image_39 from "../../assets/MainProductImages/39.png";
import Image_40 from "../../assets/MainProductImages/40.png";
import Image_41 from "../../assets/MainProductImages/41.png";
import Image_42 from "../../assets/MainProductImages/42.png";
import Image_43 from "../../assets/MainProductImages/43.png";
import Image_44 from "../../assets/MainProductImages/44.png";
import Image_45 from "../../assets/MainProductImages/45.png";
import Image_46 from "../../assets/MainProductImages/46.png";
import Image_47 from "../../assets/MainProductImages/47.png";
import Image_48 from "../../assets/MainProductImages/48.png";
import Image_49 from "../../assets/MainProductImages/49.png";
import Image_50 from "../../assets/MainProductImages/50.png";
import Image_51 from "../../assets/MainProductImages/51.png";
import Image_52 from "../../assets/MainProductImages/94.png";
import Image_53 from "../../assets/MainProductImages/53.png";
import Image_54 from "../../assets/MainProductImages/54.png";
import Image_55 from "../../assets/MainProductImages/55.png";
import Image_56 from "../../assets/MainProductImages/56.png";
import Image_57 from "../../assets/MainProductImages/57.png";
import Image_58 from "../../assets/MainProductImages/58.png";
import Image_59 from "../../assets/MainProductImages/59.png";
import Image_60 from "../../assets/MainProductImages/60.png";
import Image_61 from "../../assets/MainProductImages/61.png";
import Image_62 from "../../assets/MainProductImages/62.png";
import Image_63 from "../../assets/MainProductImages/63.png";
import Image_64 from "../../assets/MainProductImages/64.png";
import Image_65 from "../../assets/MainProductImages/65.png";
import Image_66 from "../../assets/MainProductImages/66.png";
import Image_67 from "../../assets/MainProductImages/67.png";
import Image_68 from "../../assets/MainProductImages/68.png";
import Image_69 from "../../assets/MainProductImages/69.png";
import Image_70 from "../../assets/MainProductImages/70.png";
import Image_71 from "../../assets/MainProductImages/71.png";
import Image_72 from "../../assets/MainProductImages/72.png";
import Image_73 from "../../assets/MainProductImages/73.png";
import Image_74 from "../../assets/MainProductImages/74.png";
import Image_75 from "../../assets/MainProductImages/75.png";
import Image_76 from "../../assets/MainProductImages/76.png";
import Image_77 from "../../assets/MainProductImages/77.png";
import Image_78 from "../../assets/MainProductImages/78.png";
import Image_79 from "../../assets/MainProductImages/79.png";
import Image_80 from "../../assets/MainProductImages/80.png";
import Image_81 from "../../assets/MainProductImages/81.png";
import Image_82 from "../../assets/MainProductImages/82.png";
import Image_83 from "../../assets/MainProductImages/83.png";
import Image_84 from "../../assets/MainProductImages/84.png";
import Image_85 from "../../assets/MainProductImages/85.png";
import Image_86 from "../../assets/MainProductImages/86.png";
import Image_87 from "../../assets/MainProductImages/87.png";
import Image_88 from "../../assets/MainProductImages/88.png";
import Image_89 from "../../assets/MainProductImages/89.png";
import Image_90 from "../../assets/MainProductImages/90.png";
import Image_91 from "../../assets/MainProductImages/91.png";
import Image_92 from "../../assets/MainProductImages/92.png";
import Image_93 from "../../assets/MainProductImages/93.png";
import Image_94 from "../../assets/MainProductImages/94.png";
import Image_95 from "../../assets/MainProductImages/95.png";
import Image_96 from "../../assets/MainProductImages/96.png";
import Image_97 from "../../assets/MainProductImages/97.png";
import Image_98 from "../../assets/MainProductImages/98.png";
import Image_99 from "../../assets/MainProductImages/99.png";
import Image_100 from "../../assets/MainProductImages/100.png";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.cartItems.find((item) => item.id === product.id)
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(product.id));
  };

  const getImageName = (key) => {
    switch (key) {
      case 1:
        return Image_1;
      case 2:
        return Image_2;
      case 3:
        return Image_3;
      case 4:
        return Image_4;
      case 5:
        return Image_5;
      case 6:
        return Image_6;
      case 7:
        return Image_7;
      case 8:
        return Image_8;
      case 9:
        return Image_9;
      case 10:
        return Image_14;
      case 11:
        return Image_11;
      case 12:
        return Image_52;
      case 13:
        return Image_13;
      case 14:
        return Image_14;
      case 15:
        return Image_85;
      case 16:
        return Image_16;
      case 17:
        return Image_17;
      case 18:
        return Image_18;
      case 19:
        return Image_19;
      case 20:
        return Image_20;
      case 21:
        return Image_21;
      case 22:
        return Image_22;
      case 23:
        return Image_23;
      case 24:
        return Image_24;
      case 25:
        return Image_25;
      case 26:
        return Image_26;
      case 27:
        return Image_27;
      case 28:
        return Image_28;
      case 29:
        return Image_29;
      case 30:
        return Image_30;
      case 31:
        return Image_31;
      case 32:
        return Image_32;
      case 33:
        return Image_33;
      case 34:
        return Image_34;
      case 35:
        return Image_35;
      case 36:
        return Image_36;
      case 37:
        return Image_37;
      case 38:
        return Image_38;
      case 39:
        return Image_39;
      case 40:
        return Image_40;
      case 41:
        return Image_41;
      case 42:
        return Image_42;
      case 43:
        return Image_43;
      case 44:
        return Image_44;
      case 45:
        return Image_45;
      case 46:
        return Image_46;
      case 47:
        return Image_47;
      case 48:
        return Image_48;
      case 49:
        return Image_49;
      case 50:
        return Image_50;
      case 51:
        return Image_51;
      case 52:
        return Image_52;
      case 53:
        return Image_53;
      case 54:
        return Image_54;
      case 55:
        return Image_55;
      case 56:
        return Image_56;
      case 57:
        return Image_57;
      case 58:
        return Image_58;
      case 59:
        return Image_59;
      case 60:
        return Image_60;
      case 61:
        return Image_61;
      case 62:
        return Image_62;
      case 63:
        return Image_63;
      case 64:
        return Image_64;
      case 65:
        return Image_65;
      case 66:
        return Image_66;
      case 67:
        return Image_67;
      case 68:
        return Image_68;
      case 69:
        return Image_69;
      case 70:
        return Image_70;
      case 71:
        return Image_71;
      case 72:
        return Image_72;
      case 73:
        return Image_73;
      case 74:
        return Image_74;
      case 75:
        return Image_75;
      case 76:
        return Image_76;
      case 77:
        return Image_77;
      case 78:
        return Image_78;
      case 79:
        return Image_79;
      case 80:
        return Image_80;
      case 81:
        return Image_81;
      case 82:
        return Image_82;
      case 83:
        return Image_83;
      case 84:
        return Image_84;
      case 85:
        return Image_85;
      case 86:
        return Image_86;
      case 87:
        return Image_87;
      case 88:
        return Image_88;
      case 89:
        return Image_89;
      case 90:
        return Image_90;
      case 91:
        return Image_91;
      case 92:
        return Image_92;
      case 93:
        return Image_93;
      case 94:
        return Image_94;
      case 95:
        return Image_95;
      case 96:
        return Image_96;
      case 97:
        return Image_97;
      case 98:
        return Image_98;
      case 99:
        return Image_99;
      case 100:
        return Image_100;

      default:
        return "wrong-url-page";
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ padding: "16px" }}>
        <CardMedia
          component="img"
          height={"200px !important"}
          src={getImageName(product.id)}
          alt={product.name}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ minHeight: 60 }}
        >
          {product.description}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{ marginTop: 1 }}
        >
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", padding: "16px" }}>
        {/* Add/Remove Button */}
        {!cartItem ? (
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="error"
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </Button>
        )}

        {/* Quantity Controls */}
        {cartItem && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="primary"
              onClick={handleDecrement}
              disabled={cartItem.quantity <= 1}
            >
              <RemoveIcon />
            </IconButton>
            <Typography>{cartItem.quantity}</Typography>
            <IconButton color="primary" onClick={handleIncrement}>
              <AddIcon />
            </IconButton>
          </Box>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
