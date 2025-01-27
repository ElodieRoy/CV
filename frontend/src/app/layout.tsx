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
      <body className="container mx-auto flex min-h-screen flex-col border font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
