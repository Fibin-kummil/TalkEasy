import React from "react";
import Router from "./routes";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import TrainerHomeP from "./screens/trainerHomeP";

function App() {
  return (
    <>
      <ReactNotifications />

      <Router />
      {/* <TrainerHomeP/> */}
    </>
  );
}

export default App;
