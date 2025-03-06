import { Section } from "@/components/Section";
import { Typography } from "@/components/ui/Typography";
import { CURRENT_YEAR } from "@/constants";
import { ComponentPropsWithoutRef } from "react";

export function Profile({ className }: ComponentPropsWithoutRef<"section">) {
  const nbExp = CURRENT_YEAR - 2021;
  return (
    <Section id="profile" className={className}>
      <Typography type="p" className="lg:text-xl lg:leading-relaxed">
        Bonjour 👋 je suis <strong>Élodie</strong>, développeuse{" "}
        <strong>full-stack web</strong> avec plus de {nbExp} ans d'expérience,
        spécialisée en <strong>React</strong> et <strong>TypeScript</strong>.
        J'aime concevoir des applications performantes et pensées pour
        l'utilisateur, n'hésitant pas à explorer et tester les outils les plus
        adaptés pour y parvenir.
      </Typography>
      <Typography type="p" className="lg:text-xl lg:leading-relaxed">
        Je cherche à contribuer à la création d'un produit de qualité au sein
        d'une <strong>équipe soudée et bienveillante</strong>. Sensible à
        l’expérience utilisateur et l’ergonomie des interfaces, j'apprécie
        également le travail backend et les bases de données pour leur rigueur.
        J'aime apprendre, alors si je n'ai pas toutes les compétences requises
        pour un poste, je vois ça comme une belle opportunité.
      </Typography>
    </Section>
  );
}
