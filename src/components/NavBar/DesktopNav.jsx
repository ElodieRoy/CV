import { makeStyles } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import { Link as LinkScroll } from "react-scroll"

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
    color: theme.palette.common.white
  },
  menuElements: {
    marginRight: "20px",
    lineHeight: 1.75,
    fontWeight: 500,
    textTransform: "uppercase",
    transition: "all 0.5s",
    userSelect: "none",
    "&:hover": {
      transform: "scale(1.1)"
    }
  },
  slider: {
    position: "relative",
    display: "inline-block",
    justifyContent: "center",
    padding: "6px 8px",
    cursor: "pointer",
    "&:before": {
      content: "''",
      position: "absolute",
      bottom: 5,
      height: 2,
      left: "5%",
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

const DesktopNav = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <ul className={classes.menu}>
      {t(`menu`, { returnObjects: true }).map((item) => (
        <li className={classes.menuElements} key={item.id}>
          <LinkScroll
            className={classes.slider}
            to={item.id}
            smooth
            offset={-64}
            spy
            duration={1000}
            activeClass="active"
          >
            {item.text}
          </LinkScroll>
        </li>
      ))}
    </ul>
  )
}

export default DesktopNav
