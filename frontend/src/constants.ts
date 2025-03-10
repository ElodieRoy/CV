export const CURRENT_YEAR = new Date().getFullYear();

export const techStack = [
  {
    category: "Frontend",
    tools: [
      { name: "TypeScript", logo: "/logos/skills/typescript-original.svg" },
      { name: "React", logo: "/logos/skills/react-original.svg" },
      { name: "Astro", logo: "/logos/skills/astro-original.svg" },
      { name: "Vite", logo: "/logos/skills/vitejs-original.svg" },
      { name: "HTML", logo: "/logos/skills/html5-original.svg" },
      { name: "Redux", logo: "/logos/skills/redux-original.svg" },
      { name: "TailwindCss", logo: "/logos/skills/tailwindcss-original.svg" },
      { name: "CSS", logo: "/logos/skills/css3-original.svg" },
      { name: "Material UI", logo: "/logos/skills/materialui-original.svg" },
      { name: "Shadcn UI", logo: "/logos/skills/shadcnui.svg" },
    ],
  },
  {
    category: "Backend",
    tools: [
      { name: "JAVA", logo: "/logos/skills/java-original.svg" },
      { name: "Spring", logo: "/logos/skills/spring-original.svg" },
      { name: "Hibernate", logo: "/logos/skills/hibernate-original.svg" },
      { name: "Node.js", logo: "/logos/skills/nodejs-original.svg" },
      { name: "Express", logo: "/logos/skills/express-original.svg" },
      { name: "Swagger", logo: "/logos/skills/swagger-original.svg" },
      { name: "REST", logo: "/logos/skills/apirest.svg" },
      { name: "PostgreSQL", logo: "/logos/skills/postgresql-original.svg" },
      { name: "MySQL", logo: "/logos/skills/mysql-original.svg" },
      {
        name: "ElasticSearch",
        logo: "/logos/skills/elasticsearch-original.svg",
      },
    ],
  },
  {
    category: "Devops & CI",
    tools: [
      { name: "Git", logo: "/logos/skills/git-original.svg" },
      { name: "Docker", logo: "/logos/skills/docker-original.svg" },
      { name: "GitLab CI", logo: "/logos/skills/gitlab-original.svg" },
      { name: "GitHub", logo: "/logos/skills/github-original.svg" },
      { name: "PlayWright", logo: "/logos/skills/playwright-original.svg" },
      { name: "Jest", logo: "/logos/skills/jest-original.svg" },
    ],
  },
  {
    category: "Autres outils",
    tools: [
      { name: "VS Code", logo: "/logos/skills/vscode-original.svg" },
      { name: "Linux", logo: "/logos/skills/linux-original.svg" },
      { name: "Jira", logo: "/logos/skills/jira-original.svg" },
      { name: "SAP", logo: "/logos/skills/sap.svg" },
      { name: "Kibana", logo: "/logos/skills/kibana-original.svg" },
      { name: "Notion", logo: "/logos/skills/notion-original.svg" },
      { name: "XD", logo: "/logos/skills/xd-original.svg" },
    ],
  },
];

export const confettiParams = {
  particleCount: 100,
  spread: 70,
  colors: [
    "#F44336",
    "#E91E63",
    "#FFC107",
    "#2196F3",
    "#4CAF50",
    "#9C27B0",
    "#009688",
  ],
  origin: { y: 0.8 },
};
type Experience = {
  id: string;
  title: string;
  image: string;
  logos?: { url: string; title: string }[];
} & (
    | { type: "education"; shortDescription: string; longDescription: string }
    | {
      type: "job";
      secteur: string;
      roles: { shortDescription: string[]; longDescription: string[] };
      skills: string;
    }
  );
export const experiences: Experience[] = [
  {
    id: "graduate",
    type: "education",
    title: "Diplômée Bac+5",
    image: "/icons/graduate.svg",
    logos: [
      {
        url: "/logos/company/universite.png",
        title: "Université Toulouse 3 Paul Sabatier",
      },
    ],
    shortDescription:
      "Intéressée par les mathématiques et l’informatique, j’ai suivi un DUT en Statistiques et Traitement Informatique des Données à Niort (79), puis un master en Statistique et Informatique Décisionnelle à Toulouse pour approfondir mon expertise en valorisation des données.",
    longDescription:
      "Intéressée par les mathématiques et l’informatique, j’ai choisi de faire un DUT en Statistiques et Traitement Informatique des Données à Niort (79) après mon bac S. Cette formation m’a tellement plu que j’ai voulu aller plus loin en poursuivant un master en Statistique et Informatique Décisionnelle à Toulouse, pour approfondir encore plus mon intérêt pour l'exploitation des données et leur valorisation.",
  },
  {
    id: "dataAnalyst",
    type: "job",
    title: "Data Analyst",
    image: "/icons/data.svg",
    logos: [
      { title: "Akka", url: "/logos/company/akka.png" },
      { title: "Sopra-steria", url: "/logos/company/sopra-steria.png" },
    ],
    secteur: "Aéronautique (Airbus, Safran)",
    roles: {
      shortDescription: [
        "Analyse des besoins métiers",
        "Collecte et organisation des données",
        "Automatisation des traitements",
        "Création de visualisations des données pour faciliter l'interprétation",
        "Evolution et maintenance des outils",
      ],
      longDescription: [
        "Rencontrer les équipes métiers pour comprendre leurs besoins",
        "Traduire les besoins en une solution technique",
        "Explorer les données sources (SAP, IBM, fichiers plats)",
        "Collecter et organiser les données pertinentes dans une base de données",
        "Automatiser les traitements et chargement des données",
        "Création de visualisations des données pour faciliter l’analyse et l’interprétation par les utilisateurs",
        "Evolution et maintenance des outils développés",
      ],
    },
    skills: "SAP, ETL, base de données, reporting",
  },
  {
    id: "transitionWeb",
    type: "education",
    title: "Transition Web",
    image: "/icons/power.svg",
    logos: [{ title: "Brassart", url: "/logos/company/brassart.png" }],
    shortDescription:
      "Suite à la suppression de mon poste en raison de la crise du COVID, j’ai saisi l’opportunité de me former au développement web (RNCP niveau 5) pour satisfaire ma curiosité et enrichir mes compétences en visualisation de données. L'univers du web et ses possibilités de création m'ont tellement plu que j'ai choisi de poursuivre dans cette voie.",
    longDescription:
      "Suite à la suppression de mon poste due à la crise du COVID et dans un contexte de marché de l'emploi complexe, j’ai pris le temps de réfléchir à mes aspirations professionnelles. Attirée par le web depuis le début de ma carrière, j'ai alors naturellement décidé de me former au développement web (niveau 5 du RNCP), dans le but d'assouvir ma curiosité et d'acquérir des compétences techniques supplémentaires pour personnaliser les interfaces de visualisation des données. L'univers du web et ses possibilités de création m'ont tellement plu que j’ai finalement choisi de m’orienter durablement dans cette voie.",
  },
  {
    id: "developperWeb",
    type: "job",
    title: "Développeuse web",
    image: "/icons/coding.svg",
    logos: [
      { title: "Magellium", url: "/logos/company/magellium.png" },
      { title: "Forensoc", url: "/logos/company/forensoc.png" },
    ],
    secteur: "Environnement & Gestion forestière (ONF), cybersécurité",
    roles: {
      shortDescription: [
        "Gestion et migration de bases de données",
        "Développement full-stack",
        "Création d’API REST",
        "Correction de bugs",
        "Intégration et déploiement continu",
        "Participation aux évènements Agile",
      ],
      longDescription: [
        "Gestion et migration de bases de données",
        "Developement des fonctionnalités back-end/front-end",
        "Création d’API REST",
        "Réduction de la dette technique",
        "Revues de code",
        "Intégration et déploiement continu",
        "Analyse de problèmes techniques et correction de bugs",
        "Participation aux évènements Agile",
      ],
    },
    skills: "Front-end, back-end, base de données, devOps, agilité,  webSocket",
  },
  {
    id: "tomorrow",
    type: "education",
    title: "Construire demain",
    image: "/icons/build.svg",
    shortDescription:
      "Après une expérience enrichissante en start-up, je cherche de nouveaux défis au sein d’une équipe soudée et bienveillante. Passionnée par le développement, je profite de cette période pour enrichir mes compétences avec les outils de l’écosystème React en développant des projets personnels.",
    longDescription:
      "Après une expérience enrichissante au sein d'une start-up, je suis à la recherche de nouveaux défis. Mon objectif est de contribuer à la création d'un produit de qualité au sein d'une équipe soudée, fun et bienveillante. Passionnée par le développement, je profite de cette période pour enrichir mes compétences avec les outils de l'écosystème React en développant des projets personnels.",
  },
];
