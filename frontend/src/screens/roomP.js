import React, { useState } from 'react'
import Rooms from '../components/rooms/rooms'
import Header from '../components/header/header'
import Footer from '../components/footer/Footer'
import MyGroup from '../components/rooms/myGroup'

const RoomP = () => {
  const [data, setdata] = useState({})
  const [disable, setdisable] = useState(false)

  return (
    <>
    <Header/>
    <Rooms setdata={setdata} disable={disable} setdisable={setdisable}/>
    <MyGroup data={data} setdisable={setdisable} setData={setdata}/>
    <Footer/>
    </>
  )
}

export default RoomP

