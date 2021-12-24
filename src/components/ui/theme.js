import {
  amber,
  blue,
  blueGrey,
  brown,
  orange,
  teal,
  yellow,
} from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    mode: "light",
    primary: brown,
    secondary: amber,
  },
  background: {
    default: "black",
  },
  typography: {
    tab: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "white",
    },
  },
});
