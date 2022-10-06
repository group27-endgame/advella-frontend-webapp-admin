import { createTheme } from "@mui/material";
import { backgroundColor, disabledColor, errorColor, fontColor, paperColor, primaryColor, secondaryColor } from "./constants";

export const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: backgroundColor,
        paper: paperColor,
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
      text: {
        primary: fontColor,
        secondary: primaryColor,
      },
    },
  });