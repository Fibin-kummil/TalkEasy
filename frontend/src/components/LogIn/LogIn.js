import React from "react";
// import * as React from 'react';
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
// import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { login } from "../../slices/UserSlice";
// import { notify } from "../../utils/notification";
import { Login, TrainerLogin } from "../../utils/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LogIn = (props) => {
  const { title = "LOGIN" } = props;
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("user");

  const handleRadio = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ButtonStyle = {
    fontFamily: "Poppins",
    fontSize: { xs: "18px", md: "24px" },
    color: "inherit",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Login({
      email: inputs.email,
      password: inputs.password,
    })
      // .then((res) => res?.data && dispatch(login()))
      // .then(() => navigate("/"));
      .then((res) => {
        if (res?.data?.user?.role === "admin") {
          console.log(res);
          dispatch(login(res.data.user)); // Dispatch the action for admin
          navigate("/adminHome");
        } else {
          console.log(res.data.user, "res");
          dispatch(login(res.data.user)); // Dispatch the action for regular user
          navigate("/");
        }
      })
      .catch((error) => {
        // Handle error here
        console.error("Login error:", error);
      });
    };
    
    const Submit = (e) =>{
    e.preventDefault();
    TrainerLogin({
      email: inputs.email,
      password: inputs.password,
    })
      .then((res) => res?.data && dispatch(login()))
      .then(() => navigate("/trainerHome"))
      .catch((error) => {
        console.error("Login error:", error);
      })   
  }



  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <Button style={ButtonStyle} onClick={handleOpen}>
        {title}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  pb: "30px",
                }}
              >
                <Typography
                  component="h1"
                  variant="h4"
                  sx={{ fontWeight: "bold" }}
                >
                  WELCOME
                </Typography>
                <Typography variant="h9" sx={{ fontSize: "15px", pb: "30px" }}>
                  Login by entering the information below
                </Typography>
              </Stack>
              <FormControl>
                <FormLabel
                  sx={{ display: "flex", justifyContent: "center" }}
                  id="demo-row-radio-buttons-group-label"
                >
                  Select User/Trainer
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  // value={value}
                  onChange={handleRadio}
                  
                  >
                  <FormControlLabel
                    value="user"
                    control={<Radio checked={selectedValue === 'user'} />}
                    label="User"
                    
                    
                    
                  />
                  <FormControlLabel
                    value="trainer"
                    control={<Radio checked={selectedValue === 'trainer'}/>}
                    label="Trainer"
                  />
                </RadioGroup>
              </FormControl>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="standard"
                  onChange={handleChange}
                  value={inputs.email}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="standard"
                  onChange={handleChange}
                  value={inputs.password}
                />
                <Stack alignItems={"end"}>
                  <Grid>
                    <Link href="#" variant="body2" sx={{ color: "#CC3366" }}>
                      Forgot Password
                    </Link>
                  </Grid>
                </Stack>
                {selectedValue === 'user'?
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#CC3366" }}
                  onClick={handleSubmit}
                >
                  user LOG In
                </Button>
                :
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#CC3366" }}
                  onClick={Submit}
                >
                  Trainer LOG In
                </Button>
                 }
                <Grid
                  pt={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Grid item xs>
                    <h4 href="#" variant="body2">
                      Don't have an account?
                    </h4>
                  </Grid>
                  <Grid item>
                    <Link to={"/signUp"} variant="body2">
                      <h4>SIGN UP</h4>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      </Modal>
    </>
  );
};

export default LogIn;
