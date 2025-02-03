import { MapPinIcon } from "@heroicons/react/24/outline";

export function Home() {
  return (
    <section
      className="bg-linear-to-r/shorter lg:bg-linear-to-r/hsl from-red-500/70 lg:from-pink-500/70 lg:via-red-500/70 to-amber-500/70 text-light h-screen "
      id="home"
    >
      <div className="absolute bg-[url('src/assets/bg1.webp')] bg-cover bg-center opacity-10 h-full w-full" />
      <div className="z-0 flex flex-col justify-center items-center h-full gap-3">
        <h1 className="opacity-0 animate-blur-in-bottom animation-delay-500 font-bold text-3xl tracking-wide">
          Elodie ROY
        </h1>
        <div className="overflow-hidden w-fit relative">
          <h2 className="opacity-0 text-4xl tracking-tighter text-light font-light animate-fade-in animation-delay-1000">
            Développeuse Full-Stack
          </h2>
          <div className="absolute top-0 bg-light h-14 w-full animate-slide-through" />
        </div>
        <p className="font-light flex items-center gap-1 opacity-0 animate-slide-in-top animation-delay-1000">
          <MapPinIcon className="size-4" />
          Toulouse
        </p>
      </div>
    </section>
  );
}
