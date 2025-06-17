

import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const FilterBar = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  priceFilter,
  setPriceFilter,
}) => {
  return (
    <Box className="filter-bar">
     
      <TextField
        label="Search (Order ID / Product Name)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ minWidth: 250 }}
      />

      
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={statusFilter}
          label="Status"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Shipped">Shipped</MenuItem>
          <MenuItem value="Delivered">Delivered</MenuItem>
          <MenuItem value="Cancelled">Cancelled</MenuItem>
        </Select>
      </FormControl>

      
      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel>Price Filter</InputLabel>
        <Select
          value={priceFilter}
          label="Price Filter"
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="gt5000">Greater than ₹5000</MenuItem>
          <MenuItem value="lt5000">Less than ₹5000</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterBar;
