import { ContactForm } from "@/components/form/ContactForm";
import { Typography } from "@/components/ui/Typography";

export function Contact() {
  return (
    <section id="contact">
      <Typography type="h3">Contactez-moi</Typography>
      <ContactForm />
    </section>
  );
}
