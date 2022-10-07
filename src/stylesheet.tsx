import { createTheme } from "@mui/material";
import { fontSize } from "@mui/system";
import { backgroundColor, disabledColor, errorColor, fontColor, paperColor, primaryColor, secondaryColor, tertiaryColor } from "./constants";

export const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: backgroundColor,
        paper: paperColor,
      },
      action: {
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
    components: {
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            color: fontColor
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: paperColor,
            backgroundImage: "none"
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            color: primaryColor,
            fontSize: 52,
            fontWeight: 700
          },
          h2: {
            color: primaryColor,
            fontSize: 42,
            fontWeight: 700
          },
          h3: {
            color: primaryColor,
            fontSize: 32,
            fontWeight: 700
          },
          h4: {
            color: tertiaryColor,
            fontSize: 22,
            fontWeight: 700
          },
          h5: {
            color: tertiaryColor,
            fontSize: 22,
            fontWeight: 500
          },
          h6: {
            color: tertiaryColor,
            fontSize: 22,
            fontWeight: 300
          },
          subtitle1: {
            color: secondaryColor,
            fontWeight: 100
          },
          subtitle2: {
            color: secondaryColor,
            fontWeight: 100
          },
          root: {
            color: fontColor
          }
        }
      }
    }
  });