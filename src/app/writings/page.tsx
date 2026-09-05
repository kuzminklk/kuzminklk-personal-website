

import Link from "next/link"

import styles from "./page.module.css"


export default function Books() {
	return (
		<main className={styles.writings}>
			<section className={styles.introduction}>
				<h2>✒️ Introduction</h2>
				<p>I write some articles on edges of physics, biology, philospophy, and mathematics… </p>
			</section>
		</main>
	)
}