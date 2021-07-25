import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core"

import BackToTopButton from "components/tools/BackToTopButton"
import Skills from "components/sections/Skills"
import Experiences from "components/sections/Experiences"
import Education from "components/sections/Education"

const useStyles = makeStyles({
  root: {
    padding: (isMediumDisplay) => (isMediumDisplay ? "0 40px" : "0 10px")
  }
})

const MainSection = (props) => {
  const { isBackToTopDisplay, isMediumDisplay } = props
  const classes = useStyles(isMediumDisplay)

  return (
    <main className={classes.root}>
      <BackToTopButton isDisplay={isBackToTopDisplay} />
      <Skills />
      <Experiences />
      <Education />
    </main>
  )
}

MainSection.propTypes = {
  isBackToTopDisplay: PropTypes.bool.isRequired,
  isMediumDisplay: PropTypes.bool.isRequired
}

export default MainSection
