import React from 'react'
import { Routes , Route } from 'react-router'
import Home from './screens/home'
import LogIn from './components/LogIn/LogIn'
import SignUp from './components/signup/SignUp'
import AdminHome from './screens/adminHome'
import TrainerJoin from './screens/trainerJoin'
import TranerManage from './screens/tranerManage'
import CoursesPage from './screens/coursesPage'
import Contact from './components/contact/contact'
const Router = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adminHome" element={<AdminHome />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/trainerData" element={<TrainerJoin />} />
      <Route path="/trainerManage" element={<TranerManage />} />
      <Route path="/courses" element={<CoursesPage/>} />
      <Route path="/contact" element={<Contact/>} />
      
      </Routes>
    </>
  )
}

export default Router
