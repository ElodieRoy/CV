import { ContactData, contactSchema } from "@/components/form/types";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { handleSentMessage } from "@/services/sentMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const { t } = useTranslation("contact");

  const onSubmit = async (data: ContactData) => {
    await handleSentMessage(data).then(() => reset());
  };

  return (
    <form
      className="flex flex-wrap gap-2 lg:gap-4 max-w-3xl mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className="flex-1"
        placeholder={t("form.name")}
        name="name"
        register={register}
        error={errors.name}
        disabled={isSubmitting}
      />
      <Input
        className="w-full md:flex-2"
        placeholder={t("form.email")}
        name="email"
        register={register}
        error={errors.email}
        disabled={isSubmitting}
      />
      <Input
        as="textarea"
        className="w-full"
        placeholder={t("form.message")}
        rows={8}
        name="message"
        register={register}
        error={errors.message}
        disabled={isSubmitting}
      />

      <Button
        type="submit"
        className="w-full"
        isLoading={isSubmitting}
        aria-label="Envoyer"
      >
        {t("form.send")}
      </Button>
    </form>
  );
}
