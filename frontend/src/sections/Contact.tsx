import { ContactForm } from "@/components/form/ContactForm";
import { Section } from "@/components/Section";
import { Typography } from "@/components/ui/Typography";

export function Contact() {
  return (
    <Section id="contact">
      <Typography type="h3">Contactez-moi</Typography>
      <p className="mb-8 max-w-3xl mx-auto">
        Pour en savoir plus sur mon profil, échanger ou me partager des idées
        d'applications pour mon portfolio, n'hésitez pas à me laisser un
        message.
      </p>
      <ContactForm />
    </Section>
  );
}
