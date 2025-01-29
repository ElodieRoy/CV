import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

export function DownloadCv(props: ComponentPropsWithoutRef<"button">) {
  return (
    <Button variant="ghost" {...props}>
      Télécharger mon CV <FileDown />
    </Button>
  );
}
