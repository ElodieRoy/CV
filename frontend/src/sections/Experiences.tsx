import { Typography } from "@/components/ui/Typography";
import { animate, scroll } from "motion";
import { useEffect } from "react";

export function Experiences() {
  useEffect(() => {
    const imgGroup = document.getElementById("img-group");

    if (!imgGroup) return;

    const items = imgGroup.getElementsByTagName("li");

    // Animate horizontally during vertical scroll
    scroll(
      animate("#img-group", {
        transform: ["none", `translateX(-${items.length - 1}00vw)`],
      }),
      { target: document.getElementById("img-group-container") || undefined }
    );

    // Progress bar representing gallery scroll
    scroll(animate("#progress", { scaleX: [0, 1] }), {
      target: document.getElementById("img-group-container") || undefined,
    });
  }, []);

  return (
    <section id="experiences">
      <Typography type="h3">Mon parcours</Typography>
      <div id="img-group-container" className="h-[500vh] relative">
        <div className="sticky top-0 overflow-hidden h-screen">
          <ul id="img-group" className="flex">
            <li className="flex w-screen h-screen items-center justify-center flex-col flex-none img-container">
              <img
                className="w-8 h-9"
                src="https://examples.motion.dev/photos/cityscape/1.jpg"
              />
              <h3>#001</h3>
            </li>
            <li className="flex w-screen h-screen items-center justify-center flex-col flex-none img-container">
              <img
                className="w-80 h-96"
                src="https://examples.motion.dev/photos/cityscape/2.jpg"
              />
              <h3>#002</h3>
            </li>
            <li className="flex w-screen h-screen items-center justify-center flex-col flex-none img-container">
              <img
                className="w-80 h-96"
                src="https://examples.motion.dev/photos/cityscape/3.jpg"
              />
              <h3>#003</h3>
            </li>
            <li className="flex w-screen h-screen items-center justify-center flex-col flex-none img-container">
              <img
                className="w-80 h-96"
                src="https://examples.motion.dev/photos/cityscape/4.jpg"
              />
              <h3>#004</h3>
            </li>
            <li className="flex w-screen h-screen items-center justify-center flex-col flex-none img-container">
              <img
                className="w-80 h-96"
                src="https://examples.motion.dev/photos/cityscape/5.jpg"
              />
              <h3>#005</h3>
            </li>
          </ul>
        </div>
        <div
          id="progress"
          className="fixed left-0 w-full h-1 bg-amber-400 bottom-12"
        />
      </div>
    </section>
  );
}
