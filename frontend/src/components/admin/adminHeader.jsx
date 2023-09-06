import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../../slices/UserSlice.js";
import { useNavigate } from "react-router";
import { notify } from "../../utils/notification";
import axios from "axios";
import { IconButton, Toolbar, Button } from "@mui/material";
import { Menu, MenuItem } from "@mui/material/";
import LogIn from "../LogIn/LogIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ButtonStyle = {
  fontFamily: "Poppins",
  fontSize: { xs: "18px", md: "24px" },
  color: "inherit",
};

const AdminHeader = () => {
  const store = useSelector((data) => data?.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenu = (event) => {
    console.log(1);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    sendLogoutReq()
      .then(() => dispatch(logout()))
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
    notify({ message: "logged out", type: "success" });
    // Handle logout error if needed
  };

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

  return (
    <>
      <AccountCircleIcon
        className="icon"
        onClick={handleMenu}
        sx={{ fontSize: "50px", color: "white" }}
      />

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
    </>
  );
};

export default AdminHeader;
