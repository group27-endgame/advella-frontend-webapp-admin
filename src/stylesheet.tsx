import { createTheme } from "@mui/material";
import { backgroundColor, disabledColor, errorColor, primaryColor, secondaryColor } from "./constants";

export const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: backgroundColor,
        // paper: greyLight,
      },
      action: {
        // disabledBackground: greenLight,
        disabled: disabledColor,
      },
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