

"use client"


import Link from "next/link"
import { usePathname } from "next/navigation";

import styles from "./Header.module.css"


const navigation = [
	{ name: "About", href: "/about", emoji: "🧑‍🚀" },
	{ name: "Development", href: "/development", emoji: "💻" },
	{ name: "Photography", href: "/photography", emoji: "📸" },
	{ name: "Sports", href: "/sports", emoji: "💪" },
	{ name: "Books", href: "/books", emoji: "📚" },
	{ name: "Writings", href: "/writings", emoji: "📒" },
	{ name: "Connect", href: "/connect", emoji: "🤝" },
]

export function Header() {
	const pathname = usePathname()

	return (
		<header className={styles.primary}>
			<h3>kuzminklk</h3>
			<nav>
				{ navigation.map((item) => {
					const isActive = pathname === item.href
					return (
						<h3 key={item.name} className={isActive ? styles.active : ""}>
							<Link href={item.href}>{item.name}<span className="emoji">{item.emoji}</span></Link>
						</h3>
					)
				})}
			</nav>
		</header>
	)
}