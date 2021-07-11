import React from "react"
import { Button, makeStyles, Typography } from "@material-ui/core"
import Particles from "react-particles-js"
import { useTranslation } from "react-i18next"

const useStyles = makeStyles((theme) => ({
  root: {
    opacity: (props) => 1.5 - props.opacity
  },
  particles: {
    height: "80vh",
    width: "100vw",
    backgroundColor: theme.palette.secondary.main
  },
  title: {
    position: "absolute",
    top: 50,
    height: "calc(80vh - 60px)",
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
    borderRadius: "50%"
  }
}))

const HeroHeader = (props) => {
  const classes = useStyles(props)
  const { t } = useTranslation()

  return (
    <header className={classes.root}>
      <Particles
        className={classes.particles}
        params={{
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
        }}
      />
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
          href="docs/CV_Elodie_ROY_FR.pdf"
          target="_blank"
        >
          {t("downloadResume")}
        </Button>
      </div>
    </header>
  )
}

export default HeroHeader
