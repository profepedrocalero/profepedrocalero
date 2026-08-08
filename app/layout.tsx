import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Profe Pedro Calero",
  description:
    "Recursos de Tecnología, Programación, Robótica e Inteligencia Artificial para ESO y Bachillerato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}