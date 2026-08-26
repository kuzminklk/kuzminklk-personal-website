

import Image from "next/image";

import styles from "./page.module.css";
import PinkGril from "@/public/girl-pink.jpg";
import BrownGirl from "@/public/girl-brown.jpg";
import SpringFlowers from "@/public/spring.jpg"


export default function Home() {
  return (
		<main className={styles.photography}>
			<Image src={PinkGril} alt="Girl in pink clothes" placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
			<Image src={BrownGirl} alt="Girl in forest during authumn" placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
			<Image src={SpringFlowers} alt="Spring flowers" placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
		</main>
	)
}
