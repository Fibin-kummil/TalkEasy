import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import {store} from "./slices/Store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme"; // this is for coustamise color (i rap Router in this in ThemeProvider)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <GoogleOAuthProvider clientId="494404285312-vcar3kfe9g0nfc9q1gl9ktddm00p0hjj.apps.googleusercontent.com">
        <App />
       </GoogleOAuthProvider>
      {/* </ThemeProvider> */}
    </Provider>

    {/* </React.StrictMode> */}
  </BrowserRouter>
);
