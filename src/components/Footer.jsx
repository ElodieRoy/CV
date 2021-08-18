import React from "react"
import { Button, makeStyles, Typography } from "@material-ui/core"
import { GitHub, LinkedIn, Mail } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    padding: "40px 0"
  },
  socialNetworks: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
    maxWidth: 200
  },
  year: {
    color: theme.palette.common.white
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <div className={classes.socialNetworks}>
        <Button component="a" href="mailto:roy.elodie2@gmail.com">
          <Mail fontSize="large" />
        </Button>
        <Button
          component="a"
          href="https://www.linkedin.com/in/eroy"
          target="_blank"
        >
          <LinkedIn fontSize="large" />
        </Button>
        <Button
          component="a"
          href="https://github.com/ElodieRoy"
          target="_blank"
        >
          <GitHub fontSize="large" />
        </Button>
      </div>
      <Typography variant="h6" align="center" component="p">
        Elodie&nbsp;ROY{" "}
        <span className={classes.year}>&copy; {new Date().getFullYear()}</span>
      </Typography>
    </footer>
  )
}

export default Footer
