import React from "react";
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
} from "@mui/material";

const OrderTable = ({ orders }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Orders
      </Typography>

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
            {orders.length > 0 ? (
              orders.map((order) => (
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
