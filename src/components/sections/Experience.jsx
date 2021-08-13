import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { makeStyles, Paper, Typography } from "@material-ui/core"
import WorkIcon from "@material-ui/icons/Work"
import VisibilitySensor from "react-visibility-sensor"

const useStyles = makeStyles((theme) => ({
  timeline: {
    position: "relative",
    width: 6,
    margin: (isMediumDisplay) => (isMediumDisplay ? "0 auto" : "0 0 0 30px"),
    paddingTop: 50,
    background: "grey",
    "&:nth-child(1)": { borderRadius: "50px 50px 0 0" },
    "&:nth-child(odd)>div": {
      left: 100,
      opacity: 0,
      transition: ".5s ease-in-out",
      "&.visible": {
        opacity: 1,
        left: 51
      }
    },
    "&:nth-child(even)>div": {
      "& p:last-child": {
        textAlign: (isMediumDisplay) => (isMediumDisplay ? "right" : "left")
      },
      left: (isMediumDisplay) =>
        isMediumDisplay ? "max(calc(-50vw + 45px - 50px), -595px)" : 100,
      opacity: 0,
      transition: ".5s ease-in-out",
      "&.visible": {
        opacity: 1,
        left: (isMediumDisplay) =>
          isMediumDisplay ? "max(calc(-50vw + 45px), -545px)" : 51
      }
    },
    "&:nth-child(odd) div::before": {
      left: -15,
      borderWidth: "10px 16px 10px 0",
      borderColor: `transparent ${theme.palette.common.white} transparent transparent`
    },
    "&:nth-child(even) div::before": {
      left: (isMediumDisplay) =>
        isMediumDisplay ? "min(calc(50vw - 91px), 500px)" : -15,
      borderWidth: (isMediumDisplay) =>
        isMediumDisplay ? "10px 0 10px 16px" : "10px 16px 10px 0",
      borderColor: (isMediumDisplay) =>
        isMediumDisplay
          ? `transparent transparent transparent ${theme.palette.common.white}`
          : `transparent ${theme.palette.common.white} transparent transparent`
    }
  },
  list: {
    position: "relative",
    bottom: 0,
    width: (isMediumDisplay) =>
      isMediumDisplay ? "calc(50vw - 90px)" : "calc(100vw - 90px - 30px)",
    maxWidth: 500,
    padding: 15,
    "&::before": {
      content: "''",
      position: "absolute",
      bottom: 14,
      width: 0,
      height: 0,
      borderStyle: "solid"
    }
  },
  icon: {
    position: "absolute",
    left: "50%",
    padding: 10,
    bottom: 0,
    transform: "translateX(-50%)",
    width: 50,
    height: 50,
    borderRadius: "50%",
    color: "transparent",
    zIndex: 1,
    backgroundColor: "transparent",
    transition: ".5s ease-in-out",
    "&.visible": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main
    }
  },
  checkbox: {
    position: "absolute",
    opacity: 0,
    "&:not(:checked)": {
      "&~label::before": {
        content: "'\\2212\\00a0'"
      }
    },
    "&:checked": {
      "&~label::before": {
        content: "'\\002B\\00a0'"
      },
      "&~div": {
        marginTop: 0,
        maxHeight: 0,
        opacity: 0,
        visibility: "hidden"
      }
    }
  },
  detail: {
    opacity: 1,
    visibility: "visible",
    maxHeight: 800,
    transition: ".5s ease-in-out",
    "& ul": {
      listStyleType: "circle",
      marginTop: 20
    },
    "& li": {
      fontSize: ".8rem",
      marginLeft: 20,
      marginBottom: 10
    }
  },
  labelDetail: {
    fontStyle: "italic",
    cursor: "pointer",
    padding: 5,
    fontSize: ".8rem",
    color: theme.palette.primary.main,
    userSelect: "none"
  }
}))

const Experience = (props) => {
  const { id, isMediumDisplay, title, company, period, resume, detail } = props

  const { t } = useTranslation()
  const classes = useStyles(isMediumDisplay)

  return (
    <li className={classes.timeline}>
      <VisibilitySensor
        partialVisibility
        offset={{ top: 150 }}
        minTopValue={150}
      >
        {({ isVisible }) => (
          <>
            <Paper
              className={`${classes.list} ${isVisible ? "visible" : null}`}
            >
              <Typography variant="h5" component="h3">
                {title}
              </Typography>
              <Typography variant="subtitle1" component="p">
                {company}
              </Typography>
              <input
                type="checkbox"
                id={`detail ${id}`}
                className={classes.checkbox}
                defaultChecked
              />
              <div className={classes.detail}>
                <Typography variant="h6" component="p">
                  {resume}
                </Typography>
                <ul>
                  {detail.map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </div>
              <label htmlFor={`detail ${id}`} className={classes.labelDetail}>
                {t("detail")}
              </label>
              <Typography variant="subtitle2" component="p">
                {period}
              </Typography>
            </Paper>
            <WorkIcon
              className={`${classes.icon} ${isVisible ? "visible" : null}`}
            />
          </>
        )}
      </VisibilitySensor>
    </li>
  )
}

Experience.propTypes = {
  id: PropTypes.string.isRequired,
  isMediumDisplay: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  detail: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Experience
