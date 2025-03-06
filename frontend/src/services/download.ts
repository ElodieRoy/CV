import { toastAxiosError } from "@/lib/errorHandler";
import axios from "axios";

function downloadBlob(blob: Blob, fileName: string) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

export async function handleDownload() {
  try {
    const response = await axios.get("/api/download", {
      responseType: "blob",
    });

    const blob = new Blob([response.data], { type: "application/pdf" });
    downloadBlob(blob, "CV_Elodie_ROY_Developpeuse_web");
  } catch (error) {
    toastAxiosError(error);
  }
}
