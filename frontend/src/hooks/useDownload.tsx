import { handleDownload } from "@/services/download";
import { useState } from "react";

export const useDownload = () => {
  const [loading, setLoading] = useState(false);

  const download = async () => {
    setLoading(true);
    await handleDownload();
    setLoading(false);
  };

  return { download, loading };
};
