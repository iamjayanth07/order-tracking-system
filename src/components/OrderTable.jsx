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
  Stack,
  Pagination,
  Chip,
} from "@mui/material";
import FilterBar from "./FilterBar";

const ORDERS_PER_PAGE = 5;

const getVehicleImage = (type) => {
  if (type === "Truck") return "/images/truck.png";
  if (type === "Van") return "/images/van.png";
  if (type === "Bike") return "/images/bike.jpeg";
  return "";
};

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "delivered":
      return "success";
    case "in transit":
      return "warning";
    case "cancelled":
      return "error";
    default:
      return "default";
  }
};

const OrderTable = ({ orders }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [page, setPage] = useState(1);

  const filterOrders = () =>
    orders.filter((order) => {
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

  const filteredOrders = filterOrders();
  const pageCount = Math.ceil(filteredOrders.length / ORDERS_PER_PAGE);
  const paginatedOrders = filteredOrders.slice(
    (page - 1) * ORDERS_PER_PAGE,
    page * ORDERS_PER_PAGE
  );

  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          textAlign: "center",
          mb: 3,
        }}
      >
        📦 Orders Dashboard
      </Typography>

      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      />

      <Paper
        sx={{
          borderRadius: 3,
          boxShadow: "0px 3px 10px rgba(0,0,0,0.08)",
          overflowX: "auto", // enable horizontal scroll
        }}
      >
        <Box sx={{ minWidth: "800px" }}> {/* Adjust min width as needed */}
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                {[
                  "Order ID",
                  "Vehicle Type",
                  "Vehicle Number",
                  "Product Name",
                  "Category",
                  "Price",
                  "Status",
                ].map((heading) => (
                  <TableCell
                    key={heading}
                    sx={{ fontWeight: "bold", textTransform: "uppercase", fontSize: "13px" }}
                  >
                    {heading}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedOrders.length > 0 ? (
                paginatedOrders.map((order, index) => (
                  <TableRow
                    key={order.id}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#ffffff" : "#fafafa",
                      "&:hover": {
                        backgroundColor: "#f1f5f9",
                        transition: "background-color 0.2s ease",
                      },
                    }}
                  >
                    <TableCell>{order.id}</TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar
                          src={getVehicleImage(order.vehicleType)}
                          alt={order.vehicleType}
                          variant="rounded"
                          sx={{ width: 32, height: 32, borderRadius: "6px" }}
                        />
                        <Typography variant="body2">{order.vehicleType}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{order.vehicleNumber}</TableCell>
                    <TableCell>
                      <Typography variant="body2" noWrap>
                        {order.productName}
                      </Typography>
                    </TableCell>
                    <TableCell>{order.category}</TableCell>
                    <TableCell align="right">₹{order.price.toLocaleString()}</TableCell>
                    <TableCell>
                      <Chip
                        label={order.status}
                        size="small"
                        color={getStatusColor(order.status)}
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No orders found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Box>
      </Paper>

      {pageCount > 1 && (
        <Stack sx={{ mt: 2 }} alignItems="center">
          <Pagination
            count={pageCount}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
            shape="rounded"
            size="medium"
          />
        </Stack>
      )}
    </Box>
  );
};

export default OrderTable;
