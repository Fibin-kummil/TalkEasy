import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../src/components/admin/layout/Layout'

const AdminPrivateRoute = () => {
  console.log(useSelector((state) => state?.user?.userData?.role))
    return useSelector((state) => state?.user?.userData?.role) === "admin" ? <Layout><Outlet /></Layout> : <Navigate to='/' replace />;
}

export default AdminPrivateRoute

