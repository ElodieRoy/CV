import React from "react"
import PropTypes from "prop-types"
import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  burger: {
    height: "2.5em",
    width: "2.5em",
    position: "relative",
    fontSize: "12px",
    cursor: "pointer",
    transition: ".2s all",
    webkitTapHighlightColor: "transparent",
    zIndex: 2,
    "&.button:hover": {
      backgroundColor: "transparent"
    },
    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      height: "150%",
      width: "150%",
      top: "-25%",
      left: "-25%"
    }
  },
  burgerLines: {
    top: "50%",
    marginTop: "-0.125em",
    "&, &:after, &:before": {
      pointerEvents: "none",
      display: "block",
      content: "''",
      width: "100%",
      borderRadius: "0.25em",
      backgroundColor: theme.palette.common.white,
      height: "0.25em",
      position: "absolute",
      transform: "rotate(0)",
      transitionDelay: ".2s",
      transition:
        ".2s top .2s, .1s left, .2s transform, .4s background-color .2s"
    },
    "&:after": {
      left: 0,
      top: "-1em",
      width: "1.5em"
    },
    "&:before": {
      left: "1em",
      top: "1em",
      width: "1.5em"
    },
    "&.open": {
      backgroundColor: "transparent",
      "&, &:after, &:before": {
        transitionDelay: ".2s",
        transition:
          ".2s background-color, .2s top, .2s left, .2s transform .15s"
      },
      "&:before, &:after": {
        left: "0.5em",
        top: "0px"
      },
      "&:before": {
        transform: "rotate(-45deg)"
      },
      "&:after": {
        transform: "rotate(45deg)"
      }
    }
  }
}))

const BurgerButton = (props) => {
  const { isMenuOpen, onClick } = props
  const classes = useStyles()

  return (
    <Button
      id="burger-button"
      className={`${isMenuOpen ? null : "button"} ${classes.burger}`}
      onClick={onClick}
    >
      <span
        className={`${isMenuOpen ? "open" : null} ${classes.burgerLines}`}
      />
    </Button>
  )
}

BurgerButton.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default BurgerButton
