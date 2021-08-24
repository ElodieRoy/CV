import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { makeStyles, Typography } from "@material-ui/core"
import Education from "./Education"

const useStyles = makeStyles({
  root: {
    padding: "80px 0",
    "& input[type=radio]": {
      display: "none"
    },
    "& p": {
      margin: 0
    }
  },
  container: {
    width: "100%",
    maxWidth: 800,
    maxHeight: 300,
    height: "60vh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    userSelect: "none",
    "& .cards": {
      position: "relative",
      width: "100%",
      height: "100%",
      marginBottom: 20
    },
    "& #item-0:checked ~ .cards #educ-2, #item-1:checked ~ .cards #educ-0, #item-2:checked ~ .cards #educ-1":
      {
        transform: "translatex(-80%) scale(.8)",
        opacity: 0.4,
        zIndex: 0
      },
    "& #item-0:checked ~ .cards #educ-1, #item-1:checked ~ .cards #educ-2, #item-2:checked ~ .cards #educ-0":
      {
        transform: "translatex(80%) scale(.8)",
        opacity: 0.4,
        zIndex: 0
      },
    "& #item-0:checked ~ .cards #educ-0, #item-1:checked ~ .cards #educ-1, #item-2:checked ~ .cards #educ-2":
      {
        transform: "translatex(0) scale(1)",
        opacity: 1,
        zIndex: 1
      }
  },
  card: {
    position: "absolute",
    width: "45%",
    maxWidth: 350,
    height: "100%",
    left: 0,
    right: 0,
    margin: "20px auto",
    transition: "transform .4s ease",
    cursor: "pointer"
  }
})

const Educations = (props) => {
  const { isMediumDisplay } = props
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <section className={classes.root} id="education">
      <Typography variant="h3">{t("education")}</Typography>
      {isMediumDisplay ? (
        <div className={classes.container}>
          <input type="radio" name="slider" id="item-0" defaultChecked />
          <input type="radio" name="slider" id="item-1" />
          <input type="radio" name="slider" id="item-2" />
          <div className="cards">
            {t(`educationsArray`, {
              returnObjects: true
            }).map((item, index) => (
              <label
                key={item.id}
                className={classes.card}
                htmlFor={`item-${index}`}
                id={`educ-${index}`}
              >
                <Education
                  period={item.period}
                  degree={item.degree}
                  title={item.title}
                />
              </label>
            ))}
          </div>
        </div>
      ) : (
        <>
          {t(`educationsArray`, {
            returnObjects: true
          }).map((item) => (
            <Education
              key={item.id}
              period={item.period}
              degree={item.degree}
              title={item.title}
            />
          ))}
        </>
      )}
    </section>
  )
}

Educations.propTypes = {
  isMediumDisplay: PropTypes.bool.isRequired
}

export default Educations
