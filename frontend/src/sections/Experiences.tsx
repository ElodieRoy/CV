import { ProgressBar } from "@/components/ProgressBar";
import { Typography } from "@/components/ui/Typography";
import { experiences } from "@/constants";
import { useSliderScrollAnimation } from "@/hooks/useSliderScrollAnimation";

export function Experiences() {
  useSliderScrollAnimation();

  return (
    <section id="experiences">
      <Typography type="h3">Mon parcours</Typography>
      <div id="slider-container" className="h-[200vh] relative">
        <div className="sticky top-20 overflow-hidden h-[calc(100vh_-_80px)]">
          {/* slider : 100% - 112px */}
          <div className="h-[calc(100%_-_112px)]">
            <Slider />
          </div>
          {/* progress bar : 112px */}
          <div className="flex flex-col justify-center h-28">
            <ProgressBar />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Slider() {
  return (
    <ul id="slider" className="flex h-full">
      {experiences.map((experience) => (
        <li
          key={experience.id}
          className="p-2 flex w-full h-full items-center flex-col flex-none img-container gap-4 lg:px-40"
        >
          <img src={experience.image} alt={experience.id} className="h-20" />
          <Typography type="h4">{experience.title}</Typography>
          <div className="flex h-10 justify-center items-center gap-4">
            {experience.logos.map((logo) => (
              <div
                key={logo.title}
                className="h-full w-20 bg-light py-1 px-2 rounded-lg shadow-md flex items-center justify-center"
              >
                <img src={logo.url} alt={logo.title} className="max-w-full" />
              </div>
            ))}
          </div>
          <div className="px-6">
            {experience.type === "education" && <p>{experience.description}</p>}
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
        </li>
      ))}
    </ul>
  );
}
