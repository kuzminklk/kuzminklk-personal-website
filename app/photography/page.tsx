

import Image from "next/image";

import { Main } from ".././_components/Main";
import styles from "./page.module.css";


export default function Home() {
  return (
		<Main className={styles.photography}>
			<img src="./girl-pink.jpg" />
			<img src="./girl-brown.jpg" />
			<img src="./spring.jpg" />
		</Main>
	)
}
