import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"YekanBakh","Roboto","Arial"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },
  direction: "rtl",
});

theme.typography.h5 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};

theme.typography.h4 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.125rem",
  },
};

theme.typography.h6 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: ".9rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
  },
};

theme.typography.p = {
  [theme.breakpoints.up("xs")]: {
    fontSize: ".7rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: ".8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};

export default theme;
