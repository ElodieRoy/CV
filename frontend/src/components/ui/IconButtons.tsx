import { useDarkTheme } from "@/hooks/useDarkTheme";
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
    <IconButtons onClick={toggleDarkMode} className={className}>
      <MoonIcon
        className="absolute top-0 scale-100 rotate-0 dark:scale-0 dark:rotate-180 transition-all size-full"
        onClick={() => (localStorage.currentTheme = "dark")}
        title={t("lightMode")}
      />
      <SunIcon
        className="absolute top-0 scale-0 rotate-0 dark:scale-100 dark:rotate-180 transition-all size-full"
        onClick={() => (localStorage.currentTheme = "light")}
        title={t("DarkMode")}
      />
    </IconButtons>
  );
}

export function LanguageButton({
  className,
}: ComponentPropsWithoutRef<"button">) {
  const { t } = useTranslation();
  return (
    <IconButtons title={t("translate")} className={className}>
      <LanguageIcon />
    </IconButtons>
  );
}

export function DownloadButton({
  className,
}: ComponentPropsWithoutRef<"button">) {
  const { t } = useTranslation();
  return (
    <IconButtons title={t("home.download")} className={className}>
      <ArrowDownTrayIcon />
    </IconButtons>
  );
}

export function ContactButton() {
  return (
    <IconButtons>
      <a href={"#contact"}>
        <EnvelopeIcon />
      </a>
    </IconButtons>
  );
}

export function LinkedinButton() {
  return (
    <IconButtons>
      <a
        href={"https://www.linkedin.com/in/eroy"}
        target="_blank"
        rel="noreferrer"
      >
        <img src="/icons/linkedin-plain.svg" />
      </a>
    </IconButtons>
  );
}
