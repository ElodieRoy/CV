import { createMuiTheme } from "@material-ui/core"

const yellowColor = "#eea622"
const darkBlueColor = "#303b45"
const lightGreyColor = "#fafafa"
// const brownColor = "#3c3837"

const theme = createMuiTheme({
  // Colors
  palette: {
    common: {
      white: lightGreyColor
    },
    primary: {
      main: yellowColor,
      contrastText: "#fff"
    },
    secondary: {
      main: darkBlueColor
    },
    action: {
      active: lightGreyColor
    }
  },

  // Fonts
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "medel",
      fontSize: "2.5rem",
      color: yellowColor,
      textAlign: "center",
      userSelect: "none"
    },
    h2: {
      fontSize: "1.5rem",
      color: lightGreyColor,
      textAlign: "center",
      userSelect: "none"
    },
    h3: {
      color: yellowColor,
      fontSize: "2.3rem",
      textAlign: "center",
      marginBottom: 30,
      textTransform: "uppercase",
      userSelect: "none"
    },
    h4: {
      color: darkBlueColor,
      fontSize: "1rem",
      fontWeight: 600,
      marginTop: 20
    },
    h5: {
      color: darkBlueColor,
      fontSize: "1.2rem",
      fontWeight: 600
    },
    h6: {
      color: yellowColor,
      fontSize: ".8rem",
      marginTop: 20
    },
    subtitle1: {
      color: "grey",
      fontSize: "1rem",
      // fontWeight: 200,
      marginTop: 10
    },
    subtitle2: {
      color: "grey",
      fontSize: "0.8rem",
      fontWeight: 200,
      fontStyle: "italic",
      marginTop: 20
    }
  },
  overrides: {
    // Style sheet name ⚛
    MuiButton: {
      root: {
        color: lightGreyColor,
        transition: "1s",
        minWidth: "inherit",
        "&:hover": {
          backgroundColor: `${lightGreyColor}40`
        }
      },
      outlined: {
        backgroundColor: `${lightGreyColor}10`,
        border: `1px solid ${lightGreyColor}25`
      }
    },
    MuiGrid: {
      item: {
        margin: "30px 0"
      }
    },
    MuiTypography: {
      root: {
        "&::selection": {
          color: yellowColor,
          backgroundColor: darkBlueColor
        }
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: lightGreyColor
      }
    }
  }
})

export default theme
