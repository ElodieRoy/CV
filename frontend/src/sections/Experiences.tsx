import { Typography } from "@/components/ui/Typography";
import { animate, scroll } from "motion";
import { useEffect } from "react";

export function Experiences() {
  useEffect(() => {
    const imgGroup = document.getElementById("img-group");
    const imgGroupContainer = document.getElementById("img-group-container");

    if (!imgGroup || !imgGroupContainer) return;

    const itemsLength = imgGroup.getElementsByTagName("li").length;

    // Animate horizontally during vertical scroll
    scroll(
      animate(imgGroup, {
        transform: ["none", `translateX(-${itemsLength - 1}00vw)`],
      }),
      { target: imgGroupContainer }
    );

    // Progress bar representing scroll
    scroll(animate("#progress", { x: ["-100%", "0%"] }), {
      target: imgGroupContainer,
    });
    scroll(
      animate("#progress-bar-end", {
        opacity: Array.from({ length: itemsLength }, (_, i) =>
          i === itemsLength - 1 ? 1 : 0
        ),
      }),
      {
        target: imgGroupContainer,
      }
    );
  }, []);

  return (
    <section id="experiences">
      <Typography type="h3">Mon parcours</Typography>
      <div id="img-group-container" className="h-[calc(500vh_+_80px)] relative">
        <div className="sticky top-20 overflow-hidden h-[calc(100vh_-_56px)]">
          <ul id="img-group" className="flex h-[calc(100%_-_80px)]">
            {["1", "2", "3", "4", "5"].map((i) => (
              <li
                key={i}
                className="flex w-screen h-full items-center justify-center flex-col flex-none img-container"
              >
                <img
                  className="w-80 h-1/2"
                  src={`https://examples.motion.dev/photos/cityscape/${i}.jpg`}
                />
                <h3>#00{i}</h3>
              </li>
            ))}
          </ul>
          <div
            id="progress-bar-container"
            className="flex flex-col justify-center h-80px"
          >
            <div
              id="progress-bar"
              className="relative mt-auto h-1 bg-foreground"
            >
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
      </div>
    </section>
  );
}
