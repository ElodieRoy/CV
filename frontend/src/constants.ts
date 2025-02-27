export const CURRENT_YEAR = new Date().getFullYear();

export const techStack = [
  {
    category: "Frontend",
    tools: [
      { name: "TypeScript", logo: "/icons/skills/typescript-original.svg" },
      { name: "React", logo: "/icons/skills/react-original.svg" },
      { name: "Astro", logo: "/icons/skills/astro-original.svg" },
      { name: "Vite", logo: "/icons/skills/vitejs-original.svg" },
      { name: "HTML", logo: "/icons/skills/html5-original.svg" },
      { name: "Redux", logo: "/icons/skills/redux-original.svg" },
      { name: "TailwindCss", logo: "/icons/skills/tailwindcss-original.svg" },
      { name: "CSS", logo: "/icons/skills/css3-original.svg" },
      { name: "Material UI", logo: "/icons/skills/materialui-original.svg" },
      { name: "Shadcn UI", logo: "/icons/skills/shadcnui.svg" },
    ],
  },
  {
    category: "Backend",
    tools: [
      { name: "JAVA", logo: "/icons/skills/java-original.svg" },
      { name: "Spring", logo: "/icons/skills/spring-original.svg" },
      { name: "Hibernate", logo: "/icons/skills/hibernate-original.svg" },
      { name: "Node.js", logo: "/icons/skills/nodejs-original.svg" },
      { name: "Express", logo: "/icons/skills/express-original.svg" },
      { name: "Swagger", logo: "/icons/skills/swagger-original.svg" },
      { name: "REST", logo: "/icons/skills/apirest.svg" },
      { name: "PostgreSQL", logo: "/icons/skills/postgresql-original.svg" },
      { name: "MySQL", logo: "/icons/skills/mysql-original.svg" },
      { name: "ElasticSearch", logo: "/icons/skills/elasticsearch-original.svg" },
    ],
  },
  {
    category: "Devops & CI",
    tools: [
      { name: "Git", logo: "/icons/skills/git-original.svg" },
      { name: "Docker", logo: "/icons/skills/docker-original.svg" },
      { name: "GitLab CI", logo: "/icons/skills/gitlab-original.svg" },
      { name: "GitHub", logo: "/icons/skills/github-original.svg" },
      { name: "PlayWright", logo: "/icons/skills/playwright-original.svg" },
      { name: "Jest", logo: "/icons/skills/jest-original.svg" },
    ],
  },
  {
    category: "Autres outils",
    tools: [
      { name: "VS Code", logo: "/icons/skills/vscode-original.svg" },
      { name: "Linux", logo: "/icons/skills/linux-original.svg" },
      { name: "Jira", logo: "/icons/skills/jira-original.svg" },
      { name: "SAP", logo: "/icons/skills/sap.svg" },
      { name: "Kibana", logo: "/icons/skills/kibana-original.svg" },
      { name: "Notion", logo: "/icons/skills/notion-original.svg" },
      { name: "XD", logo: "/icons/skills/xd-original.svg" },
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
