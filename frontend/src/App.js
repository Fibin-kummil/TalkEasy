import React, { useRef } from "react";
import Router from "./routes";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import TrainerHomeP from "./screens/trainerHomeP";
import { useDispatch } from "react-redux";
// import { io } from "socket.io-client";
// import { socket } from "./slices/UserSlice";


function App() {
  // const dispatch = useDispatch()
  // const newSocket = useRef()
  // newSocket.current = io("http://localhost:5000")
  // dispatch(socket(newSocket))
  return (
    <>
      <ReactNotifications />

      <Router />
      {/* <TrainerHomeP/> */}
    </>
  );
}

export default App;
