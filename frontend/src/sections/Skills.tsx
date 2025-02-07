import { InViewWrapper } from "@/components/InViewWrapper";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/Typography";
import { techStack } from "@/constants";

export function Skills() {
  return (
    <section id="skills">
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
    </section>
  );
}
