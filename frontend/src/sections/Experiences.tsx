import { ProgressBar } from "@/components/ProgressBar";
import { Typography } from "@/components/ui/Typography";
import { useSliderScrollAnimation } from "@/hooks/useSliderScrollAnimation";

export function Experiences() {
  useSliderScrollAnimation();

  return (
    <section id="experiences">
      <Typography type="h3">Mon parcours</Typography>
      <div id="slider-container" className="h-[calc(500vh_+_80px)] relative">
        <div className="sticky top-20 overflow-hidden h-[calc(100vh_-_80px)]">
          <div className="h-[calc(100%_-_112px)]">
            <Slider />
          </div>
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
      {["1", "2", "3", "4", "5"].map((i) => (
        <li
          key={i}
          className="flex w-screen h-full items-center justify-center flex-col flex-none img-container border"
        >
          <img
            className="w-80 h-1/2"
            src={`https://examples.motion.dev/photos/cityscape/${i}.jpg`}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem
            quod veniam maiores accusantium sit voluptate sequi iusto
            repudiandae earum, nulla mollitia dicta cumque, tenetur quam ipsum!
            Optio, saepe ipsa?
          </p>
        </li>
      ))}
    </ul>
  );
}
