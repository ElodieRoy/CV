import { ContactData } from "@/components/form/types";
import { confettiParams } from "@/constants";
import { toastAxiosError } from "@/lib/errorHandler";
import axios from "axios";
import confetti from "canvas-confetti";

export async function handleSentMessage(data: ContactData) {
  try {
    await axios.post("/api/contact", data);
    confetti(confettiParams)?.catch((e) => console.error(e));
  } catch (error) {
    toastAxiosError(error);
  }
}
