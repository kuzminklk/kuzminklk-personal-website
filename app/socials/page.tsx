

import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
		<main className="socials">
			<h2>
				<a target="_blank" href="https://www.instagram.com/kuzminklk/">Instagram</a><span className="label">
					— photos of me, of nature, of people</span>
			</h2>
			<h2>
				<a target="_blank" href="https://t.me/kuzminklk">Telegram</a><span className="label"> — contact me;
					photos</span>
			</h2>
			<h2>
				<a target="_blank" href="https://github.com/kuzminklk">GitHub</a><span className="label"> — projects</span>
			</h2>
		</main>
	)
}
