import React from "react"
import PropTypes from "prop-types"
import { Snackbar } from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"

const SuccessSnackbar = (props) => {
  const { isOpen, setIsOpen, message } = props

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setIsOpen(false)
  }

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity="success"
      >
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

SuccessSnackbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default SuccessSnackbar
