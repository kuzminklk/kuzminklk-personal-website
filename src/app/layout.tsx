

// — Imports —

// Next.js
import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";

import { Red_Hat_Mono } from "next/font/google"

// Local
import "./globals.css";


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
};

const redHatMono = Red_Hat_Mono({subsets: ["latin"], weight: "400"})

const amstelvar = localFont({
  src: "../../public/amstelvar.woff2",
  display: "swap",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${amstelvar.className} ${redHatMono.className}`}>
      <body>
        <header>
          <h3>kuzminklk</h3>
          <nav>
            <h3><Link href="/">About<span className="emoji">🧑‍🚀</span></Link></h3>
            <h3><Link href="/development">Development<span className="emoji">💻</span></Link></h3>
            <h3><Link href="/photography">Photography<span className="emoji">📸</span></Link></h3>
            <h3><Link href="/sports">Sports<span className="emoji">💪</span></Link></h3>
            <h3><Link href="/books">Books<span className="emoji">📚</span></Link></h3>
            <h3><Link href="/writings">Writings<span className="emoji">📒</span></Link></h3>
            <h3><Link href="/connect">Connect<span className="emoji">🤝</span></Link></h3>
          </nav>
		  	</header>
          {children}
        <footer>
          <h3>Daniel Cosmo</h3>
          <h3>
            Contact me:
            <Link target="_blank" rel="noopener noreferrer" href="https://t.me/kuzminklk">Telegram</Link>
          </h3>
			</footer>
      </body>
    </html>
  );
}
