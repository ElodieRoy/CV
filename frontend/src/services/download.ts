import { toastAxiosError } from "@/lib/errorHandler";
import axios from "axios";

export async function handleDownload() {
  try {
    await axios.get("/api/download");
  } catch (error) {
    toastAxiosError(error);
  }
}