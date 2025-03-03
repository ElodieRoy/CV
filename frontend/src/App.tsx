import { Error } from "@/components/Error";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ToolBar } from "@/components/ToolBar";
import { Container } from "@/components/ui/Container";
import { Contact } from "@/sections/Contact";
import { Experiences } from "@/sections/Experiences";
import { Profile } from "@/sections/Profile";
import { Skills } from "@/sections/Skills";
import { ErrorBoundary } from "react-error-boundary";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <ToolBar />
      <main className="bg-background text-foreground">
        <ErrorBoundary fallback={<Error />}>
          <Container>
            <Profile />
            <Skills />
            <Experiences />
            <Contact />
          </Container>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}
