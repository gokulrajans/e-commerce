// src/components/FilterDrawer.jsx
import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

const FilterDrawer = ({ open, onClose, onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState({
    All: true,
    Motors: false,
    Accessories: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    // If 'All' is checked, uncheck others
    if (name === "All") {
      setSelectedCategories({
        All: checked,
        Motors: false,
        Accessories: false,
      });
    } else {
      setSelectedCategories((prev) => ({
        ...prev,
        [name]: checked,
        All: false,
      }));
    }
  };

  const applyFilters = () => {
    const selected = Object.keys(selectedCategories).filter(
      (category) => selectedCategories[category]
    );
    if (selected.includes("All") || selected.length === 0) {
      onFilterChange([]);
    } else {
      onFilterChange(selected);
    }
    onClose();
  };

  const resetFilters = () => {
    setSelectedCategories({
      All: true,
      Motors: false,
      Accessories: false,
    });
    onFilterChange([]);
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 250, padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Filter By Category
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCategories.All}
                onChange={handleCheckboxChange}
                name="All"
              />
            }
            label="All"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCategories.Motors}
                onChange={handleCheckboxChange}
                name="Motors"
              />
            }
            label="Motors"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCategories.Accessories}
                onChange={handleCheckboxChange}
                name="Accessories"
              />
            }
            label="Accessories"
          />
        </FormGroup>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button variant="contained" color="primary" onClick={applyFilters}>
            Apply
          </Button>
          <Button variant="outlined" color="secondary" onClick={resetFilters}>
            Reset
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
