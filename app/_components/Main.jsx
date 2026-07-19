

import styles from "./Main.module.css";


export function Main({ children, className }) {
	return (
		<main className={`${styles.main} ${className}`}>
			{children}
		</main>
	)
}