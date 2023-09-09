import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./slices/Store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme"; // this is for coustamise color (i rap Router in this in ThemeProvider)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
        <App />
      {/* </ThemeProvider> */}
    </Provider>

    {/* </React.StrictMode> */}
  </BrowserRouter>
);
