

import Link from "next/link"

import styles from "./Footer.module.css"


export function Footer() {
	return (
		<footer className={styles.primary}>
			<h3><em>Made by Daniel Cosmo</em></h3>
			<h3><Link target="_blank" rel="noopener noreferrer"  href="https://github.com/kuzminklk/personal-website">Source code at GitHub</Link></h3>
			<h3>
				Contact me:
				<Link target="_blank" rel="noopener noreferrer" href="https://t.me/kuzminklk">Telegram</Link>
			</h3>
		</footer>
	)
}