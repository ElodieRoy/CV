import { Section } from "@/components/Section";
import { Typography } from "@/components/ui/Typography";
import { CURRENT_YEAR } from "@/constants";
import { ComponentPropsWithoutRef } from "react";
import { Trans, useTranslation } from "react-i18next";

export function Profile({
  className,
  id,
}: ComponentPropsWithoutRef<"section">) {
  const nbExp = CURRENT_YEAR - 2021;
  // use hook to rerender <Trans> component when language changes
  const { t } = useTranslation();
  return (
    <Section id={id} className={className}>
      <Typography type="p" className="lg:text-xl lg:leading-relaxed">
        <Trans>{t("about", { nbExp, ns: "home" })}</Trans>
      </Typography>
      <Typography type="p" className="lg:text-xl lg:leading-relaxed">
        <Trans i18nKey="description" ns="home" />
      </Typography>
    </Section>
  );
}
