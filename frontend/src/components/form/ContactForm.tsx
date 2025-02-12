import { ContactData, contactSchema } from "@/components/form/types";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { confettiParams } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import confetti from "canvas-confetti";
import { useForm } from "react-hook-form";

async function sendMessage(data: ContactData) {
  try {
    await axios.post("/api/contact", data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Erreur inconnue");
    } else {
      throw new Error("Erreur inconnue");
    }
  }
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactData) => {
    try {
      await sendMessage(data);
      confetti(confettiParams)?.catch((e) => console.error(e));
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      className="flex flex-wrap gap-2 lg:gap-4 max-w-3xl mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className="flex-1"
        placeholder="Prénom/Nom"
        name="name"
        register={register}
        error={errors.name}
        disabled={isSubmitting}
      />
      <Input
        className="w-full md:flex-2"
        placeholder="Email"
        name="email"
        register={register}
        error={errors.email}
        disabled={isSubmitting}
      />
      <Input
        as="textarea"
        className="w-full"
        placeholder="Message"
        rows={8}
        name="message"
        register={register}
        error={errors.message}
        disabled={isSubmitting}
      />
      <Button type="submit" className="w-full" isLoading={isSubmitting}>
        Envoyer
      </Button>
    </form>
  );
}
