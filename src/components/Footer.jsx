

import { useLocation } from "react-router-dom";


export function Footer() {

	const location = useLocation();

	return (
		<footer>
				<h3><a href="/">Home</a></h3>
				<h3><a href="/photography">Photography</a></h3>
				<h3><a href="/development">Development</a></h3>
				<h3><a href="/socials">Socials</a></h3>
				<h3>©2025 Daniil Kuzmin</h3>
				<h3>
					{location.pathname !== '/socials' && (
						<>
							Contact me:
							<a target="_blank" rel="noopener noreferrer" href="https://t.me/kuzminklk">Telegram</a>
						</>
					)}
				</h3>
			</footer>
	);
}