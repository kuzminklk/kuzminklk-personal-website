

import Image from "next/image";

import styles from "./page.module.css";


export default function Home() {
  return (
		<main className={styles.photography}>
			<img src="./girl-pink.jpg" />
			<img src="./girl-brown.jpg" />
			<img src="./spring.jpg" />
		</main>
	)
}
