import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Home } from "@/sections/Home";
import { Profile } from "@/sections/Profile";
import { Skills } from "@/sections/Skills";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Profile />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
