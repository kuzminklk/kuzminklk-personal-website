

import { useLocation } from "react-router-dom";


export function Header() {

	const location = useLocation();

	return (
			<header>
				<h3>{location.pathname === "/" ? "kuzminklk" : location.pathname === "/photography" ? "kuzminklk/photography" : location.pathname === "/development" ? "kuzminklk/development" : location.pathname === "/socials" ? "kuzminklk/socials" : "kuzminklk"}</h3>
			</header>
	)
}