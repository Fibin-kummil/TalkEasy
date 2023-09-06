import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Hidden,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { Menu, MenuItem } from "@mui/material/";
import LogIn from "../LogIn/LogIn";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../slices/UserSlice.js";
import { notify } from "../../utils/notification";
import { useNavigate } from "react-router";
// import { useNavigate } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ButtonStyle = {
    fontFamily: "Poppins",
    fontSize: { xs: "18px", md: "24px" },
    color: "inherit",
  };
  const typographyStyle = {
    fontFamily: "Poppins",
    fontSize: { xs: "18px", md: "24px" },
    color: "inherit",
  };
  const store = useSelector((data) => data?.user);
  console.log(store);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // const item = ["home", "courses", "about", "contact"];
  const item = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "courses",
      path: "/courses",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  axios.defaults.withCredentials = true;

  const sendLogoutReq = async () => {
    console.log("hdhdh", 1);
    const res = await axios.post("http://localhost:5000/api/logout", null, {
      withCredentials: true,
    });
    console.log("hdhdh", 2);
    if (res.status === 200) {
      return res;
    }
    return new Error("Unable to Logout");
  };

  const handleLogout = () => {
    sendLogoutReq()
      .then(() => dispatch(logout()))
      .catch((err) => console.log(err));
    notify({ message: "logged out", type: "success" });
    // Handle logout error if needed
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          width: "auto",
          height: { xs: "80px", md: "80px" },
        }}
      >
        <IconButton
          sx={{ width: "auto", height: "40px" }}
          edge="start"
          color="inherit"
          aria-label="logo"
        >
          <img src={logo} alt="Logo" style={{ maxHeight: "700%" }} />
        </IconButton>
        <Stack direction="row" spacing={3} alignItems="center">
          {/* Hidden component for larger screens */}
          <Hidden mdDown>
            {item.map((item) => (
              <Typography sx={typographyStyle} key={item}>
                {store.isLoggedIn ? (
                  <Button
                    style={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "18px", md: "24px" },
                      color: "inherit",
                    }}
                    onClick={() => navigate(item.path)}
                  >
                    {item.name}
                  </Button>
                ) : (
                  <LogIn title={item.name} />
                )}
              </Typography>
            ))}
          </Hidden>

          <Hidden mdUp>
            <IconButton size="large" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={handleDrawerClose}
            >
              <Box
                sx={{
                  width: "200px",
                  mt: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {item.map((item) => (
                  <Typography sx={typographyStyle} key={item} onClick={() => navigate(item.path)}>
                    {item.name}
                  </Typography>
                ))}
              </Box>
            </Drawer>
          </Hidden>

          <Toolbar>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              // color="inherit"
            >
              <AccountCircleIcon
                sx={{ width: "auto", height: { xs: "28px", md: "38px" } }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClick={handleClose}
            >
              <MenuItem>
                <Button style={ButtonStyle}>Profile</Button>
              </MenuItem>
              {store?.isLoggedIn ? (
                <MenuItem>
                  <Button style={ButtonStyle} onClick={handleLogout}>
                    Logout
                  </Button>
                </MenuItem>
              ) : (
                <MenuItem>
                  <LogIn />
                </MenuItem>
              )}
            </Menu>
          </Toolbar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
