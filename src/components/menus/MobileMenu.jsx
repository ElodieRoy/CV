import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { scroller } from "react-scroll"
import BurgerButton from "components/tools/BurgerButton"
import { Button, ClickAwayListener, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  menu: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    margin: 0,
    height: 0,
    backgroundColor: theme.palette.primary.main,
    listStyle: "none",
    transition: "height 0.7s ease-out, box-shadow 0.3s ease-in",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    boxShadow: "none",
    zIndex: 1,
    "&.menuOpen": {
      height: "40vh",
      boxShadow: "0px 2px 11px 1px rgba(0,0,0,0.4)"
    },
    "&>li:first-child": {
      marginTop: 56
    },
    "&>li:last-child": {
      marginBottom: 10
    }
  }
}))

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()
  const classes = useStyles()

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleClose = (event) => {
    if (event.target.id === "burger-button") {
      return
    }
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart"
    })
    setIsMenuOpen(false)
  }

  return (
    <>
      <BurgerButton isMenuOpen={isMenuOpen} onClick={handleToggle} />
      <ClickAwayListener onClickAway={handleClose}>
        <ul className={`${classes.menu} ${isMenuOpen ? "menuOpen" : null}`}>
          {t(`menu`, { returnObjects: true }).map((item) => (
            <li key={item.id}>
              <Button
                onClick={() => {
                  scrollTo(item.id)
                }}
              >
                {item.text}
              </Button>
            </li>
          ))}
        </ul>
      </ClickAwayListener>
    </>
  )
}

export default MobileMenu
