import { memo } from "react"
import { makeStyles } from "@material-ui/core"

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

const MainSection = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Skills />
      <Experiences />
      <Educations />
      <Contact />
    </main>
  )
}

export default memo(MainSection)
