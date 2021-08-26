import React from "react"
import PropTypes from "prop-types"
import { Button, makeStyles } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import { scroller } from "react-scroll"

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
    color: theme.palette.common.white
  },
  menuElements: {
    marginRight: "20px",
    fontWeight: 500
  },
  slider: {
    "&:before": {
      content: "''",
      position: "absolute",
      bottom: 5,
      height: 2,
      borderRadius: 10,
      width: 0,
      backgroundColor: "transparent",
      transition: "all 1s ease"
    },
    "&.active:before": {
      width: "90%",
      backgroundColor: theme.palette.common.white
    }
  }
}))

const DesktopMenu = ({ section }) => {
  const { t } = useTranslation()
  const classes = useStyles()

  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    })
  }

  return (
    <ul className={classes.menu}>
      {t(`menu`, { returnObjects: true }).map((item) => (
        <li className={classes.menuElements} key={item.id}>
          <Button
            className={
              item.id === section ? `${classes.slider} active` : classes.slider
            }
            onClick={() => {
              scrollTo(item.id)
            }}
          >
            {item.id}
          </Button>
        </li>
      ))}
    </ul>
  )
}

DesktopMenu.propTypes = {
  section: PropTypes.string.isRequired
}

export default DesktopMenu
