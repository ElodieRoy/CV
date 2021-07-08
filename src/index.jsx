import React from "react"
import ReactDOM from "react-dom"
import { CssBaseline, ThemeProvider } from "@material-ui/core"

import "./index.css"
import "./i18n"
import theme from "./theme"
import App from "./App"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)
