import React from 'react'
import Header from '../header/header'
import coursesImage from "../../assets/images/coursesImage.jpg"
import { Grid, Paper, Typography } from '@mui/material'
import Courses from '../body/courses'
import WhyTrainer from '../body/WhyTrainer'
import Footer from '../footer/Footer'

const OurCourses = () => {
  return (
<>
  
  <div className="image-container" style={{ position: "relative" }}>
    <Grid >
    <img src={coursesImage} alt="coursesP" className="image-darken" />
    <Typography variant='h1'
        fontSize={{xs:"40px",sm:"65px",md:"90px", lg:"110px"}}
      style={{
        
        position: "absolute",
        top: "50%", // Adjust as needed to vertically center the text
        left: "50%", // Adjust as needed to horizontally center the text
        transform: "translate(-50%, -50%)", // Center both horizontally and vertically
        color: "white", // Text color
        background: "rgba(0, 0, 0, 0)", // Background color for text
        padding: "10px", // Adjust as needed for spacing
      }}
    >
      Learn To Speak  Your Dream 
       Language 
    </Typography>
    </Grid>
  </div>
  
</>
  )
}

export default OurCourses

