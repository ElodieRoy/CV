import { Header } from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV - Elodie ROY",
  description: "Online CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="m-4 mx-auto size-[calc(100%-2rem)] border font-sans lg:my-8 lg:h-[calc(100%-4rem)] lg:max-w-5xl lg:border-red-600">
        <Header />
        {children}
      </body>
    </html>
  );
}
