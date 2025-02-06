import { Container } from "@/components/ui/Container";
import { GithubButton, LinkedinButton } from "@/components/ui/IconButtons";
import { Typography } from "@/components/ui/Typography";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <Container className="flex justify-between items-center pb-5">
        <Typography type="small">@{YEAR} - By Elodie ROY</Typography>

        <LinkedinButton className={"ml-auto mr-2"} />
        <GithubButton />
      </Container>
    </footer>
  );
}
