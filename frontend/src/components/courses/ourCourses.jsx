import React from 'react'
import Header from '../header/header'
import coursesImage from "../../assets/images/coursesImage.jpg"
import { Paper, Typography } from '@mui/material'
import Courses from '../body/courses'
import WhyTrainer from '../body/WhyTrainer'
import Footer from '../footer/Footer'

const OurCourses = () => {
  return (
<>
  <Header />
  <div className="image-container" style={{ position: "relative" }}>
    <img src={coursesImage} alt="coursesP" className="image-darken" />
    <h1
      style={{
        position: "absolute",
        top: "50%", // Adjust as needed to vertically center the text
        left: "50%", // Adjust as needed to horizontally center the text
        transform: "translate(-50%, -50%)", // Center both horizontally and vertically
        color: "white", // Text color
        background: "rgba(0, 0, 0, 0)", // Background color for text
        padding: "10px", // Adjust as needed for spacing
        fontSize:"90px"
      }}
    >
      Learn To Speak <br/> Your Dream 
       Language 
    </h1>
  </div>
  <Courses/>
  <WhyTrainer/>
  <Footer/>
</>
  )
}

export default OurCourses

