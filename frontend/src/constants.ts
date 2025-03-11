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
    category: "Other Tools",
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
