import React from "react";
import Header from "../header/header";
import Subscribe from "../../assets/images/Subscribe.jpg"
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="image-container" style={{ position: "relative" }}>
        <img src={Subscribe} alt="coursesP" className="image-darken" style={{maxHeight:"700px"}} />

        
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
