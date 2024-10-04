// src/components/ProductList.jsx
import React from "react";
import { Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { mainProducts } from "../../Constant/MainProducts";

const ProductList = ({ searchTerm, selectedCategories }) => {
  const filteredProducts = mainProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    return matchesSearch && matchesFilter;
  });

  return (
    <Grid container spacing={4}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            No products found.
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default ProductList;
