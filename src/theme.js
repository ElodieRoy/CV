import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  // Colors
  palette: {
    primary: {
      main: "#eea622",
      contrastText: "#fff"
    },
    secondary: {
      main: "#3c3837"
    }
  },

  // Fonts
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
})

export default theme
