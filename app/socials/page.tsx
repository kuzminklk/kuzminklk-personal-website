

import Link from "next/link";


export default function Home() {
  return (
		<main className="socials">
			<h2>
				<Link target="_blank" href="https://www.instagram.com/kuzminklk/">Instagram</Link><span className="label">
					— photos of me, of nature, of people</span>
			</h2>
			<h2>
				<Link target="_blank" href="https://t.me/kuzminklk">Telegram</Link><span className="label"> — contact me;
					photos</span>
			</h2>
			<h2>
				<Link target="_blank" href="https://github.com/kuzminklk">GitHub</Link><span className="label"> — projects</span>
			</h2>
		</main>
	)
}
