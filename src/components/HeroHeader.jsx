import React from "react"
import { makeStyles } from "@material-ui/core"
import Particles from "react-particles-js"

const useStyles = makeStyles({
  root: {
    height: "50vh",
    width: "100vw",
    backgroundColor: "#303b45"
  }
})

const HeroHeader = () => {
  const classes = useStyles()

  return (
    <header>
      <Particles
        className={classes.root}
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
    </header>
  )
}

export default HeroHeader
