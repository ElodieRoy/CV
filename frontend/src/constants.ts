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
      { name: "ElasticSearch", logo: "/logos/skills/elasticsearch-original.svg" },
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
  id: string,
  title: string,
  image: string,
  logos: { url: string, title: string }[],
} & ({ type: "education", description: string } | { type: "job", secteur: string, role: string[], skills: string })
export const experiences: Experience[] = [
  {
    id: "graduate",
    type: "education",
    title: "Diplômée Bac+5",
    image: "/icons/graduate.svg",
    logos: [{ url: "/logos/company/universite.png", title: "Université Toulouse 3 Paul Sabatier" }],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta, laborum illum iste placeat perferendis iure tempora excepturi tenetur error. Itaque eum quae exercitationem corporis impedit facilis eaque nemo laboriosam.",
  },
  {
    id: "dataAnalyst",
    type: "job",
    title: "Data Analyst",
    image: "/icons/data.svg",
    logos: [{ title: "Akka", url: "/logos/company/akka.png" }, { title: "Sopra-steria", url: "/logos/company/sopra-steria.png" }],
    secteur: "Aéronautique (Airbus, Safran)",
    role: ["Data Analyst", "Data Scientist", "Data Engineer"],
    skills: "SAP, ETL, base de données, reporting",
  },
  {
    id: "transitionWeb",
    type: "education",
    title: "Transition Web",
    image: "/icons/power.svg",
    logos: [{ title: "Brassart", url: "/logos/company/brassart.png" }],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta, laborum illum iste placeat perferendis iure tempora excepturi tenetur error. Itaque eum quae exercitationem corporis impedit facilis eaque nemo laboriosam.",
  },
  {
    id: "developerWeb",
    type: "job",
    title: "Développeuse web",
    image: "/icons/coding.svg",
    logos: [{ title: "Magellium", url: "/logos/company/magellium.png" }, { title: "Forensoc", url: "/logos/company/forensoc.png" }],
    secteur: "Environnement & Gestion forestière (ONF), cybersécurité",
    role: ["Frontend", "Backend", "Fullstack"],
    skills:
      "Frontend, backend, base de données, devOps, agilité, dev mobile, webSocket",
  },
  {
    id: "tomorrow",
    type: "education",
    title: "Construire demain",
    image: "/icons/build.svg",
    logos: [],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta, laborum illum iste placeat perferendis iure tempora excepturi tenetur error. Itaque eum quae exercitationem corporis impedit facilis eaque nemo laboriosam.",
  },
]