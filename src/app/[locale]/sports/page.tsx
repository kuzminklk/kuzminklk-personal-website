

import { Link } from "@/i18n/naviagation"
import styles from "./page.module.css"


export default function Sports() {
	return (
		<main className={styles.sports}>
			<section className={styles.introduction}>
				<h2>💪🏻 Introduction</h2>
				<p>
					Usually I workout outside in sports grounds with bodyweight exercises and in forests with stones and logs… 🌲
				</p>
				<p>
					I do body hardering via cold showers and swimming in cold water even in winter 🧊
				</p>
				<p>
					I play voleyball, wrestle, swim, run, dive into water, stretch… 🏃🏻
				</p>
				<p>
					Record videos of my workouts and share them in my <Link href="https://www.tiktok.com/@kuzminklk" target="_blank" rel="noopener noreferrer">Tik-Tok</Link>, <Link href="https://t.me/kuzminklk" target="_blank" rel="noopener noreferrer">Telegram</Link>, <Link href="https://www.instagram.com/kuzminklk/" target="_blank" rel="noopener noreferrer">Instagram</Link> and <Link href="https://www.youtube.com/@kuzminklk" target="_blank" rel="noopener noreferrer">YouTube<span className="emoji">🎥</span></Link>
				</p>
			</section>
			<h1><span className={styles.emoji}>🎯</span> Activities</h1>
			<section className={styles.activities}>
				<video src="sports/stone.mp4" autoPlay loop muted></video>
				<video src="sports/boxing.mp4" autoPlay loop muted></video>
				<video src="sports/push-ups.mp4" autoPlay loop muted></video>
				<video src="sports/pull-ups.mp4" autoPlay loop muted></video>
				<video src="sports/power-lift.mp4" autoPlay loop muted></video>
				<p><em>More you can find at my <Link href="https://www.tiktok.com/@kuzminklk" target="_blank" rel="noopener noreferrer">Tik-Tok</Link></em></p>
			</section>
		</main>
	)
}