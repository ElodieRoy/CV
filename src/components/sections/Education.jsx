import React from "react"
import PropTypes from "prop-types"
import { makeStyles, Paper, Typography } from "@material-ui/core"
import SchoolIcon from "@material-ui/icons/School"

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "90%",
    minHeight: 250,
    maxHeight: 350,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 25,
    margin: "0 auto 40px auto"
  }
})

const Education = (props) => {
  const { period, degree, title } = props
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" component="p" align="center">
        <SchoolIcon />
        <br />
        {degree}
      </Typography>
      <Typography variant="h5" component="h3" align="center">
        {title}
      </Typography>
      <Typography variant="subtitle2" component="p">
        {period}
      </Typography>
    </Paper>
  )
}

Education.propTypes = {
  period: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Education
