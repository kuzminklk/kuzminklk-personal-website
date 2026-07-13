
import Link from "next/link";


export function Footer() {
	return (
		<footer>
				<h3><Link href="/">Home</Link></h3>
				<h3><Link href="/photography">Photography</Link></h3>
				<h3><Link href="/development">Development</Link></h3>
				<h3><Link href="/socials">Socials</Link></h3>
				<h3>©2025 Daniil Kuzmin</h3>
				<h3>
					Contact me:
					<Link target="_blank" rel="noopener noreferrer" href="https://t.me/kuzminklk">Telegram</Link>
				</h3>
			</footer>
	);
}