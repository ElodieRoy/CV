import React from "react"
import { useTranslation } from "react-i18next"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    padding: "80px 0",
    "&input[type=radio]": {
      display: "none"
    }
  }
})

const Education = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <section className={classes.root} id="education">
      <Typography variant="h3">{t("education")}</Typography>
      <input type="radio" name="slider" id="item-1" defaultChecked />
      <input type="radio" name="slider" id="item-2" />
      <input type="radio" name="slider" id="item-3" />
    </section>
  )
}

export default Education
