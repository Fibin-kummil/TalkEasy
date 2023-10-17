import React from "react";
import homePageTop from "../../assets/images/homePangeTop.webp";
import "./body.css";
import { Paper, IconButton, Typography, Grid, Button } from "@mui/material";
import ReduceCapacityRoundedIcon from "@mui/icons-material/ReduceCapacityRounded";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import Courses from "./courses";
import Subscribe from "./Subscribe";
import WhyTrainer from "./WhyTrainer";
import Cards from "./card";
import { useNavigate } from "react-router";

function Body() {
  const navigate = useNavigate()
  
  const onAction = () =>{
    navigate("/study")
  }



  return (
    <div className="body-container">
      <div className="image-container">
        <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
        {/* <img src={homePageTop} alt="Home" className="image-darken" /> */}
        <iframe width="1370" height="515"  src="https://www.youtube.be/embed/QQgXTLutn7s?si=Hgq7HV-4joKnoEqG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " allowfullscreen ></iframe>   
        {/* https://youtu.be/QQgXTLutn7s?si=Hgq7HV-4joKnoEqG */}
        </Grid>
        {/* <Button
          className="overlay-button" 
          style={{
            position: "absolute",
            top: "30%",
            left: "70%",
            transform: "translate(-50%, -50%)",
            zIndex: 2, // Ensure the button appears on top
            backgroundColor: "blue",
            border: "none",
            fontSize: "40px",
            color: "#CC3366",
            cursor: "pointer", 
          }}
          onClick={onAction}
        >
          Start Learning
        </Button> */}
        <Paper
          className="centered-paper"
          elevation={2}
          sx={{
            width: {xs:"68%",sm:"82%",md:"88%"},
            height: "auto",
            justifyContent: "space-evenly",
            mt:{xs:"90px",md:"20px"}
          }}
        >
          <IconButton
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              color: "#CC3366",
              fontSize: "4vw",
            }}
            color="inherit"
          >
            <Grid container>
              <Grid item xs={12} md={4}>
                <ReduceCapacityRoundedIcon
                  sx={{
                    fontSize: {
                      xs: "3rem",
                      md: "4rem",
                    }
                  }}
                />
                <Typography sx={{ color: "#000000", fontSize: "medium" }}>
                  2,00,000+ Subscribes
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Groups3RoundedIcon
                  sx={{
                    fontSize: {
                      xs: "3rem",
                      md: "4rem",
                    },
                  }}
                />
                <Typography sx={{ color: "#000000", fontSize: "medium" }}>
                  100 + experts
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <QueryBuilderRoundedIcon
                  sx={{
                    fontSize: {
                      xs: "3rem",
                      md: "4rem",
                    },
                  }}
                />
                <Typography sx={{ color: "#000000", fontSize: "medium" }}>
                  24x7 Speakers
                </Typography>
              </Grid>
            </Grid>
          </IconButton>
        </Paper>
      </div>

      <Courses />
      <Subscribe />
      <WhyTrainer />
      <Cards />
    </div>
  );
}

export default Body;
