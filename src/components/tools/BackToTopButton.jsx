import React from "react"
import PropTypes from "prop-types"
import { Fab, makeStyles, Zoom } from "@material-ui/core"
import { KeyboardArrowUp } from "@material-ui/icons"

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "30px",
    right: "30px"
  }
})

const BackToTopButton = (props) => {
  const { isDisplay } = props
  const classes = useStyles()

  const handleClick = () => {
    const anchor = document.querySelector("header")
    anchor.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Zoom className={classes.root} in={isDisplay}>
      <Fab
        onClick={handleClick}
        size="small"
        color="secondary"
        aria-label="scroll back to top"
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  )
}

BackToTopButton.propTypes = {
  isDisplay: PropTypes.bool.isRequired
}

export default BackToTopButton
