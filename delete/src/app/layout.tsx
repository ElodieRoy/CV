import { Header } from "@/components/header";
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
      <body className="m-4 mx-auto size-[calc(100%-2rem)] bg-slate-200 font-sans dark:bg-slate-600 lg:my-8 lg:h-[calc(100%-4rem)] lg:max-w-5xl">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col lg:h-full">
            <Header />
            <main className="mt-4 h-full rounded-3xl bg-background/90 p-4">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
