import React from "react"
import PropTypes from "prop-types"
import { Fab, makeStyles, Zoom } from "@material-ui/core"
import { scroller } from "react-scroll"
import { KeyboardArrowDown } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  fab: {
    backgroundColor: "transparent",
    boxShadow: "none",
    animation: "$arrow-scroll 1.5s infinite ease-in-out",
    "&:hover": {
      backgroundColor: "inherit"
    },
    "&:active": {
      backgroundColor: "inherit",
      boxShadow: "none"
    }
  },
  arrow: {
    fill: theme.palette.common.white
  },
  "@keyframes arrow-scroll": {
    "0%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-7px)" },
    "55%": { transform: "translateY(-7px)" },
    "100%": { transform: "translateY(0)" }
  }
}))

const ScrollBottomArrow = (props) => {
  const { isDisplay } = props
  const classes = useStyles()

  const scrollToFirstElement = () => {
    const firstElem = document.querySelector("main section").id

    scroller.scrollTo(firstElem, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    })
  }

  return (
    <Zoom in={isDisplay}>
      <Fab onClick={scrollToFirstElement} size="large" className={classes.fab}>
        <KeyboardArrowDown fontSize="large" color="action" />
      </Fab>
    </Zoom>
  )
}

ScrollBottomArrow.propTypes = {
  isDisplay: PropTypes.bool.isRequired
}

export default ScrollBottomArrow
