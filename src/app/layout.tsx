

// — Imports —

// Next.js
import type { Metadata } from "next"
import Link from "next/link"
import localFont from "next/font/local"

import { Red_Hat_Mono } from "next/font/google"

// Local
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"


// — Code —

export const metadata: Metadata = {
  title: "kuzminklk",
  description: "Daniel Cosmo's (kuzminklk) personal website",
  icons: {
    icon: [
      {
        url: "/scroll.svg",
      }
    ]
  }
}

const redHatMono = Red_Hat_Mono({subsets: ["latin"], weight: "400"})

const amstelvar = localFont({
  src: "../../public/amstelvar.woff2",
  display: "swap",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${amstelvar.className} ${redHatMono.className}`}>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
