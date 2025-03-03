import { animate, scroll } from "motion";
import { useEffect } from "react";

export function useSliderScrollAnimation() {
  useEffect(() => {
    const sliderContainer = document.getElementById("slider-container");
    const slider = document.getElementById("slider");

    if (!slider || !sliderContainer) return;

    const sliderItemsLength = slider.getElementsByTagName("li").length;

    // Animate horizontally during vertical scroll
    scroll(
      animate(slider, {
        transform: [
          "none",
          `translate${
            window.innerWidth >= 1024 ? "Y" : "X"
          }(-${sliderItemsLength - 1}00%)`,
        ],
      }),
      { target: sliderContainer }
    );

    // Progress bar representing scroll
    scroll(
      animate("#progress", {
        x: ["-100%", "-72%", "-72%", "-22%", "-22%", "-11%", "-11%", "0%"],
      }),
      {
        target: sliderContainer,
      }
    );
    scroll(
      animate("#vertical-progress", {
        y: ["-100%", "-72%", "-72%", "-22%", "-22%", "-11%", "-11%", "0%"],
      }),
      {
        target: sliderContainer,
      }
    );

    // change bullet color in scroll
    for (let step = 0; step < 5; step++) {
      setTimeout(() => {
        scroll(
          animate(`#progress-bar-${step + 1}`, {
            opacity: Array.from({ length: sliderItemsLength }, (_, i) =>
              i > step ? 1 : 0
            ),
          }),
          {
            target: sliderContainer,
          }
        );
      }, step * 500); // Delays each step by 500ms
    }
  }, []);
}
