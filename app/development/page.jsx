

import Image from "next/image";

import { Main } from ".././_components/Main";
import styles from "./page.module.css";


export default function Home() {
  return (
		<Main className={styles.development}>
			<section>
				<h2>Moby-Dick</h2>
				<p>Site, where you can read such an intresting book</p>
				<img src="./moby-dick.png" />
			</section>
		</Main>
	)
}
