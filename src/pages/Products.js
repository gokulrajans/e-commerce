import React, { useState } from "react";
import ProductList from "../components/Products/ProductList";
import FilterDrawer from "../components/Products/FilterDrawer";
import { IconButton, Badge, TextField, Box, Container } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // onSearch(e.target.value);
  };

  const toggleFilterDrawer = (open) => () => {
    setIsFilterOpen(open);
  };

  const handleFilterChange = (category) => {
    setSelectedCategories(category);
  };
  return (
    <>
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        <div className="main-product-page-wrapper">
          {/* search and filter options */}
          <div className="sub-product-page-wrapper">
            <Box
              sx={{
                display: { width: "60vw", display: "flex", gap: "8px" },
                mr: 2,
              }}
            >
              {/* <label className='search-name-label-cls'>Search</label> */}
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search Products"
                value={searchTerm}
                onChange={handleSearchChange}
                fullWidth={true}
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                  width: "100%",
                }}
              />
            </Box>
            <IconButton color="inherit" onClick={toggleFilterDrawer(true)}>
              <FilterListIcon />
            </IconButton>
            {/* <IconButton component={Link} to="/checkout" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton> */}
          </div>
          {/* product list details */}
          <div>
            <ProductList
              searchTerm={searchTerm}
              selectedCategories={selectedCategories}
            />
          </div>
          {/* Filter Drawer */}
          <FilterDrawer
            open={isFilterOpen}
            onClose={toggleFilterDrawer(false)}
            onFilterChange={handleFilterChange}
          />
        </div>
      </Container>
    </>
  );
};

export default Products;
