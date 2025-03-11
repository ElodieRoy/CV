import { Section } from "@/components/Section";
import { Typography } from "@/components/ui/Typography";
import { CURRENT_YEAR } from "@/constants";
import { ComponentPropsWithoutRef } from "react";
import { Trans } from "react-i18next";

export function Profile({
  className,
  id,
}: ComponentPropsWithoutRef<"section">) {
  const nbExp = CURRENT_YEAR - 2021;
  return (
    <Section id={id} className={className}>
      <Typography type="p" className="lg:text-xl lg:leading-relaxed">
        <Trans i18nKey="about" ns="home" values={{ nbExp }} />
      </Typography>
      <Typography type="p" className="lg:text-xl lg:leading-relaxed">
        <Trans i18nKey="description" ns="home" />
      </Typography>
    </Section>
  );
}
