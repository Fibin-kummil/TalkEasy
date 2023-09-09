import React from "react";
import OurCourses from "../components/courses/ourCourses";
import Courses from "../components/body/courses";
import WhyTrainer from "../components/body/WhyTrainer";
import Footer from "../components/footer/Footer";
import CourseLevel from "../components/courses/courseLevel";
import Header from "../components/header/header";

const item = [
  {name:"Pre-Basic Level"},
  {name:"Beginner Level"},
  {name:"Intermediate Level"},
  {name:"Advance Level"}
]
const level = [
  {name:"Learn from the scratch"},
  {name:"Know to introduce "},
  {name:"Intermediate Level"},
  {name:"Advance Level"}
]

const CoursesPage = () => {
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
