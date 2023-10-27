import React, { useEffect } from "react";
import OurCourses from "../components/courses/ourCourses";
import Courses from "../components/body/courses";
import WhyTrainer from "../components/body/WhyTrainer";
import Footer from "../components/footer/Footer";
import CourseLevel from "../components/courses/courseLevel";
import Header from "../components/header/header";
// import { io } from "socket.io-client";



const CoursesPage = () => {

  // useEffect(() => {
  //   const socket = io("http://localhost:5000");
  //   console.log(socket);
  // }, [])

  return (
    <div>
      <Header />
      <OurCourses />
      <Courses />
      <WhyTrainer />
      <CourseLevel/>
      <Footer />
    </div>
  );
};

export default CoursesPage;
