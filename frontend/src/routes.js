import React from "react";
import { Routes, Route } from "react-router";
import Home from "./screens/home";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/signup/SignUp";
import AdminHome from "./screens/adminHome";
import TrainerJoin from "./screens/trainerJoin";
import TranerManage from "./screens/tranerManage";
import CoursesPage from "./screens/coursesPage";
import Contact from "./components/contact/contact";
import RoomP from "./screens/roomP";
import Video from "./components/rooms/vedioCall";
import TrainerHomeP from "./screens/trainerHomeP";
import UserProfile from "./components/profile/userProfile";
import Subscription from "./components/subscription/subscription";
import TrainerList from "./components/trainerList/trainerList";
import Study from "./components/study/study";
import About from "./components/About/about";
import TrainerAvailable from "./components/management/trainerManagement/trainerAvailable";
import AdminPrivateRoute from "./adminRoute";
import Users from "./components/management/trainerManagement/users";
import TrainerPrivateRoute from "./trainerRoute";
import Students from "./components/trainer/students";
import Class from "./components/trainer/class";
import UserPrivateRoute from "./userRoute";
import ErrorComponent from "./screens/error";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<TrainerPrivateRoute />}>
          <Route path="/trainerHome" element={<TrainerHomeP />} />
          <Route path="/students" element={<Students />} />
          <Route path="/Class" element={<Class />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />

        <Route element={<UserPrivateRoute />}>
          <Route path="/trainerData" element={<TrainerJoin />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rooms" element={<RoomP />} />
          <Route path="/joinMeeting" element={<Video />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/trainerList" element={<TrainerList />} />
          <Route path="/study" element={<Study />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<AdminPrivateRoute />}>
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/trainerAvailable" element={<TrainerAvailable />} />
          <Route path="/trainerManage" element={<TranerManage />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/*" element={<ErrorComponent />} />

      </Routes>
    </>
  );
};

export default Router;
