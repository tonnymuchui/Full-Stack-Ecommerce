import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    }
    console.log("userData", userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
           <Button
           className="bg-[#9155FD] w-full"
           type="submit"
           variant="contained"
           size="large"
           sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
           >
            Login
           </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>If you don't have an account?</p>
          <Button onClick={() => navigate('/register')} className="ml-5" size="small">Register</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
