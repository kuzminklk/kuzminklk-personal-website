

import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";

import Me from "@/public/me.jpg"


export default function About() {
  return (
    <main className={styles.about}>
      <section className={styles.greet}>
        <h1>
          👋 Hi! I'm Daniel! 
        </h1>
        <Image src={Me} alt="Me in yellow jacket" placeholder="blur"></Image>
      </section>
      <section className={styles.about}>
        <p><strong>Computer-science engineer</strong> currently focused in Web3, Front-end and AI</p>
        <p>Also <Link href="/sports">I do sports<span className="emoji">💪</span></Link>, <Link href="/photography">take photos<span className="emoji">📸</span></Link> and <Link href="/books">read a lot of books<span className="emoji">📚</span></Link> (from Dawkins to Noah Harari, from Tolstoy to Xunzi)!</p>
        <p>Speak three languages: English, Russian, Belarussian</p>
      </section>
    </main>
	)
}
