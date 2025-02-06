import { InViewWrapper } from "@/components/InViewWrapper";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";

const techStack = [
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

export function Skills() {
  return (
    <section id="skills">
      <Container>
        <Typography type="h3">Compétences</Typography>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          {techStack.map((category) => (
            <InViewWrapper key={category.category}>
              <Card key={category.category} title={category.category}>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 lg:flex lg:flex-col items-start lg:pl-4">
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex max-lg:flex-col justify-center items-center gap-1 lg:gap-3 "
                    >
                      <img src={tool.logo} alt={tool.name} className="size-9" />
                      <span className="text-xs lg:text-sm whitespace-nowrap">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </InViewWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
