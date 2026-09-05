

"use client"


import Link from "next/link"
import Image from "next/image"

import styles from "./page.module.css"

import Me from "@/public/me.jpg"


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export default function About() {
  return (
    <main className={styles.about}>
      <section className={styles.greet}>
        <h1>
          <span className={styles.emoji}>👋</span> Hi! <em><br/>I'm Daniel!</em>
        </h1>
        <Image src={Me} alt="Me in yellow jacket" placeholder="blur"></Image>
      </section>
      <section className={styles.about}>
        <p>
          <strong>Computer-science engineer</strong> currently focused in Web3, Front-end and AI
        </p>
        <p>
          You may know me as <em>Daniel Cosmo</em>, <em>Даниил Кузьмин</em> or <em>kuzminklk</em>
        </p>
        <p>
          Also <Link href="/sports">I do sports<span className="emoji">💪</span></Link>, <Link href="/photography">take photos<span className="emoji">📸</span></Link> and <Link href="/books">read a lot of books<span className="emoji">📚</span></Link> (from Dawkins to Noah Harari, from Tolstoy to Xunzi)!
        </p>
        <p>
          Speak three languages: English, Russian, Belarussian
        </p>
        <br/>
        <p>
          <em>You can explore more of my activities in the sections of <a onClick={scrollToTop}>navigation menu<span className="emoji">🧭</span></a></em>
        </p>
      </section>
    </main>
	)
}
