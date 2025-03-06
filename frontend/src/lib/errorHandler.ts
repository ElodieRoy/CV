import axios from "axios";
import { toast } from "react-toastify";

export function toastAxiosError(error: unknown) {
  const errorMessage =
    axios.isAxiosError(error) && error.response?.data?.error
      ? error.response.data.error
      : "Une erreur inconnue est survenue";

  toast.error(errorMessage);
  console.error(error);
}
