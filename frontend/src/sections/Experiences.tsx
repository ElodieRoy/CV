import { ProgressBar } from "@/components/ProgressBar";
import { Typography } from "@/components/ui/Typography";
import { VerticalProgressBar } from "@/components/VerticalProgressBar";
import { experiences } from "@/constants";
import { useSliderScrollAnimation } from "@/hooks/useSliderScrollAnimation";

export function Experiences() {
  useSliderScrollAnimation();

  return (
    <section id="experiences">
      <Typography type="h3" className="lg:hidden">
        Mon parcours
      </Typography>
      <div id="slider-container" className="h-[200vh] relative lg:pt-18">
        <div className="sticky top-20 overflow-hidden h-[calc(100vh_-_80px)]">
          {/* title (only visible on lg) : 112px */}
          <div className="flex flex-col justify-center items-center h-28 max-lg:hidden">
            <Typography type="h3" className="pb-0 lg:pt-0">
              Mon parcours
            </Typography>
          </div>

          {/* slider : 100% - 112px */}
          <div className="h-[calc(100%_-_112px)] lg:h-[calc(100%_-_200px)] lg:mt-10 overflow-hidden relative">
            <Slider />
            {/* vertical progress bar (only visible on lg)*/}
            <VerticalProgressBar className="max-lg:hidden absolute h-full w-1 top-0 left-114 z-1" />
          </div>

          {/* progress bar (only visible on sm) : 112px */}
          <ProgressBar className="h-28 lg:hidden flex flex-col justify-center" />
        </div>
      </div>
    </section>
  );
}

export function Slider() {
  return (
    <ul id="slider" className="flex h-full lg:flex-col">
      {experiences.map((experience) => (
        <li
          key={experience.id}
          className="p-2 w-full h-full flex-none img-container flex max-lg:flex-col items-center gap-14 lg:gap-0 lg:p-30"
        >
          {/* Title & icon */}
          <div className="flex items-center flex-col gap-4 lg:w-76 lg:mr-11 ">
            <img src={experience.image} alt={experience.id} className="h-20" />
            <Typography type="h4">{experience.title}</Typography>
          </div>

          {/* Détails Experience */}
          <div className="flex items-center flex-col gap-4 flex-4">
            {experience.logos && experience.logos.length > 0 && (
              <div className="flex h-10 justify-center items-center gap-4">
                {experience.logos.map((logo) => (
                  <div
                    key={logo.title}
                    className="h-full w-20 bg-light py-1 px-2 rounded-lg shadow-md flex items-center justify-center"
                  >
                    <img
                      src={logo.url}
                      alt={logo.title}
                      className="max-w-full  object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="px-6">
              {experience.type === "education" && (
                <p>{experience.description}</p>
              )}
              {experience.type === "job" && (
                <div className="flex flex-col gap-4">
                  <div>
                    <Typography type="lead">Secteurs d'activité:</Typography>
                    <span>{experience.secteur}</span>
                  </div>

                  <div>
                    <Typography type="lead">Rôles:</Typography>

                    <div className="list-disc list-inside">
                      {experience.roles.map((role, index) => (
                        <span
                          key={index}
                          className="block ml-2 lg:ml-4 before:content-['•'] before:mr-2"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Typography type="lead">Compétences:</Typography>
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
