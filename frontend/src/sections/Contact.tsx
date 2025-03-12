import { ContactForm } from "@/components/form/ContactForm";
import { Section } from "@/components/Section";
import { Typography } from "@/components/ui/Typography";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation("contact");
  return (
    <Section id="contact">
      <Typography type="h3">{t("contact")}</Typography>
      <p className="mb-8 max-w-3xl mx-auto">{t("description")}</p>
      <ContactForm />
    </Section>
  );
}
