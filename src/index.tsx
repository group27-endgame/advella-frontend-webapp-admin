import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { backgroundColor, errorColor, primaryColor, secondaryColor } from "./constants";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: backgroundColor,
      // paper: greyLight,
    },
    // action: {
    //   disabledBackground: greenLight,
    //   disabled: greyLight,
    // },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: errorColor,
    },
    // text: {
    //   primary: white,
    //   secondary: greyLight,
    // },
  },
  // components: {
  //   MuiAppBar: {
  //     styleOverrides: {
  //       colorPrimary: {
  //         backgroundColor: greyLight,
  //       },
  //     },
  //   },
  // },
});


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
