import { Background } from "@/components/Background";

export function Loading() {
  return (
    <div className="bg-linear-to-r/shorter lg:bg-linear-to-r/hsl from-red-500/70 lg:from-pink-500/70 lg:via-red-500/70 to-amber-500/70 text-light h-full flex justify-center items-center">
      <Background />
      <div className="animate-spin rounded-full size-24 border-t-2 border-light opacity-30" />
    </div>
  );
}
