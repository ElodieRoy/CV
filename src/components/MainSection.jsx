import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core"

import BackToTopButton from "components/tools/BackToTopButton"
import Skills from "components/sections/Skills"
import Experiences from "components/sections/Experiences"
import Educations from "components/sections/Educations"
import Contact from "./sections/Contact"

const useStyles = makeStyles({
  root: {
    "&>section": {
      overflow: "hidden",
      padding: "80px 0",
      margin: "0 auto",
      maxWidth: "1440px",
      paddingRight: (isMediumDisplay) => (isMediumDisplay ? "40px" : "10px"),
      paddingLeft: (isMediumDisplay) => (isMediumDisplay ? "40px" : "10px"),
      "&:nth-child(odd)": {
        maxWidth: "inherit",
        backgroundColor: "#ececec"
      }
    }
  }
})

const MainSection = (props) => {
  const { isBackToTopDisplay, isMediumDisplay } = props
  const classes = useStyles(isMediumDisplay)

  return (
    <main className={classes.root}>
      <BackToTopButton isDisplay={isBackToTopDisplay} />
      <Skills />
      <Experiences isMediumDisplay={isMediumDisplay} />
      <Educations isMediumDisplay={isMediumDisplay} />
      <Contact />
    </main>
  )
}

MainSection.propTypes = {
  isBackToTopDisplay: PropTypes.bool.isRequired,
  isMediumDisplay: PropTypes.bool.isRequired
}

export default MainSection
