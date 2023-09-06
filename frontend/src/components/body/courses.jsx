import React from "react";
import {
  ReduceCapacityRounded,
  RecordVoiceOverRounded,
  SelfImprovementRounded,
  AdminPanelSettingsRounded,
} from "@mui/icons-material";
import { Typography, Card, Stack, Grid } from '@mui/material';



const cardStyle = {
  width: '100%',
  height: 'auto', 
  justifyContent: "space-evenly", 
  color: '#CC3366', 
  fontSize: '4vw', 
  paddingTop: "2vw",
  
  // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.9)'
};


const courses = [
  {
    title: "Pre-Basic Level",
    icon: <ReduceCapacityRounded sx={{ fontSize: "8vw",  }} />,
  },
  {
    title: "Pre-Basic Level",
    icon: <RecordVoiceOverRounded sx={{ fontSize: "8vw" }} />,
  },
  {
    title: "Pre-Basic Level",
    icon: <AdminPanelSettingsRounded sx={{ fontSize: "8vw" }} />,
  },
  {
    title: "Pre-Basic Level",
    icon: <SelfImprovementRounded sx={{ fontSize: "8vw" }} />,
  },
];


function Courses() {
  return (
    <>
    <Typography sx={{ fontSize: '3vw',pt:"80px",pb:"10px" , paddingLeft: "50px", position:"relative"}} >Our Courses</Typography>
      <Grid container spacing={2}
        direction="row"
        
        sx={{
          fontSize: { xs: "2vw", md: "3vw" },
          justifyContent: "space-evenly",
          padding: "40px",
          paddingTop: "5px",
        }}
      >
        
        {courses.map((item,index) => (
          <Grid item  xs={12} lg={3} key={index}>
          <Card style={cardStyle} key={index}  elevation={4}>
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
    </>
  );
}

export default Courses;
