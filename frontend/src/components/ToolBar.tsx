import {
  ContactButton,
  DownloadButton,
  GithubButton,
  LanguageButton,
  LinkedinButton,
  ThemeButton,
} from "@/components/ui/IconButtons";
import { useIsScrolled } from "@/hooks/useIsScrolled";
import { cn } from "@/lib/utils";

export function ToolBar() {
  const { isScrolled } = useIsScrolled();
  return (
    <div
      className={cn(
        "max-lg:hidden bg-primary fixed right-0 top-1/4 rounded-l-2xl transition-all flex p-3 w-fit flex-col gap-5 translate-x-full z-10",
        {
          "translate-x-0": isScrolled,
        },
      )}
    >
      <LanguageButton />
      <ThemeButton />
      <DownloadButton />
      <ContactButton />
      <LinkedinButton />
      <GithubButton />
    </div>
  );
}
