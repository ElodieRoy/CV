export const CURRENT_YEAR = new Date().getFullYear();

export const techStack = [
  {
    category: "Frontend",
    tools: [
      { name: "TypeScript", logo: "/icons/typescript-original.svg" },
      { name: "React", logo: "/icons/react-original.svg" },
      { name: "Astro", logo: "/icons/astro-original.svg" },
      { name: "Vite", logo: "/icons/vitejs-original.svg" },
      { name: "HTML", logo: "/icons/html5-original.svg" },
      { name: "Redux", logo: "/icons/redux-original.svg" },
      { name: "TailwindCss", logo: "/icons/tailwindcss-original.svg" },
      { name: "CSS", logo: "/icons/css3-original.svg" },
      { name: "Material UI", logo: "/icons/materialui-original.svg" },
      { name: "Shadcn UI", logo: "/icons/shadcnui.svg" },
    ],
  },
  {
    category: "Backend",
    tools: [
      { name: "JAVA", logo: "/icons/java-original.svg" },
      { name: "Spring", logo: "/icons/spring-original.svg" },
      { name: "Hibernate", logo: "/icons/hibernate-original.svg" },
      { name: "Node.js", logo: "/icons/nodejs-original.svg" },
      { name: "Express", logo: "/icons/express-original.svg" },
      { name: "tRPC", logo: "/icons/trpc-original.svg" },
      { name: "REST", logo: "/icons/apirest.svg" },
      { name: "PostgreSQL", logo: "/icons/postgresql-original.svg" },
      { name: "MySQL", logo: "/icons/mysql-original.svg" },
      { name: "ElasticSearch", logo: "/icons/elasticsearch-original.svg" },
    ],
  },
  {
    category: "Devops & CI",
    tools: [
      { name: "Git", logo: "/icons/git-original.svg" },
      { name: "Docker", logo: "/icons/docker-original.svg" },
      { name: "GitLab CI", logo: "/icons/gitlab-original.svg" },
      { name: "GitHub", logo: "/icons/github-original.svg" },
      { name: "PlayWright", logo: "/icons/playwright-original.svg" },
      { name: "Jest", logo: "/icons/jest-original.svg" },
    ],
  },
  {
    category: "Autres outils",
    tools: [
      { name: "VS Code", logo: "/icons/vscode-original.svg" },
      { name: "Linux", logo: "/icons/linux-original.svg" },
      { name: "Jira", logo: "/icons/jira-original.svg" },
      { name: "SAP", logo: "/icons/sap.svg" },
      { name: "Kibana", logo: "/icons/kibana-original.svg" },
      { name: "Notion", logo: "/icons/notion-original.svg" },
      { name: "XD", logo: "/icons/xd-original.svg" },
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
