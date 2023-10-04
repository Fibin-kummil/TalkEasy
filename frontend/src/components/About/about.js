import React from 'react'
import Header from '../header/header'
import about1 from "../../assets/images/about1.png"
import about2 from "../../assets/images/about2.png"
import about3 from "../../assets/images/about3.png"
import Footer from '../footer/Footer'


const About = () => {
  return (
    <>
    <Header />
    <img src={about2} alt="coursesP" className="image" />
    <img src={about1} alt="coursesP" className="image" />
    <img src={about3} alt="coursesP" className="image" />
    <Footer />
    </>
  )
}

export default About