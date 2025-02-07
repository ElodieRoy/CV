import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Typography } from "@/components/ui/Typography";

export function Contact() {
  return (
    <section id="contact">
      <Typography type="h3">Contactez-moi</Typography>
      <form className="flex flex-wrap gap-4">
        <Input
          className="min-w-sm flex-1"
          type="text"
          id="name"
          placeholder="Prénom/Nom"
        />
        <Input
          className="min-w-sm flex-2"
          type="email"
          id="email"
          placeholder="Email"
        />
        <Input
          as="textarea"
          className="w-full"
          placeholder="Message"
          id="w3review"
          rows={6}
        />
        <Button type="submit" className="w-full">
          Envoyer
        </Button>
      </form>
    </section>
  );
}
