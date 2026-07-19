

import "./page.module.css";

import { Emoji } from "./_components/Emoji";
import styles from "./page.module.css";


export default function About() {
  return (
    <main className={styles.about}>
      <section className={styles.greet}>
        <h1>
          <Emoji symbol="👋" label="Waving hand" size="3.125rem"/> Hi! I'm Daniel! 
        </h1>
        <img src="./me.jpg"></img>
      </section>
      <section className={styles.about}>
        <p><strong>Computer-science engineer</strong> currently focused in Web3, Front-end and AI</p>
        <p>Also I do sports <Emoji symbol="💪" label="Biceps"/>, take photos <Emoji symbol="📸" label="Shooting camera"/> and read a lot of books <Emoji symbol="📚" label="Pack of books"/> (from Dawkins to Noah Harari, from Tolstoy to Xunzi)!</p>
        <p>Speak three languages: English, Russian, Belarussian</p>
      </section>
    </main>
	)
}
