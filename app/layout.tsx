import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaishalee Singh - Portfolio",
  description:
    "Portfolio spanning Data Engineering, AI Engineering, Generative AI, and full-stack development, with ETL/ELT pipelines, RAG systems, streaming architecture, cloud data services, and production projects.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${outfit.variable} scroll-smooth`}
    >
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-transparent font-sans text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
