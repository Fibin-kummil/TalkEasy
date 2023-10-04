import React from "react";
import { Card, Typography, Grid, Stack, Box } from "@mui/material";
import homePageTop from "../../assets/images/homePangeTop.webp";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PeopleIcon from "@mui/icons-material/People";
import "./AdminBody.css";
import { useNavigate } from "react-router";
import AdminHeader from "./adminHeader";
import { useTheme } from "@emotion/react";
// import Box from '@mui/material/Box';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

const cardStyle = {
  width: "100%",
  height: "auto",
  justifyContent: "space-evenly",
  color: "#CC3366",
  fontSize: "4vw",
  paddingTop: "2vw",

  // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.9)'
};

const management = [
  {
    title: "Trainer Management",
    icon: <DirectionsRunIcon sx={{ fontSize: "6vw" }} />,
    path: "/trainerManage",
  },
  {
    title: "Banner Management",
    icon: <InsertPhotoIcon sx={{ fontSize: "6vw" }} />,
    path: "/bannerrManage",
  },
  {
    title: "User Management",
    icon: <PeopleIcon sx={{ fontSize: "6vw" }} />,
    path: "/userManage",
  },
];

const AdminBody = () => {
  const navigate = useNavigate();

  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  // const [state, setState] = React.useState({
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false,
  // });

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event &&
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );
  return (
    <div className="body-container">
      {/* <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer> */}


      <div className="image-container">
        <img src={homePageTop} alt="Home" className="image-darken" />

        {/* <AdminHeader /> */}

        <Grid
          className="centered-grid"
          container
          // spacing={2}
          direction="row"
          sx={{
            fontSize: { xs: "2vw", md: "3vw" },
            justifyContent: "space-evenly",
            // padding: "40px",
            // paddingTop: "5px",
          }}
        >
          {management.map((item, index) => (
            <Grid item xs={12} lg={3} key={index}>
              <Card
                style={cardStyle}
                key={index}
                elevation={4}
                onClick={() => navigate(item.path)}
              >
                <Stack direction="column" alignItems="center">
                  {item.icon}

                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "black",
                      fontSize: { xs: "16px", md: "20px" },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Box display="flex" justifyContent="center">
        <Typography paddingTop="100px" variant="h1" fontWeight="bold">
          Hello Admin Welcome Back
        </Typography>
      </Box>
    </div>
  );
};

export default AdminBody;
