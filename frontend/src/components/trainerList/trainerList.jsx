import React, { useEffect, useState } from "react";
import Header from "../header/header";
import { Button, Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { ListTrainers } from "../../utils/api";

const TrainerList = () => {
  
  const [data, setData] = useState([])

  useEffect(() => {
   ListTrainers().then(res=>setData(res.data.data))
  },[])
  console.log("tera",data);
  


  return (
    <>
      <Header />
      <Typography variant="h2" display={"flex"} justifyContent={"center"}>Select Trainer</Typography>

      <Grid container spacing={8} p={5}>
        {data.map((x,index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
            <Paper sx={{width:"100%"}}  >
            <Grid
              container
              direction={"column"}
              p={4}
              spacing={{ xs: 2, lg: 2, md: 0, sm: 2 }}
              
              overflow={"hidden"}
            >
              <Grid item>
                <Grid container spacing={4} justifyContent={"space-between"}>
                  <Grid item>
                    <Grid container direction={"column"}>
                      <Grid item>
                        <Typography variant="h4" fontWeight={700}>
                          {x.name}
                        </Typography>
                      </Grid>
                      <Grid item container direction={"column"}>
                        <Grid item>
                          <StarIcon sx={{ color: "#FFD452" }} /> 4.9 .. 1914
                          review
                        </Grid>
                        <Grid item>
                          <CalendarTodayIcon />
                          Tvm,Kerala,India
                        </Grid>
                        <Grid item >
                          <CalendarTodayIcon /> Tutor Since 2022
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item display={"flex"} alignItems={"center"}>
                    <Avatar sx={{ width: 84, height: 84 }}>F</Avatar>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Typography variant="p">
                  welcom Avatars are found throughout material design with uses
                  in everything from tables to dialog menus
                </Typography>
              </Grid>
              <Grid item mb={3}>
                <Grid container direction={"column"} spacing={1}>
                  <Grid item>
                    <Typography variant="h6" fontWeight={600}>
                      Highlights
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Card sx={{ backgroundColor: "lightgray", width: "300px" }}>
                      <Typography>100+ Chats</Typography>
                      <Typography>Certified Teacher</Typography>
                    </Card>
                  </Grid>
                  <Grid item display={"flex"} justifyContent={"center"}>
                    <Button variant="contained" fullWidth>
                      Select
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            </Paper> 
          </Grid>
        ))}
      </Grid>
      <Typography variant="h3" display={"flex"} justifyContent={"center"}>Trainer Avilable</Typography>

    </>
  );
};

export default TrainerList;
