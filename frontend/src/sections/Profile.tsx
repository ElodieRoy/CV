import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";

export function Profile() {
  const nbExp = new Date().getFullYear() - 2021;
  return (
    <section id="profile">
      <Container>
        <Typography type="h3" className="mb-4 bg-primary text-left">
          ✨ Qui suis-je ? ✨
        </Typography>
        <Typography type="p">
          Je suis Élodie, développeuse <strong>full-stack web</strong> avec plus
          de {nbExp} ans d'expérience. Mon terrain de jeu préféré?{" "}
          <strong>React</strong> et <strong>TypeScript</strong>, où j’aime créer
          des applications robustes, performantes et pensées pour l'utilisateur.
          Je n'hésite pas à explorer et utiliser tous les outils qui m'aideront
          à concevoir les solutions.
        </Typography>
        <Typography type="p">
          Issue d’une reconversion après 9 ans dans l’informatique
          décisionnelle, j’ai développé une approche centrée sur le produit et
          l’utilisateur, enrichie d'une <strong>rigueur technique</strong> avec
          de solides connaissances en{" "}
          <strong>gestion et exploitation des données</strong>.
        </Typography>
        <Typography type="p">
          Mes envies? Prendre part à la création d'un produit de qualité en
          rejoignant une <strong>équipe soudée et bienveillante</strong> dans un{" "}
          <strong>projet structuré et bien organisé</strong> tout en continuant
          d'apprendre et progresser chaque jour.
        </Typography>
      </Container>
    </section>
  );
}
