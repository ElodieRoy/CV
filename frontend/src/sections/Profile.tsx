import { Section } from "@/components/Section";
import { Typography } from "@/components/ui/Typography";
import { CURRENT_YEAR } from "@/constants";

export function Profile() {
  const nbExp = CURRENT_YEAR - 2021;
  return (
    <Section id="profile">
      <Typography type="h3" className="from-primary text-left">
        ✨ Qui suis-je ? ✨
      </Typography>
      <Typography type="p">
        Je suis Élodie, développeuse <strong>full-stack web</strong> avec plus
        de {nbExp} ans d'expérience, spécialisée en <strong>React</strong> et{" "}
        <strong>TypeScript</strong>. J'aime concevoir des applications
        performantes et pensées pour l'utilisateur, n'hésitant pas à explorer et
        tester les outils les plus adaptés pour y parvenir.
      </Typography>
      {/* <Typography type="p">
        Issue d’une reconversion après 9 ans dans l’informatique décisionnelle,
        j’ai développé une approche centrée sur le produit et l’utilisateur,
        enrichie d'une <strong>rigueur technique</strong> et expertise en{" "}
        <strong>gestion et exploitation des données</strong>.
      </Typography>
      <Typography type="p">
        Je cherche à contribuer à la création d'un produit de qualité au sein
        d'une <strong>équipe soudée et bienveillante</strong> dans un{" "}
        <strong>projet structuré</strong> tout en évoluant et apprenant chaque
        jour.
      </Typography> */}
    </Section>
  );
}
