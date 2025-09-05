import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Event Manager",
  description: "Mini Event Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );

}
