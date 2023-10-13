import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import RecruiterLayout from './components/trainer/layout/Layout';
// import Layout from '../src/components/admin/layout/Layout'

const TrainerPrivateRoute = () => {
  console.log(useSelector((state) => state?.user?.userData?.user?.role))
    return useSelector((state) => state?.user?.userData?.user?.role) === "trainer" ? <RecruiterLayout> <Outlet/> </RecruiterLayout> : <Navigate to='/' replace />;
}

export default TrainerPrivateRoute



