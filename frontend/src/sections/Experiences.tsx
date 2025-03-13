import { ProgressBar } from "@/components/ProgressBar";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/Typography";
import { VerticalProgressBar } from "@/components/VerticalProgressBar";
import { useSliderScrollAnimation } from "@/hooks/useSliderScrollAnimation";
import { useTranslation } from "react-i18next";

export function Experiences() {
  useSliderScrollAnimation();
  const { t } = useTranslation();

  return (
    <section id="experiences">
      <Typography type="h3" className="lg:hidden">
        {t("menu.experiences")}
      </Typography>
      <div id="slider-container" className="h-[200vh] relative lg:pt-18">
        <div className="sticky top-20 overflow-hidden h-[calc(100vh_-_80px)]">
          <div className="h-full lg:h-1/12 w-3 lg:w-full absolute z-1 backdrop-blur-[1px] right-0 lg:bottom-0" />
          {/* title (only visible on lg) : 112px */}
          <div className="flex flex-col justify-center items-center h-28 max-lg:hidden">
            <Typography type="h3" className="pb-0 lg:pt-0">
              {t("menu.experiences")}
            </Typography>
          </div>

          {/* slider : 100% - 112px */}

          <Card className="h-[calc(100%_-_20px)] lg:h-[calc(100%_-_200px)] lg:mt-10 overflow-hidden relative p-0 pt-6">
            <Slider />
            {/* vertical progress bar (only visible on lg)*/}
            <VerticalProgressBar className="max-lg:hidden absolute h-[calc(100%_-_2rem)] w-1 top-4 left-124 z-1" />
            {/* progress bar (only visible on sm) : 112px */}
            <ProgressBar className="h-20 mt-4 lg:hidden w-[calc(100%_-_2rem)] ml-4" />
          </Card>
        </div>
      </div>
    </section>
  );
}

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

export function Slider() {
  const { t } = useTranslation();

  const experiences = t("experiences", {
    returnObjects: true,
    ns: "experiences",
  }) as Experience[];

  return (
    <ul
      id="slider"
      className="flex h-[calc(100%_-_3rem)] lg:h-full lg:flex-col"
    >
      {experiences.map((experience) => (
        <li
          key={experience.id}
          className="w-full h-full flex-none img-container flex max-lg:flex-col items-center gap-10 lg:gap-0 lg:p-30"
        >
          {/* Title & icon */}
          <div className="flex items-center flex-col gap-4 lg:w-76 lg:mr-21 ">
            <img
              src={experience.image}
              alt={experience.id}
              className="h-12 lg:h-20"
            />
            <Typography type="h4">{experience.title}</Typography>
          </div>

          {/* Détails Experience */}
          <div className="flex items-center flex-col gap-4 lg:gap-10 flex-4">
            {experience.logos && experience.logos.length > 0 && (
              <div className="flex h-8 lg:h-10 justify-center items-center gap-4">
                {experience.logos.map((logo) => (
                  <div
                    key={logo.title}
                    className="h-full w-14 lg:w-20 bg-light p-1 lg:p-2 rounded-lg shadow-md flex items-center justify-center"
                  >
                    <img
                      src={logo.url}
                      alt={logo.title}
                      className="max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="px-3 lg:px-6">
              {experience.type === "education" && (
                <>
                  <p className="lg:hidden">{experience.shortDescription}</p>
                  <p className="max-lg:hidden">{experience.longDescription}</p>
                </>
              )}
              {experience.type === "job" && (
                <div className="flex flex-col gap-3 lg:gap-6">
                  <div>
                    <Typography type="lead">
                      {t("activity", { ns: "experiences" })}:
                    </Typography>
                    <span>{experience.secteur}</span>
                  </div>

                  <div>
                    <Typography type="lead">
                      {t("role", { ns: "experiences" })}:
                    </Typography>

                    <div className="list-disc list-inside max-lg:hidden">
                      {experience.roles.longDescription.map((role, index) => (
                        <span
                          key={index}
                          className="block ml-2 lg:ml-4 before:content-['•'] before:mr-2 text-"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                    <div className="list-disc list-inside lg:hidden">
                      {experience.roles.shortDescription.map((role, index) => (
                        <span
                          key={index}
                          className="block ml-2 lg:ml-4 before:content-['•'] before:mr-2 text-"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Typography type="lead">
                      {t("skills", { ns: "experiences" })}:
                    </Typography>
                    <span>{experience.skills}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
