import React from "react"
import { useTranslation } from "react-i18next"
import { IconButton, Tooltip } from "@material-ui/core"
import i18next from "i18next"

const TranslateButton = () => {
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
          style={{ width: "2rem" }}
        />
      </IconButton>
    </Tooltip>
  )
}

export default TranslateButton
