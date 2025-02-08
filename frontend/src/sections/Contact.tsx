import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Typography } from "@/components/ui/Typography";
import confetti from "canvas-confetti";

async function test(data: FormData) {
  await new Promise((r) => setTimeout(r, 1000));
  return console.log("🌸 ", data);
}

export function Contact() {
  const onSubmit = async (data: FormData) => {
    try {
      console.log("🌸");

      await test(data);
      await confetti({
        particleCount: 100,
        spread: 70,
        colors: [
          "#F44336",
          "#E91E63",
          "#FFC107",
          "#2196F3",
          "#4CAF50",
          "#9C27B0",
          "#009688",
        ],
        origin: { y: 0.8 },
      });
    } catch {
      console.error("🌸 ");
    }
  };

  return (
    <section id="contact">
      <Typography type="h3">Contactez-moi</Typography>
      <form
        className="flex flex-wrap gap-2 lg:gap-4 max-w-3xl mx-auto"
        action={onSubmit}
      >
        <Input
          className="flex-1"
          type="text"
          placeholder="Prénom/Nom"
          id="name"
          name="name"
        />
        <Input
          className="flex-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <Input
          as="textarea"
          className="w-full"
          placeholder="Message"
          rows={8}
          name="message"
        />
        <Button type="submit" className="w-full">
          Envoyer
        </Button>
      </form>
    </section>
  );
}
