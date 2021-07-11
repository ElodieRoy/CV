import React from "react"

import { useTranslation } from "react-i18next"
import {
  Button,
  IconButton,
  makeStyles,
  Tooltip,
  useMediaQuery
} from "@material-ui/core"
import i18next from "i18next"
import BurgerButton from "./BurgerButton"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: "100%",
    backgroundColor: (props) => `rgba(238, 166, 34, ${props.opacity})`,
    boxShadow: (props) =>
      props.opacity === 1 ? "0px 2px 11px 1px rgba(0,0,0,0.4)" : "none",
    zIndex: 2,
    transition: "0.5s"
  },
  nav: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  menu: {
    display: "flex",
    listStyle: "none",
    color: theme.palette.common.white
  },
  menuElements: {
    marginRight: "20px",
    textTransform: "uppercase",
    fontWeight: 500
  },
  img: {
    width: "2rem"
  }
}))

const NavBar = (props) => {
  const classes = useStyles(props)
  const isMediumDisplay = useMediaQuery((theme) => theme.breakpoints.up("sm"))
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        {isMediumDisplay ? (
          <ul className={classes.menu}>
            {t(`menu`, { returnObjects: true })
              // @ts-ignore
              .map((item) => (
                <li className={classes.menuElements} key={item.id}>
                  <Button>{item.text}</Button>
                </li>
              ))}
          </ul>
        ) : (
          <BurgerButton />
        )}
        <Tooltip title={t("languageTranslateName")}>
          <IconButton
            size="medium"
            onClick={() => i18next.changeLanguage(t("languageTranslate"))}
          >
            <img
              className={classes.img}
              src={`images/flag_${t("languageTranslate")}.svg`}
              alt={t("languageTranslateName")}
            />
          </IconButton>
        </Tooltip>
      </nav>
    </div>
  )
}

export default NavBar
