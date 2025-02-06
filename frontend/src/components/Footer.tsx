import { Container } from "@/components/ui/Container";
import { GithubButton, LinkedinButton } from "@/components/ui/IconButtons";
import { Typography } from "@/components/ui/Typography";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <Container className="flex max-lg:flex-col justify-between items-center pb-5 gap-3">
        <Typography type="small">@{YEAR} - By Elodie ROY</Typography>
        <div>
          <LinkedinButton className={"size-5 mr-4"} />
          <GithubButton className={"size-5"} />
        </div>
      </Container>
    </footer>
  );
}
