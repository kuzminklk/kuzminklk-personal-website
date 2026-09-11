

import type { Metadata } from "next"
import Link from "next/link"
import localFont from "next/font/local"
import { notFound } from "next/navigation"
import { Red_Hat_Mono, Lora, Noto_Sans_Mono } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { hasLocale } from "next-intl"

import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { routing } from "@/i18n/routing"


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
const lora = Lora({weight: "variable"})
const notoSansMono = Noto_Sans_Mono({weight: "400"})

const amstelvar = localFont({
  src: "../../../public/amstelvar.woff2",
  display: "swap",
})


export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{locale: string}>
}>) {
  const {locale} = await params

  if(!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale} className={`${amstelvar.className} ${redHatMono.className} ${lora.className} ${notoSansMono.className}`}>
      <body>
        <NextIntlClientProvider>
          <Header/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
