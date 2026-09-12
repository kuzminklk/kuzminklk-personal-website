

import { Link } from "@/i18n/naviagation"
import styles from "./page.module.css";


export default function Home() {
  return (
		<main className={styles.connect}>
			<section>
				<p>
					<Link target="_blank" href="https://t.me/kuzminklk">Telegram</Link> & <Link target="_blank" href="https://t.me/kuzminklkk">Telegram Channel</Link> — quick messaging, photos 📸, sports 💪, social activities 🥰
				</p>
				<p>
					<Link target="_blank" href="https://www.tiktok.com/@kuzminklk">Tik-Tok</Link> & <Link target="_blank" href="https://www.instagram.com/kuzminklk/">Instagram</Link> — sports 🏃🏻
				</p>
				<p>
					<Link target="_blank" href="https://github.com/kuzminklk">GitHub</Link> — projects, skills, workbooks, code… 🧑🏻‍💻
				</p>
				<p><Link href="https://unsplash.com/@kuzminklk" target="_blank" rel="noopener noreferrer">Unsplash</Link> — photos 📸</p>
			</section>
		</main>
	)
}
