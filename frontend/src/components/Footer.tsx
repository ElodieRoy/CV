import { Copyright } from "@/components/Copyright";
import { Socials } from "@/components/Socials";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="pt-20 bg-background text-foreground">
      <Container className="flex max-lg:flex-col justify-between items-center pb-5 gap-3">
        <Copyright />
        <Socials />
      </Container>
    </footer>
  );
}
