import { Container } from "@/components/ui/Container";

export function Profile() {
  const nbExp = new Date().getFullYear() - 2021;
  return (
    <section className="bg-light" id="profile">
      <Container>
        <h3 className="text-primary text-4xl font-semibold mb-4">
          Qui suis-je ?
        </h3>
        <p className="text-lg leading-relaxed">
          Bonjour, je suis Élodie, développeuse <strong>full-stack</strong>{" "}
          depuis plus de {nbExp} ans, spécialisée en <strong>React</strong> et{" "}
          <strong>TypeScript</strong>, avec un fort intérêt pour l’expérience
          utilisateur.
        </p>
        <p className="text-lg leading-relaxed mt-2">
          Issue d’une reconversion après 9 ans dans l’informatique décisionnel,
          j’ai développé une approche centrée sur le produit et l’utilisateur,
          enrichie par de{" "}
          <strong>
            solides bonnes pratiques en gestion et exploitation des données
          </strong>
          . Cette expérience me permet aujourd'hui de créer des solutions à la
          fois performantes et intuitives.
        </p>
      </Container>
    </section>
  );
}
