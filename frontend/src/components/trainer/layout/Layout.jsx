import React from 'react'
import Navbar from './navbar'
import SideNav from './sideNav'


const RecruiterLayout = ({ children }) => {
 const [open, setOpen] = React.useState(false);
 return (
 <>
  <Navbar setOpen={setOpen} />
  <SideNav open={open} children={children} />
 </>
 )
}

export default RecruiterLayout