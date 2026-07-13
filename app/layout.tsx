

// — Imports —

// Next.js
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Local
import "./_style/general.sass";
import { Footer } from './_components/Footer'
import { Header } from './_components/Header'


// — Code —

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
