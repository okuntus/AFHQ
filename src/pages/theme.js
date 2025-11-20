// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#002f6c",       // Air Force dark blue
      light: "#3fa9f5", 
      dark: "#001a3c",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d4af37",       // Air Force gold
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#1b1f23",
      secondary: "#4a4e52",
    },
  },

  typography: {
    fontFamily: `"Roboto Condensed", "Montserrat", sans-serif`,
    h1: { fontWeight: 700, textTransform: "uppercase" },
    h2: { fontWeight: 700, textTransform: "uppercase" },
    h3: { fontWeight: 600 },
    h5: { fontWeight: 700 },
    button: { fontWeight: 600 },
  },

  shape: {
    borderRadius: 6,
  }
});

export default theme;
