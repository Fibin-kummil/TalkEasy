import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const UserPrivateRoute = () => {
    return useSelector(store=>store?.user?.userData?.role) === "user" ? <Outlet /> : <Navigate to='/LogIn' replace />;
}

export default UserPrivateRoute