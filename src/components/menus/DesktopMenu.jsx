import React from "react"
import { Button, makeStyles } from "@material-ui/core"
import { useTranslation } from "react-i18next"

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
    listStyle: "none",
    color: theme.palette.common.white
  },
  menuElements: {
    marginRight: "20px",
    textTransform: "uppercase",
    fontWeight: 500
  }
}))

const DesktopMenu = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <ul className={classes.menu}>
      {t(`menu`, { returnObjects: true }).map((item) => (
        <li className={classes.menuElements} key={item.id}>
          <Button>{item.text}</Button>
        </li>
      ))}
    </ul>
  )
}

export default DesktopMenu