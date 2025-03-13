import photoDraw from "@/assets/Elodie_ROY_photo_342-removebg-draw.png";
import photo from "@/assets/Elodie_ROY_photo_342-removebg.png";
import { Background } from "@/components/Background";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { useDownload } from "@/hooks/useDownload";
import { Profile } from "@/sections/Profile";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();
  const { download } = useDownload();

  return (
    <section
      className="bg-linear-to-r/shorter lg:bg-linear-to-r/hsl from-red-500/70 lg:from-pink-500/70 lg:via-red-500/70 to-amber-500/70 text-light h-full"
      id="home"
    >
      <Background />
      <div className="container m-auto h-full flex justify-center items-center gap-20">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="size-36 lg:size-72 scale-0.5 rounded-full border-3 border-light overflow-hidden opacity-0 animate-zoom-in bg-[url('/images/backgroundPhoto.png')] bg-cover bg-end bg-no-repeat flex justify-center items-center">
            <img src={photo} alt="photo" />
            <img
              src={photoDraw}
              alt="photo"
              className="absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          <Typography
            type="h1"
            className="lg:hidden opacity-0 animate-blur-in-bottom animation-delay-500"
          >
            {t("name", { ns: "home" })}
          </Typography>
          <div className="lg:hidden overflow-hidden w-fit relative">
            <Typography
              type="h2"
              className="opacity-0 text-light animate-fade-in animation-delay-1500"
            >
              {t("title", { ns: "home" })}
            </Typography>
            <div className="absolute top-0 bg-light h-14 w-full opacity-0 animate-slide-through" />
          </div>
          <div className="flex items-center gap-1 opacity-0 animate-slide-in-top animation-delay-1000">
            <MapPinIcon className="size-4" />
            <Typography type="small">
              {t("location", { ns: "home" })}
            </Typography>
          </div>
          <Button
            className="backdrop-blur-lg border-light text-xs opacity-0 animate-slide-in-top animation-delay-1500 duration-500 hover:bg-light transition-all hover:text-black/70"
            onClick={download}
            aria-label="Download CV"
          >
            {t("download", { ns: "home" })}
          </Button>
        </div>
        <Profile className="max-lg:hidden max-w-2xl opacity-0 animate-blur-in-bottom animation-delay-500" />
      </div>
      <p className="text-light text-xs absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 flex-nowrap items-center 3xl:hidden">
        {t("scroll")}
        <ArrowDownIcon className="size-3 animate-bounce" />
      </p>
    </section>
  );
}
