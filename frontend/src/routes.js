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
import RoomP from './screens/roomP'
import Video from './components/rooms/vedioCall'
import TrainerHomeP from './screens/trainerHomeP'
import UserProfile from './components/profile/userProfile'
import Subscription from './components/subscription/subscription'
import TrainerList from './components/trainerList/trainerList'
const Router = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trainerHome" element={<TrainerHomeP />} />
      <Route path="/adminHome" element={<AdminHome />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/trainerData" element={<TrainerJoin />} />
      <Route path="/trainerManage" element={<TranerManage />} />
      <Route path="/courses" element={<CoursesPage/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/rooms" element={<RoomP/>} />
      <Route path='/joinMeeting' element={<Video/>}/>
      <Route path='/user_profile' element={<UserProfile/>}/>
      <Route path='/subscription' element={<Subscription/>}/>
      <Route path='/trainerList' element={<TrainerList/>}/>
      </Routes>
    </>
  )
}

export default Router
