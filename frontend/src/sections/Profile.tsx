import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";

export function Profile() {
  const nbExp = new Date().getFullYear() - 2021;
  return (
    <section id="profile">
      <Container>
        <Typography type="h4" className="mb-4">
          Qui suis-je ?
        </Typography>
        <Typography type="p">
          Je suis Élodie, développeuse <strong>full-stack</strong> depuis plus
          de {nbExp} ans, spécialisée en <strong>React</strong> et{" "}
          <strong>TypeScript</strong>, avec un fort intérêt pour l’expérience
          utilisateur.
        </Typography>
        <Typography type="p" className=" mt-2">
          Issue d’une reconversion après 9 ans dans l’informatique décisionnel,
          j’ai développé une approche centrée sur le produit et l’utilisateur,
          enrichie par de{" "}
          <strong>
            solides bonnes pratiques en gestion et exploitation des données
          </strong>
          . Cette expérience me permet aujourd'hui de créer des solutions à la
          fois performantes et intuitives.
        </Typography>
      </Container>
    </section>
  );
}
