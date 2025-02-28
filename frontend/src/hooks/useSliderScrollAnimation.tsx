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
        transform: ["none", `translateX(-${sliderItemsLength - 1}00%)`],
      }),
      { target: sliderContainer }
    );

    // Progress bar representing scroll
    scroll(animate("#progress", { x: ["-100%", "0%"] }), {
      target: sliderContainer,
    });
    scroll(
      animate("#progress-bar-end", {
        opacity: Array.from({ length: sliderItemsLength }, (_, i) =>
          i === sliderItemsLength - 1 ? 1 : 0
        ),
      }),
      {
        target: sliderContainer,
      }
    );
  }, []);
}
