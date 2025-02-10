import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { confettiParams } from "@/constants";
import confetti from "canvas-confetti";
import z from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne doit pas dépasser 50 caractères"),
  email: z.string().email("L'adresse e-mail n'est pas valide"),
  message: z
    .string()
    .min(1, "Le message doit contenir au moins 10 caractères.")
    .max(3000, "Le message ne doit pas dépasser 3000 caractères."),
});

type ContactData = z.infer<typeof contactSchema>;

async function sentMessage(data: ContactData) {
  await new Promise((r) => setTimeout(r, 1000));
  console.log(JSON.stringify(data));
  return;
}
async function formAction(formData: FormData) {
  try {
    const formValues = Object.fromEntries(formData);
    const result = contactSchema.safeParse(formValues);

    if (result.success) {
      await sentMessage(result.data);
      confetti(confettiParams)?.catch((e) => console.error(e));
    } else {
      console.error(result.error);
    }
  } catch {
    console.error("🌸 ");
  }
}

export function ContactForm() {
  return (
    <form
      className="flex flex-wrap gap-2 lg:gap-4 max-w-3xl mx-auto"
      action={formAction}
    >
      <Input className="flex-1" placeholder="Prénom/Nom" name="name" />
      <Input className="flex-2" placeholder="Email" name="email" />
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
  );
}
