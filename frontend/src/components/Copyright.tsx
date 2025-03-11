import { Typography } from "@/components/ui/Typography";
import { CURRENT_YEAR } from "@/constants";
import { useTranslation } from "react-i18next";

export function Copyright() {
  const { t } = useTranslation();
  return (
    <Typography type="muted">
      @{CURRENT_YEAR} - {t("by", { ns: "glossary" })} Elodie ROY
    </Typography>
  );
}
