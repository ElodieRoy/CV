import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core"

import DesktopMenu from "./menus/DesktopMenu"
import MobileMenu from "./menus/MobileMenu"
import TranslateButton from "./tools/TranslateButton"

const useStyles = makeStyles({
  root: {
    position: "fixed",
    width: "100%",
    backgroundColor: (param) => `rgba(238, 166, 34, ${param.opacity})`,
    boxShadow: (param) =>
      param.opacity === 1 ? "0px 2px 11px 1px rgba(0,0,0,0.4)" : "none",
    zIndex: 2,
    transition: "0.5s"
  },
  nav: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: (param) => (param.isMediumDisplay ? "0 20px" : "0 10px"),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
})

const NavBar = (props) => {
  const { opacity, isMediumDisplay } = props
  const classes = useStyles({ opacity, isMediumDisplay })

  return (
    <nav className={classes.root}>
      <div className={classes.nav}>
        {isMediumDisplay ? <DesktopMenu /> : <MobileMenu />}
        <TranslateButton />
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  opacity: PropTypes.number.isRequired,
  isMediumDisplay: PropTypes.bool.isRequired
}

export default NavBar
