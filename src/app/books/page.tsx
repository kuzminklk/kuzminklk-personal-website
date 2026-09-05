

import Link from "next/link"

import styles from "./page.module.css"


export default function Books() {
	return (
		<main className={styles.books}>
			<section className={styles.introduction}>
				<h2>📖 Introduction</h2>
				<p>
					I read a lot of books!
				</p>
				<p>
					I've created <Link href="https://kuzminklk.notion.site/31154d4de0358084adcdf9aca595fa2f?v=31154d4de035802ca521000ca4f6f8f9">database in Notion of books that I've read</Link>. There are some summaries, etc. 📑
				</p>
				<p>
					<em>Also you can check it right down!</em>
				</p>
			</section>
			<h1><span className={styles.emoji}>📕</span> Database of Books</h1>
			<section className={styles.database}>
				<iframe src="https://kuzminklk.notion.site/ebd//31154d4de0358084adcdf9aca595fa2f?v=31154d4de035802ca521000ca4f6f8f9" width="100%" height="600" frameBorder="0" allowFullScreen />
			</section>
		</main>
	)
}