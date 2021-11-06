import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const commonProperties = {
  palette: {
    primary: {
      main: "#3f8f3e",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
};

export const lightTheme = createTheme({
  ...commonProperties,
  palette: {
    ...commonProperties.palette,
    mode: "light",
  },
});

export const darkTheme = createTheme({
  ...commonProperties,
  palette: {
    ...commonProperties.palette,
    mode: "dark",
  },
});

export default commonProperties;
