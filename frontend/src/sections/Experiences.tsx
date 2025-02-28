import { ProgressBar } from "@/components/ProgressBar";
import { Typography } from "@/components/ui/Typography";
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
      {[
        {
          id: "graduate",
          title: "Diplômée Bac+5",
          image: "/icons/graduate.svg",
          logo: [],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta, laborum illum iste placeat perferendis iure tempora excepturi tenetur error. Itaque eum quae exercitationem corporis impedit facilis eaque nemo laboriosam.",
        },
        {
          id: "data",
          title: "Data Analyst",
          image: "/icons/data.svg",
          logo: [],
          secteur: "Aéronautique (Airbus, Safran)",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta, laborum illum iste placeat perferendis iure tempora excepturi tenetur error. Itaque eum quae exercitationem corporis impedit facilis eaque nemo laboriosam.",
        },
        {
          id: "web",
          title: "Évolution Web",
          image: "/icons/power.svg",
          logo: [],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta, laborum illum iste placeat perferendis iure tempora excepturi tenetur error. Itaque eum quae exercitationem corporis impedit facilis eaque nemo laboriosam.",
        },
        {
          id: "developer",
          title: "Développeuse web",
          image: "/icons/coding.svg",
          logo: [],
          secteur: "Environnement & Gestion forestière (ONF), cybersécurité",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta, laborum illum iste placeat perferendis iure tempora excepturi tenetur error. Itaque eum quae exercitationem corporis impedit facilis eaque nemo laboriosam.",
        },
        {
          id: "covid",
          title: "Construire demain",
          image: "/icons/build.svg",
          logo: [],
          secteur: "Aéronautique (Airbus, Safran)",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta, laborum illum iste placeat perferendis iure tempora excepturi tenetur error. Itaque eum quae exercitationem corporis impedit facilis eaque nemo laboriosam.",
        },
      ].map(({ id, title, image, description }) => (
        <li
          key={id}
          className="p-2 flex w-full h-full items-center flex-col flex-none img-container gap-4"
        >
          <img src={image} alt={id} className="h-20" />
          <Typography type="h4">{title}</Typography>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
}
