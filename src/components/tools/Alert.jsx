import PropTypes from "prop-types"
import { Snackbar } from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"

const Alert = ({ isOpen, setIsOpen, message, severity }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setIsOpen("")
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
        severity={severity}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

Alert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired
}

export default Alert
