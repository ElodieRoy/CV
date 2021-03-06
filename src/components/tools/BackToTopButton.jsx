import { memo } from "react"
import PropTypes from "prop-types"
import { Fab, makeStyles, Zoom } from "@material-ui/core"
import { KeyboardArrowUp } from "@material-ui/icons"
import { animateScroll as scroll } from "react-scroll"

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    zIndex: 2
  }
})

const BackToTopButton = ({ isDisplay }) => {
  const classes = useStyles()

  const handleClick = () => {
    scroll.scrollToTop()
  }

  return (
    <Zoom in={isDisplay}>
      <Fab
        className={classes.root}
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

export default memo(BackToTopButton)
