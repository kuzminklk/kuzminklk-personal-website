

import Link from "next/link";
import Image from "next/image";

import { Emoji } from "./_components/Emoji";
import styles from "./page.module.css";

import Me from "@/public/me.jpg"


export default function About() {
  return (
    <main className={styles.about}>
      <section className={styles.greet}>
        <h1>
          <Emoji symbol="👋" label="Waving hand" size="3.125rem"/> Hi! I'm Daniel! 
        </h1>
        <Image src={Me} alt="Me in yellow jacket"></Image>
      </section>
      <section className={styles.about}>
        <p><strong>Computer-science engineer</strong> currently focused in Web3, Front-end and AI</p>
        <p>Also <Link href="/sports">I do sports<Emoji symbol="&nbsp;💪" label="Biceps"/></Link>, <Link href="/photography">take photos<Emoji symbol="&nbsp;📸" label="Shooting camera"/></Link> and <Link href="/books">read a lot of books<Emoji symbol="&nbsp;📚" label="Pack of books"/></Link> (from Dawkins to Noah Harari, from Tolstoy to Xunzi)!</p>
        <p>Speak three languages: English, Russian, Belarussian</p>
      </section>
    </main>
	)
}
