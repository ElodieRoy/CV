import { GithubButton, LinkedinButton } from "@/components/ui/IconButtons";

export function Socials() {
  return (
    <div>
      <LinkedinButton className={"size-5 mr-4"} />
      <GithubButton className={"size-5"} />
    </div>
  );
}
