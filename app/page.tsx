

import "./page.module.css";

import { Main } from "./_components/Main";
import styles from "./page.module.css";


export default function Home() {
  return (
    <Main className={styles.home}>
      <section>
        <h1>
          Design, Development (Web, AI, Blockchain), Photography,
          Writing
        </h1>
        <h2 id="languages">English, Русский</h2>
      </section>
    </Main>
	)
}
