

import Link from "next/link";

import styles from "./page.module.css";


export default function Home() {
  return (
		<main className={styles.connect}>
			<h2>
				<Link target="_blank" href="https://t.me/kuzminklk">Telegram</Link>
				<span className={styles.label}> — quick messaging, photos 📸, sports 💪</span>
			</h2>
			<h2>
				<Link target="_blank" href="https://www.instagram.com/kuzminklk/">Instagram</Link>
				<span className={styles.label}> — photos of me, of nature, of people</span>
			</h2>
			<h2>
				<Link target="_blank" href="https://github.com/kuzminklk">GitHub</Link>
				<span className={styles.label}> — projects</span>
			</h2>
		</main>
	)
}
