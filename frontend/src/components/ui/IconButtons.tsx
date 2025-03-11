import { useDarkTheme } from "@/hooks/useDarkTheme";
import { useDownload } from "@/hooks/useDownload";
import { cn } from "@/lib/utils";
import { EnvelopeIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon, LanguageIcon } from "@heroicons/react/24/solid";
import { ComponentPropsWithoutRef } from "react";
import { useTranslation } from "react-i18next";

export function IconButtons({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className={cn("size-6 text-light relative transition-all", className)}
    >
      {children}
    </button>
  );
}

export function ThemeButton({ className }: ComponentPropsWithoutRef<"button">) {
  const { toggleDarkMode } = useDarkTheme();
  const { t } = useTranslation();
  return (
    <IconButtons
      onClick={toggleDarkMode}
      className={className}
      aria-label="Theme bouton"
    >
      <MoonIcon
        className="absolute top-0 scale-100 rotate-0 dark:scale-0 dark:rotate-180 size-full"
        onClick={() => (localStorage.currentTheme = "dark")}
        title={t("lightMode")}
      />
      <SunIcon
        className="absolute top-0 scale-0 rotate-0 dark:scale-100 dark:rotate-180 size-full"
        onClick={() => (localStorage.currentTheme = "light")}
        title={t("darkMode")}
      />
    </IconButtons>
  );
}

export function LanguageButton({
  className,
}: ComponentPropsWithoutRef<"button">) {
  const { t, i18n } = useTranslation();
  return (
    <IconButtons
      title={t("translate")}
      className={className}
      aria-label="Langue"
      onClick={() =>
        i18n.changeLanguage(i18n.resolvedLanguage === "fr" ? "en" : "fr")
      }
    >
      <LanguageIcon />
    </IconButtons>
  );
}

export function DownloadButton({
  className,
}: ComponentPropsWithoutRef<"button">) {
  const { t } = useTranslation();
  const { download } = useDownload();

  return (
    <IconButtons
      title={t("download", { ns: "home" })}
      className={className}
      onClick={download}
      aria-label="Télécharger CV"
    >
      <ArrowDownTrayIcon />
    </IconButtons>
  );
}

export function ContactButton() {
  return (
    <IconButtons aria-label="Contact">
      <a href={"#contact"} aria-label="Lien vers contact">
        <EnvelopeIcon />
      </a>
    </IconButtons>
  );
}

export function LinkedinButton({
  className,
}: ComponentPropsWithoutRef<"button">) {
  return (
    <IconButtons className={className} aria-label="Linkedin">
      <a
        href={"https://www.linkedin.com/in/eroy"}
        target="_blank"
        rel="noreferrer"
        aria-label="Lien vers linkedin"
      >
        <img src="/logos/social/linkedin-plain.svg" alt="linkedin" />
      </a>
    </IconButtons>
  );
}

export function GithubButton({
  className,
}: ComponentPropsWithoutRef<"button">) {
  return (
    <IconButtons className={className} aria-label="Github">
      <a
        href={"https://github.com/ElodieRoy"}
        target="_blank"
        rel="noreferrer"
        aria-label="Lien vers github"
      >
        <img src="/logos/social/github-light.svg" alt="github" />
      </a>
    </IconButtons>
  );
}
