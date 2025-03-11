import bgImage from "src/assets/bg.webp";
export function Background() {
  return (
    <div
      className="absolute bg-cover bg-bottom opacity-30 h-full w-full -z-1"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
  );
}
