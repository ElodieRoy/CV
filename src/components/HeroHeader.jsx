import PropTypes from "prop-types"

import { Button, makeStyles, Typography } from "@material-ui/core"
import Particles from "react-particles-js"
import { useTranslation } from "react-i18next"
import ScrollBottomArrow from "./tools/ScrollBottomArrow"
import NavBar from "./NavBar"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    opacity: (opacity) => 1.5 - opacity
  },
  particles: {
    height: "100%",
    backgroundColor: theme.palette.secondary.main
  },
  title: {
    position: "absolute",
    top: 64,
    height: "calc(100vh - 60px)",
    width: "240px",
    marginLeft: "calc(50% - 120px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    userSelect: "none"
  },
  img: {
    height: "35%",
    maxHeight: 350,
    borderRadius: "50%"
  }
}))

const PARTICLES_PARAMS = {
  particles: {
    line_linked: {
      distance: 150,
      color: "#ddd",
      opacity: 0.1,
      width: 1
    },
    move: {
      speed: 0.5
    },
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    size: {
      value: 1
    }
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push"
      },
      onhover: {
        enable: true,
        mode: ["grab", "connect"]
      }
    },
    modes: {
      push: {
        particles_nb: 2
      },
      bubble: {
        size: 2
      }
    }
  }
}

const HeroHeader = ({ opacity, isTopVisible }) => {
  const classes = useStyles(opacity)
  const { t } = useTranslation()

  return (
    <header>
      <NavBar opacity={opacity} />
      <div id="particles" className={classes.root}>
        {isTopVisible && (
          <Particles className={classes.particles} params={PARTICLES_PARAMS} />
        )}
        <div className={classes.title}>
          <img
            className={classes.img}
            src="images/Elodie_ROY_photo.jpg"
            alt="profil Elodie ROY"
          />
          <div>
            <Typography variant="h1">Elodie ROY</Typography>
            <Typography variant="h2">{t("title")}</Typography>
          </div>
          <Button
            variant="outlined"
            component="a"
            href={`docs/CV_Elodie_ROY_${t("language")}.pdf`}
            target="_blank"
          >
            {t("downloadResume")}
          </Button>
          <ScrollBottomArrow isDisplay={opacity < 0.6} />
        </div>
      </div>
    </header>
  )
}

HeroHeader.propTypes = {
  opacity: PropTypes.number.isRequired,
  isTopVisible: PropTypes.bool.isRequired
}

export default HeroHeader
