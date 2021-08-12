import React from "react"
import { useTranslation } from "react-i18next"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import iconSet from "icons.json"
import IcomoonReact from "icomoon-react"

const useStyles = makeStyles({
  img: {
    height: 100,
    width: 100
  }
})

const Skills = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <section id="skills">
      <Typography variant="h3">{t("skills")}</Typography>
      <Grid container justify="center">
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="html5" />
          <Typography variant="h4">HTML</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="css3" />
          <Typography variant="h4">CSS</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="javascript" />
          <Typography variant="h4">JavaScript</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="react" />
          <Typography variant="h4">React</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="sass" />
          <Typography variant="h4">Sass</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <img
            className={classes.img}
            src="images/icon_material-ui.svg"
            alt="Material UI"
          />
          <Typography variant="h4">Material&nbsp;UI</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="wordpress" />
          <Typography variant="h4">Wordpress</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="graphql" />
          <Typography variant="h4">GraphQL</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="php" />
          <Typography variant="h4">PHP</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="mysql" />
          <Typography variant="h4">MySQL</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="meteor" />
          <Typography variant="h4">Meteor</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="symfony" />
          <Typography variant="h4">Symfony</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="visualstudiocode" />
          <Typography variant="h4">VS Code</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="github" />
          <Typography variant="h4">GitHub</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <img
            className={classes.img}
            src="images/icon_photoshop.svg"
            alt="Adobe Photoshop"
          />
          <Typography variant="h4">Photoshop</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <img
            className={classes.img}
            src="images/icon_indesign.svg"
            alt="Adobe inDesign"
          />
          <Typography variant="h4">InDesign</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <img
            className={classes.img}
            src="images/icon_xd.svg"
            alt="Adobe XD"
          />
          <Typography variant="h4">XD</Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          xs={6}
          sm={3}
          md={2}
        >
          <IcomoonReact iconSet={iconSet} size={100} icon="sap" />
          <Typography variant="h4">SAP</Typography>
        </Grid>
      </Grid>
    </section>
  )
}

export default Skills
