import React, { useState } from "react";
import {
  ReduceCapacityRounded,
  RecordVoiceOverRounded,
  SelfImprovementRounded,
  AdminPanelSettingsRounded,
  Email,
} from "@mui/icons-material";
import { Typography, Card, Stack, Grid, Dialog, DialogTitle, DialogContentText, TextField, Button, DialogActions, DialogContent, Autocomplete, Chip, Input } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import LogIn from "../LogIn/LogIn";
import { storeChooseLanguage } from "../../utils/api";
import { login } from "../../slices/UserSlice";


const cardStyle = {
  width: "100%",
  height: "auto",
  justifyContent: "space-evenly",
  color: "#CC3366",
  fontSize: "4vw",
  paddingTop: "2vw",

  // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.9)'
};

const courses = [
  {
    title: "Pre-Basic Level",
    
    icon: (
      <ReduceCapacityRounded
        sx={{
          fontSize: {
            xs: "3rem",
            md: "4rem",
          },
        }}
      />
    ),
  },
  {
    title: "Basic Level",
    
    icon: (
      <RecordVoiceOverRounded
        sx={{
          fontSize: {
            xs: "3rem",
            md: "4rem",
          },
        }}
      />
    ),
  },
  {
    title: "Intermediate Level",
    
    icon: (
      <AdminPanelSettingsRounded
        sx={{
          fontSize: {
            xs: "3rem",
            md: "4rem",
          },
        }}
      />
    ),
  },
  {
    title: "Advance Level",
    
    icon: (
      <SelfImprovementRounded
        sx={{
          fontSize: {
            xs: "3rem",
            md: "4rem",
          },
        }}
      />
    ),
  },
];

const top100Films = [
  "Assamese",
  "Bengali",
  "Bodo",
  "Dogri",
  "English",
  "Gujarati",
  "Hindi",
  "Kannada",
  "Kashmiri",
  "Konkani",
  "Maithili",
  "Malayalam",
  "Marathi",
  "Meitei",
  "Nepali",
  "Odia",
  "Punjabi",
  "Sanskrit",
  "Santali",
  "Sindhi",
  "Tamil",
  "Telugu",
  "Urdu",
];

function Courses() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const store = useSelector((data) => data?.user);
  const handleClickOpen = () => {
    {store?.isLoggedIn ? ( setOpen(true) ) : (setOpen(false))  }
  };

  const handleClose = () => {
    setOpen(false);
  };



  const [data, setdata] = useState({ language: []});
  const change = (event) => {
    setdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.files[0],
    }));
  }

  let a = JSON.parse(localStorage.getItem("store"))?.user?.userData;
  // let email = a.email
  // console.log("gdgdg",email);
  
  console.log(data)
  const languagechoose = (e) =>{
    console.log(123);
    e.preventDefault()
    storeChooseLanguage({
      nativeLanguage: data.nativeLanguage,
      selectedLanguage:data.selectLanguage,
      // email:email
    })
    .then((res) => res?.data && dispatch(login()))
      .then(() => navigate("/subscription"))
      .catch((error) => {
        console.error("error:", error);
      })
      setOpen(false)
    navigate("/subscription")
  }

  return (
    <Grid
      sx={{
        marginTop: {
          xs: "200px",
          sm: "210px",
          md: "70px",
          lg: "80px"
        },
        padding:{
          lg:"1%"
        }
      }}
    >
      <Typography
        sx={{
          fontSize: "3vw",
          pt: "80px",
          pb: "10px",
          paddingLeft: "50px",
          position: "relative",
        }}
      >
        Our Courses
      </Typography>
      <Grid
        container
        spacing={2}
        direction="row"
        sx={{
          fontSize: { xs: "2vw", md: "3vw" },
          justifyContent: "space-evenly",
          padding: "40px",
          paddingTop: "5px",
        }}
        
      >
        {courses.map((item, index) => (
          <Grid item xs={12} lg={3} key={index} >
            <Card style={cardStyle} key={index} elevation={4} onClick={handleClickOpen}  >
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

    <form  onSubmit={languagechoose}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose Language</DialogTitle>
        <DialogContent>

        <Autocomplete
                    
                    id="tags-filled"
                    
                    onChange={(e, value) =>
                      setdata({ ...data, nativeLanguage: value })
                    }
                    options={top100Films}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          variant="outlined"
                          label={option}
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="filled"
                        label="Select Your Native Language"
                        placeholder="Select Language"
                        sx={{width:"300px"}}
                       
                      />
                    )}
                  />
        <Autocomplete
                    
                    id="tags-filled"
                   
                    onChange={(e, value) =>
                      setdata({ ...data, selectLanguage: value })
                    }
                    options={top100Films}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          variant="outlined"
                          label={option}
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="filled"
                        label="Select Language you want to learn"
                        placeholder="Select Language"
                       
                      />
                    )}
                  />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={()=>{navigate("/subscription")}}>Subscribe</Button> */}
          <Button onClick={languagechoose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      </form> 
      

    </Grid>

  );
}

export default Courses;






 