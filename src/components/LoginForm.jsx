import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateInput = () => {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,}$/;

 
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/; 

    if (!usernameRegex.test(username)) {
      setError("Username must be at least 4 characters (letters/numbers/_)");
      return false;
    }
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 6 characters long");
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
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10, p: 4, boxShadow: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
