import { ContactForm } from "@/components/form/ContactForm";
import { Section } from "@/components/Section";
import { Typography } from "@/components/ui/Typography";

export function Contact() {
  return (
    <Section id="contact">
      <Typography type="h3">Contactez-moi</Typography>
      <ContactForm />
    </Section>
  );
}
