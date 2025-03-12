import { InViewWrapper } from "@/components/InViewWrapper";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/Typography";
import { techStack } from "@/constants";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();
  return (
    <Section id="skills">
      <Typography type="h3">{t("menu.skills")}</Typography>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
        {techStack.map((category) => (
          <InViewWrapper key={category.category}>
            <Card key={category.category} title={t(category.category)}>
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
    </Section>
  );
}
