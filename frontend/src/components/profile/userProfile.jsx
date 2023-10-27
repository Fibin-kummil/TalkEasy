import React, { useState } from "react";
import Header from "../header/header";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Hidden,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Person2Icon from '@mui/icons-material/Person2';
import { profileUpdate } from "../../utils/api";


const UserProfile = () => {

  const [open, setOpen] = useState(false);
  const data = useSelector(store=>store?.user?.userData)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
};
// let data = JSON.parse(localStorage.getItem("store"))?.user?.userData;
 console.log("iiujhb",data);


const [userData, setUserData] = useState(data)

const handleChange = (event) => {
  const { name, value } = event.target;
  setUserData((prevUserData) => ({
    ...prevUserData,
    [name]: value,
   }))
}

  
  const submit = (e) =>{
    e.preventDefault()
    profileUpdate(userData)
    .then(res=>setUserData(res.data.data))
    setOpen(false);
  }
   
  
  return (
    <>
      <Header />  
      <Grid container p={10} spacing={3}>

        <Grid item lg={5} md={12} sm={12}>

          <Grid
            container
            
            spacing={6}
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid
              item
              display={"flex"}
              justifyContent={"center"}
              xs={12}
              sm={12}
              md={12}
            >
              <Avatar sx={{ width: 130, height: 130 }} />
            </Grid>
            <Grid
              container
              spacing={2}
              lg={12}
              md={4}
              sm={4}
              xs={4}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid
                item
                lg={12}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>Name :</Typography>
                {/* <TextField id="filled-basic" label={data.name} variant="filled" ></TextField> */}
                <Typography>{userData.name}</Typography>
              </Grid>
              <Grid
                item
                lg={12}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>Phone.no :</Typography>
                {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                <Typography>{userData.phone}</Typography>
              </Grid>
              <Grid
                item
                lg={12}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>Email :</Typography>
                {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                <Typography>{userData.email}</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              display={"flex"}
              justifyContent={"center"}
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <Button variant="contained" color="secondary" onClick={handleClickOpen}
>
                Edit Profile
              </Button>
            </Grid>
          </Grid>
        </Grid>



        <Hidden mdDown>
          <Grid item display={"flex"} justifyContent={"center"} lg={2}>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "black", width: "1px" }}
            />
          </Grid>
        </Hidden>



        <Grid
          item
          lg={5}
          md={12}
          sm={12}
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Trainer Opinion
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: "lightgray",
                  width: "auto",
                  height: "80%",
                  p: 4,
                }}
              >
                <Typography variant="h5">1</Typography>
                <Typography variant="h5">2</Typography>
                <Typography variant="h5">3</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>




      <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Basic Information"}
            </DialogTitle>
      <form onSubmit={submit}>
            <DialogContent>
              <TextField
                // label="username"
                name="name"
                placeholder="name"
                value={userData?.name}
                onChange={handleChange}
                sx={{ width: "100%", mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Person2Icon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                // label="email"
                name="email"
                value={userData?.email}
                onChange={handleChange}
                placeholder="email"
                sx={{ width: "100%", mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <EmailIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                // label="email"
                name="phone"
                placeholder="phone"
                sx={{ width: "100%", mb: 2 }}
                value={userData?.phone}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <PhoneIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <DialogActions>
                <Button
                  // onClick={handleUpdate}
                  sx={{
                    backgroundColor: "#5cb85c",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#5cb85c",
                      color: "white",
                    },
                  }}
                  type="submit"
                >
                  UPDATE
                </Button>
                <Button
                  onClick={handleClose}
                  autoFocus
                  sx={{
                    backgroundColor: "#d9534f",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#d9534f",
                      color: "white",
                    },
                  }}
                >
                  Cancel
                </Button>
              </DialogActions>
            </DialogContent>
         </form>
         </Dialog>
    </>
  );
};

export default UserProfile;
