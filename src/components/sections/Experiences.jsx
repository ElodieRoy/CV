import { useTranslation } from "react-i18next"
import { Typography } from "@material-ui/core"

import Experience from "./Experience"

const Experiences = () => {
  const { t } = useTranslation()

  return (
    <section id="experiences">
      <Typography variant="h3">{t("experiences")}</Typography>
      <ul>
        {t(`experiencesArray`, {
          returnObjects: true
        }).map((item) => (
          <Experience
            key={item.id}
            id={item.id}
            title={item.title}
            company={item.company}
            period={item.period}
            resume={item.resume}
            detail={Array.from(item.detail)}
          />
        ))}
      </ul>
    </section>
  )
}

export default Experiences
