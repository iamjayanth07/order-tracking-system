import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OrdersPage from "./pages/OrdersPage"; // Placeholder
import { CssBaseline } from "@mui/material";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/orders"
          element={isLoggedIn ? <OrdersPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;

