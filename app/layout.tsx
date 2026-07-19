

// — Imports —

// Next.js
import type { Metadata } from "next";
import Link from "next/link";

// Local
import "./globals.css";
import { amstelvar } from "./_fonts/amstelvar";
import { Emoji } from "./_components/Emoji";


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
        <header>
          <h3>kuzminklk</h3>
          <nav>
            <h3><Link href="/">About<Emoji symbol="&nbsp;🧑‍🚀" label="Astronaut" /></Link></h3>
            <h3><Link href="/development">Development<Emoji symbol="&nbsp;💻" label="Computer"/></Link></h3>
            <h3><Link href="/photography">Photography<Emoji symbol="&nbsp;📸" label="Camera"/></Link></h3>
            <h3><Link href="/sports">Sports<Emoji symbol="&nbsp;💪" label="Biceps"/></Link></h3>
            <h3><Link href="/books">Books<Emoji symbol="&nbsp;📚" label="Pack of books"/></Link></h3>
            <h3><Link href="/writings">Writings<Emoji symbol="&nbsp;📒" label="Notebook"/></Link></h3>
            <h3><Link href="/connect">Connect<Emoji symbol="&nbsp;🤝" label="Handshake"/></Link></h3>
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
