import { ContactForm } from "@/components/form/ContactForm";
import { Section } from "@/components/Section";
import { Typography } from "@/components/ui/Typography";

export function Contact() {
  return (
    <Section id="contact">
      <Typography type="h3">Contactez-moi</Typography>
      <p className="mb-8 max-w-3xl mx-auto">
        Intéressé par une collaboration, curieux d’en savoir plus ou simplement
        envie de discuter? N'hésitez pas à me laisser un message.
      </p>
      <ContactForm />
    </Section>
  );
}
