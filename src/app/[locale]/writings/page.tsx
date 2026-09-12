

import { Link } from "@/i18n/naviagation"
import styles from "./page.module.css"


export default function Books() {
	return (
		<main className={styles.writings}>
			<section className={styles.introduction}>
				<h2>✒️ Introduction</h2>
				<p>
					I write some articles on edges of physics, biology, philospophy, and mathematics… 👨🏻‍🔬
				</p>
				<p>
					You can find them at <Link href="https://kuzminklk.notion.site/31e54d4de03580fda758ff9cd469a547?v=31e54d4de035806b95ac000c27c46c11&source=copy_link">database in Notion<span className="emoji">📝</span></Link>
				</p>
				<p>
					<em>Also you can check it right down!</em>
				</p>
			</section>
			<h1><span className={styles.emoji}>✍🏻</span> Essays</h1>
			<section className={styles.database}>
				<iframe src="https://kuzminklk.notion.site/ebd//31e54d4de03580fda758ff9cd469a547?v=31e54d4de035806b95ac000c27c46c11" width="100%" height="600" frameBorder="0" allowFullScreen />
			</section>
		</main>
	)
}