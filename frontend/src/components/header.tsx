"use client";

import { DownloadCv } from "@/components/download-cv";
import { ModeToggle } from "@/components/mode-toggle";
import { Social } from "@/components/social";
import { Button } from "@/components/ui/button";
import { Typography } from "@/ui/typography";
import { CircleChevronDown, LocateFixed } from "lucide-react";

export function Header() {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center rounded-3xl bg-background/90 px-6 py-4">
      <div>
        <Button className="xl:hidden [&_svg]:size-8">
          <CircleChevronDown className="" />
        </Button>
        <Social className="max-xl:hidden" />
      </div>
      <div className="flex flex-1 flex-col items-center">
        <Typography variant="h1" className="select-all selection:bg-primary/50">
          Elodie ROY
        </Typography>
        <Typography variant="h2">Développeuse Full-Stack</Typography>
        <Typography variant="muted">
          <LocateFixed className="mr-1 inline-block size-3" />
          Toulouse
        </Typography>
      </div>
      <div className="justify-self-end">
        <DownloadCv className="max-xl:hidden" />
        <ModeToggle className="xl:absolute" />
      </div>
    </header>
  );
}
