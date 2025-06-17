import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Avatar,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";

const OrderTable = ({ orders }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  // Filter logic
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.vehicleNumber.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter ? order.status === statusFilter : true;

    const matchesPrice =
      priceFilter === "gt5000"
        ? order.price > 5000
        : priceFilter === "lt5000"
        ? order.price < 5000
        : true;

    return matchesSearch && matchesStatus && matchesPrice;
  });

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Orders
      </Typography>

      {/* ✅ Filter Controls */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Search Orders"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            select
            label="Filter by Status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            select
            label="Filter by Price"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="lt5000">Less than ₹5000</MenuItem>
            <MenuItem value="gt5000">More than ₹5000</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      {/* 🧾 Orders Table */}
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>Vehicle Type</TableCell>
              <TableCell>Vehicle Number</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <Avatar
                      variant="square"
                      src={order.image}
                      alt={order.productName}
                      sx={{ width: 50, height: 50 }}
                    />
                  </TableCell>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.vehicleType}</TableCell>
                  <TableCell>{order.vehicleNumber}</TableCell>
                  <TableCell>{order.productName}</TableCell>
                  <TableCell>{order.category}</TableCell>
                  <TableCell>₹{order.price.toLocaleString()}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default OrderTable;
