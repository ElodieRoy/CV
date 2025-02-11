import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ToolBar } from "@/components/ToolBar";
import { Container } from "@/components/ui/Container";
import { Contact } from "@/sections/Contact";
import { Profile } from "@/sections/Profile";
import { Skills } from "@/sections/Skills";

export default function App() {
  return (
    <>
      <Header />
      <ToolBar />
      <main className="bg-background text-foreground">
        <Container>
          <Profile />
          <Skills />
          {/* <Experience /> */}
          <Contact />
        </Container>
      </main>
      <Footer />
    </>
  );
}
