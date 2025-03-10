import { Section } from "@/components/Section";
import { Typography } from "@/components/ui/Typography";
import { CURRENT_YEAR } from "@/constants";
import { ComponentPropsWithoutRef } from "react";

export function Profile({
  className,
  id,
}: ComponentPropsWithoutRef<"section">) {
  const nbExp = CURRENT_YEAR - 2021;
  return (
    <Section id={id} className={className}>
      <Typography type="p" className="lg:text-xl lg:leading-relaxed">
        Bonjour 👋 je suis <strong>Élodie</strong>, développeuse{" "}
        <strong>full-stack web</strong> avec plus de {nbExp} ans d'expérience,
        spécialisée en <strong>React</strong> et <strong>TypeScript</strong>.
      </Typography>
      <Typography type="p" className="lg:text-xl lg:leading-relaxed">
        Je suis passionnée par le front-end mais j’apprécie également le
        back-end et les bases de données pour leur rigueur. J’aime créer des
        interfaces <strong>performantes</strong> et{" "}
        <strong>pensées pour l'utilisateur</strong>. Toujours{" "}
        <strong>curieuse</strong>, j’explore et teste les outils les plus
        adaptés pour y parvenir, tout en gardant à l'esprit l'
        <strong>expérience développeur</strong> (DX).
      </Typography>
    </Section>
  );
}
