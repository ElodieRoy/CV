import { useTranslation } from "react-i18next"
import { IconButton, makeStyles, Tooltip } from "@material-ui/core"
import i18next from "i18next"

const useStyles = makeStyles({
  img: { width: "2rem" }
})

const TranslateButton = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Tooltip title={t("languageTranslateName")}>
      <IconButton
        size="medium"
        onClick={() => i18next.changeLanguage(t("languageTranslate"))}
      >
        <img
          src={`images/flag_${t("languageTranslate")}.svg`}
          alt={t("languageTranslateName")}
          className={classes.img}
        />
      </IconButton>
    </Tooltip>
  )
}

export default TranslateButton
