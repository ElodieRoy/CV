import { Socials } from "@/components/Socials";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { CURRENT_YEAR } from "@/constants";

export function Footer() {
  return (
    <footer className="pt-20 bg-background text-foreground">
      <Container className="flex max-lg:flex-col justify-between items-center pb-5 gap-3">
        <Typography type="muted">@{CURRENT_YEAR} - By Elodie ROY</Typography>
        <Socials />
      </Container>
    </footer>
  );
}
