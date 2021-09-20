import { memo } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core"

import BackToTopButton from "components/tools/BackToTopButton"
import Skills from "components/sections/Skills"
import Experiences from "components/sections/Experiences"
import Educations from "components/sections/Educations"
import Contact from "./sections/Contact"

const useStyles = makeStyles((theme) => ({
  root: {
    "&>section": {
      overflow: "hidden",
      padding: "80px 0",
      margin: "0 auto",
      maxWidth: "1440px",
      paddingRight: 10,
      paddingLeft: 10,
      [theme.breakpoints.up("sm")]: {
        paddingRight: 40,
        paddingLeft: 40
      },
      "&:nth-child(odd)": {
        maxWidth: "inherit",
        backgroundColor: "#ececec"
      }
    }
  }
}))

const MainSection = ({ isBackToTopDisplay }) => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <BackToTopButton isDisplay={isBackToTopDisplay} />
      <Skills />
      <Experiences />
      <Educations />
      <Contact />
    </main>
  )
}

MainSection.propTypes = {
  isBackToTopDisplay: PropTypes.bool.isRequired
}

export default memo(MainSection)
