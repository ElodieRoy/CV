import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";

const techStack = [
  {
    category: "Frontend",
    tools: [
      { name: "JavaScript", logo: "/icons/javascript-original.svg" },
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

export function Skills() {
  return (
    <section id="skills">
      <Container>
        <Typography type="h3">Compétences</Typography>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStack.map((category) => (
            <Card key={category.category} title={category.category}>
              <div className="flex flex-wrap gap-4">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col justify-center items-center gap-1"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      width={32}
                      height={32}
                    />
                    <span className="text-gray-700 dark:text-gray-300 text-xs">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
