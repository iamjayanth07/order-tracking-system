import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const FilterBar = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  priceFilter,
  setPriceFilter,
}) => {
  const handleReset = () => {
    setSearchQuery("");
    setStatusFilter("");
    setPriceFilter("");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: 2,
        mb: 3,
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Section Header */}
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "primary.main",
          mb: 2,
          textTransform: "uppercase",
          letterSpacing: 0.5,
        }}
      >
        Filter Orders
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems="stretch"
        justifyContent="space-between"
        sx={{
          flexWrap: "wrap",
          [`@media (max-width:800px)`]: {
            flexDirection: "column",
            gap: 2,
          },
        }}
      >
        {/* Search Field */}
        <Box sx={{ flex: 1, minWidth: { xs: "100%", sm: "200px", md: "250px" } }}>
          <TextField
            label="Search (Order ID / Product Name)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>

        {/* Status Filter */}
        <Box sx={{ flex: 1, minWidth: { xs: "100%", sm: "150px" } }}>
          <FormControl size="small" fullWidth>
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
        </Box>

        {/* Price Filter */}
        <Box sx={{ flex: 1, minWidth: { xs: "100%", sm: "180px" } }}>
          <FormControl size="small" fullWidth>
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

        {/* Reset Button */}
        <Box sx={{ minWidth: { xs: "100%", sm: "auto" } }}>
          <Button
            onClick={handleReset}
            startIcon={<RestartAltIcon />}
            variant="outlined"
            color="secondary"
            size="small"
            fullWidth
          >
            Reset
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default FilterBar;