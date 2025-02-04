import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Profile } from "@/sections/Profile";
import { Skills } from "@/sections/Skills";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const isDark =
      localStorage.currentTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  return (
    <>
      <Header />
      <main className="bg-background text-foreground">
        <Profile />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
