import React, { useState } from "react"
import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  burger: {
    height: "2.5em",
    width: "2.5em",
    position: "relative",
    fontSize: "12px",
    cursor: "pointer",
    transition: ".2s all",
    webkitTapHighlightColor: "transparent",
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
      backgroundColor: "white",
      height: "0.25em",
      position: "absolute",
      transform: "rotate(0)",
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
})

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const classes = useStyles()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Button
      className={`${isOpen ? null : "button"} ${classes.burger}`}
      onClick={handleClick}
    >
      <span className={`${isOpen ? "open" : null} ${classes.burgerLines}`} />
    </Button>
  )
}

export default BurgerButton
