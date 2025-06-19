import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;

  const validateInput = () => {
    if (!emailRegex.test(usernameOrEmail)) {
      setError("Enter a valid email address");
      return false;
    }
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 6 characters long and include at least one letter and one number");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateInput()) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/orders");
    }
  };

  return (
    <Box className="form-container">
      <Typography className="login-title">Login</Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Email"
          placeholder="example@gmail.com"
          margin="normal"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            mt: 2,
            py: 1.3,
            fontWeight: 600,
            background: "linear-gradient(135deg, #1e88e5, #42a5f5)",
            color: "#fff",
            borderRadius: "8px",
            ":hover": {
              background: "linear-gradient(135deg, #1565c0, #1e88e5)",
            },
          }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
