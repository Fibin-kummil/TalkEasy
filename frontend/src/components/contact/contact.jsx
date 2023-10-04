import React from "react";
import Header from "../header/header";
import Subscribe from "../../assets/images/contact.png"
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="image-container" style={{ position: "relative" }}>
        <img src={Subscribe} alt="coursesP" className="image" style={{maxHeight:"700px"}} />

        
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
