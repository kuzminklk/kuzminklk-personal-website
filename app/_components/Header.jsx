
"use client"

import { usePathname } from "next/navigation"


export function Header() {
	const path = usePathname();
	const formatedPath = path.replace(/\//g, "/ ") // Regular expression to replace all occurrences of "/" with "/ "

	return (
			<header>
				<h3>kuzminklk {path === "/" ? "" : formatedPath}</h3>
			</header>
	)
}