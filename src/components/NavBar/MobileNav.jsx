import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link as LinkScroll } from "react-scroll"
import BurgerButton from "components/tools/BurgerButton"
import { ClickAwayListener, makeStyles } from "@material-ui/core"
import clsx from "clsx"

const useStyles = makeStyles((theme) => ({
  menu: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    margin: 0,
    height: 0,
    backgroundColor: theme.palette.primary.main,
    transition: "height 0.7s ease-out, box-shadow 0.3s ease-in",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    boxShadow: "none",
    zIndex: 1,
    textTransform: "uppercase",
    color: theme.palette.common.white,
    "&.menuOpen": {
      height: "50vh",
      boxShadow: "0px 2px 11px 1px rgba(0,0,0,0.4)"
    },
    "&>li:first-child": {
      marginTop: 56
    },
    "&>li:last-child": {
      marginBottom: 30
    }
  },
  link: {
    cursor: "pointer",
    color: theme.palette.common.white,
    lineHeight: 1.75,
    fontWeight: 500,
    textTransform: "uppercase",
    transition: "all 0.5s",
    userSelect: "none",
    "&:hover": {
      transform: "scale(1.1)"
    }
  }
}))

const MobileNav = () => {
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

  return (
    <>
      <BurgerButton isMenuOpen={isMenuOpen} onClick={handleToggle} />
      <ClickAwayListener onClickAway={handleClose}>
        <ul className={clsx(classes.menu, { menuOpen: isMenuOpen })}>
          {t(`menu`, { returnObjects: true }).map((item) => (
            <li key={item.id}>
              <LinkScroll
                className={classes.link}
                to={item.id}
                smooth
                duration={1000}
                onClick={handleClose}
              >
                {item.text}
              </LinkScroll>
            </li>
          ))}
        </ul>
      </ClickAwayListener>
    </>
  )
}

export default MobileNav
