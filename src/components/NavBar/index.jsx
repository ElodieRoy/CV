import PropTypes from "prop-types"
import { makeStyles, useMediaQuery } from "@material-ui/core"

import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import TranslateButton from "../tools/TranslateButton"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: "100%",
    backgroundColor: (param) => `rgba(238, 166, 34, ${param.opacity})`,
    boxShadow: (param) =>
      param.opacity === 1 ? "0px 2px 11px 1px rgba(0,0,0,0.4)" : "none",
    zIndex: 2,
    transition: "0.5s"
  },
  navContainer: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      padding: "0 20px"
    }
  }
}))

const NavBar = ({ opacity, section }) => {
  const classes = useStyles({ opacity })
  const isMediumDisplay = useMediaQuery((theme) => theme.breakpoints.up("sm"))

  return (
    <nav className={classes.root}>
      <div className={classes.navContainer}>
        {isMediumDisplay ? <DesktopNav section={section} /> : <MobileNav />}
        <TranslateButton />
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  opacity: PropTypes.number.isRequired,
  section: PropTypes.string.isRequired
}

export default NavBar
