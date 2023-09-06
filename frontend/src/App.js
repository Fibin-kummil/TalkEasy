import React from "react";
import Router from "./routes";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";




function App() {
  return (
  <>
   <ReactNotifications />
   <Router/>
   
  </>
  );
}

export default App;
