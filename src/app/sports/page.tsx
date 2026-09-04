

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
			</section>
			<h1><span className={styles.emoji}>🎯</span> Activities</h1>
			<section>
			</section>
		</main>
	)
}