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
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { Menu, MenuItem } from "@mui/material/";
import LogIn from "../LogIn/LogIn";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../slices/UserSlice.js";
import { useNavigate } from "react-router";
import Tooltip from "@mui/material/Tooltip";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Close } from "@mui/icons-material";
import { CloseN, Logout } from "../../utils/api";

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

  const handleLogout = () => {
    console.log("aaaaa")
    Logout()
      .then((res) => dispatch(logout(res.data)))
      .catch((err) => console.log(err));
  }

  console.log(store);
  let a = store?.isLoggedIn ? JSON.parse(localStorage.getItem("user_id")) : null;

  console.log("111", a)
const [notification, setNotification] = useState(a?.notification || [])
  
  const closeNotification = (index) => {
  console.log("qwq=>",a?.email)
    CloseN({index,email:a?.email})
    setNotification(prev=>prev.filter((x,i)=>i!=index))
  }


  

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorE2, setAnchorE2] = React.useState(null);
  const open = Boolean(anchorE2);
  const handleClick = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorE2(null);
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
            {item.map((item, index) => (
              <Typography sx={typographyStyle} key={index}>
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
                  <Typography
                    sx={typographyStyle}
                    key={item}
                    onClick={() => navigate(item.path)}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Box>
            </Drawer>
          </Hidden>

          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}  
              >
                {store?.isLoggedIn ? (
                  <Badge
                    sx={{ width: 32, height: 32 }}
                    color="success"
                    badgeContent={notification.length}
                  >
                    <NotificationsIcon />
                  </Badge>
                ) : (
                  ""
                )}
              </IconButton>
            </Tooltip>
          </Box>

          <Menu
            anchorEl={anchorE2}
            id="account-menu"
            open={open}
            onClose={handleCloses}
            onClick={handleCloses}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {notification.length &&
              notification.map((x, index) => (
                <MenuItem key={index}>
                  <Typography>{x}</Typography>
                  <IconButton onClick={()=>closeNotification(index)} >
                    <Close />
                  </IconButton>
                </MenuItem>
              ))}
          </Menu>

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
                sx={{ width: "auto", height: { xs: "28px", md: "38px" }  }}
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
