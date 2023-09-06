import React from 'react';
import homePageTop from '../../assets/images/homePangeTop.webp';
import './body.css';
import { Paper, IconButton, Typography } from '@mui/material';
import ReduceCapacityRoundedIcon from '@mui/icons-material/ReduceCapacityRounded';
import Groups3RoundedIcon from '@mui/icons-material/Groups3Rounded';
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import Courses from './courses';
import Subscribe from "./Subscribe";
import WhyTrainer from './WhyTrainer';
import Cards from "./card";




function Body() {
  return (
    <div className="body-container">
      <div className="image-container">
        <img src={homePageTop} alt='Home' className="image-darken" />
        <Paper className="centered-paper" elevation={2} sx={{ width: '90%', height: '15%', justifyContent: "space-evenly", paddingTop: "5px" }}>
          <IconButton sx={{ width: '100%', height: 'auto', justifyContent: "space-evenly", color: '#CC3366', fontSize: '4vw', paddingTop: "2vw" }} color='inherit'>
            <ReduceCapacityRoundedIcon sx={{ fontSize: "8vw" }} />
            <Typography sx={{ color: '#000000', fontSize: '1.7vw' }}>2,00,000+ Subscribes</Typography>
            <Groups3RoundedIcon sx={{ fontSize: "8vw" }} />
            <Typography sx={{ color: '#000000', fontSize: '1.7vw' }}>100 + experts</Typography>
            <QueryBuilderRoundedIcon sx={{ fontSize: "8vw" }} />
            <Typography sx={{ color: '#000000', fontSize: '1.7vw' }}>24x7 Speakers</Typography>
          </IconButton>
        </Paper>
        </div>
      
     <Courses/>
     <Subscribe/>
     <WhyTrainer/>
     <Cards/>
    </div>
  );
}

export default Body 