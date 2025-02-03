import photo from "@/assets/Elodie_ROY_photo_342.jpg";
import { Button } from "@/components/ui/Button";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();
  return (
    <section
      className="bg-linear-to-r/shorter lg:bg-linear-to-r/hsl from-red-500/70 lg:from-pink-500/70 lg:via-red-500/70 to-amber-500/70 text-light h-full"
      id="home"
    >
      <div className="absolute bg-[url('src/assets/bg1.webp')] bg-cover bg-center opacity-30 h-full w-full -z-1" />
      <div className="flex flex-col justify-center items-center h-full gap-3">
        <div className="size-30 rounded-full overflow-hidden border-3 scale-0.5 border-light shadow-2xl opacity-0 animate-zoom-in">
          <img src={photo} alt="profil photo" />
        </div>
        <h1 className="opacity-0 animate-blur-in-bottom animation-delay-500 font-bold text-3xl tracking-wide">
          {t("home.name")}
        </h1>
        <div className="overflow-hidden w-fit relative">
          <h2 className="opacity-0 text-4xl tracking-tighter text-light font-light animate-fade-in animation-delay-1500">
            {t("home.title")}
          </h2>
          <div className="absolute top-0 bg-light h-14 w-full opacity-0 animate-slide-through" />
        </div>
        <p className="font-light flex items-center gap-1 opacity-0 animate-slide-in-top animation-delay-1000">
          <MapPinIcon className="size-4" />
          {t("home.location")}
        </p>
        <Button className="backdrop-blur-lg text-xs opacity-0 animate-slide-in-top animation-delay-1500">
          {t("home.download")}
        </Button>
      </div>
      <p className="text-light text-xs absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 flex-nowrap items-center">
        Scroll Down
        <ArrowDownIcon className="size-3 animate-bounce" />
      </p>
    </section>
  );
}
