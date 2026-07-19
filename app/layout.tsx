

// — Imports —

// Next.js
import type { Metadata } from "next";

// Local
import "./globals.css";
import { amstelvar } from "./_fonts/amstelvar";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";


// — Code —

export const metadata: Metadata = {
  title: "kuzminklk",
  description: "Daniel Cosmo's (kuzminklk) personal website",
  icons: {
    icon: [
      {
        url: "/scroll-solid-dark.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/scroll-solid-light.svg",
        media: "(prefers-color-scheme: dark)",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${amstelvar.variable}`}>
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
