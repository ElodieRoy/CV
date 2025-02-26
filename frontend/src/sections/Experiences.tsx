import { Typography } from "@/components/ui/Typography";
import { animate, scroll } from "motion";
import { useEffect } from "react";

export function Experiences() {
  useEffect(() => {
    const imgGroup = document.getElementById("img-group");
    const imgGroupContainer = document.getElementById("img-group-container");

    if (!imgGroup || !imgGroupContainer) return;

    const items = imgGroup.getElementsByTagName("li");

    // Animate horizontally during vertical scroll
    scroll(
      animate(imgGroup, {
        transform: ["none", `translateX(-${items.length - 1}00vw)`],
      }),
      { target: imgGroupContainer }
    );

    // Progress bar representing scroll
    scroll(animate("#progress", { x: ["-100%", "0%"] }), {
      target: imgGroupContainer,
    });
    scroll(animate("#progress-bar-end", { opacity: [0, 0, 0, 0, 1] }), {
      target: imgGroupContainer,
    });
  }, []);

  return (
    <section id="experiences">
      <Typography type="h3">Mon parcours</Typography>
      <div id="img-group-container" className="h-[500vh] relative">
        <div className="sticky top-0 overflow-hidden h-screen">
          <ul id="img-group" className="flex">
            {["1", "2", "3", "4", "5"].map((i) => (
              <li
                key={i}
                className="flex w-screen h-screen items-center justify-center flex-col flex-none img-container"
              >
                <img
                  className="w-80 h-96"
                  src={`https://examples.motion.dev/photos/cityscape/${i}.jpg`}
                />
                <h3>#00{i}</h3>
              </li>
            ))}
          </ul>
          <div id="progress-bar" className="relative -top-16 h-1 bg-foreground">
            <span
              id="progress-bar-start"
              className="absolute -top-1 rounded-full bg-primary size-3 z-1"
            />
            <span className="absolute -top-1 right-0 rounded-full bg-foreground size-3 z-1" />
            <span
              id="progress-bar-end"
              className="absolute -top-1 right-0 rounded-full bg-primary size-3 z-2"
            />
            <div id="progress" className="h-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
