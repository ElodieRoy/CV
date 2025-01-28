import { Header } from "@/components/header";
import { ModeToggle } from "@/components/mode-toggle";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
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
    <html lang="fr" suppressHydrationWarning>
      <body className="m-4 mx-auto size-[calc(100%-2rem)] border font-sans lg:my-8 lg:h-[calc(100%-4rem)] lg:max-w-5xl lg:border-red-600">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
