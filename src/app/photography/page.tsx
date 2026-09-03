

import Image from "next/image"
import Link from "next/link"

import styles from "./page.module.css"
import PinkGril from "@/public/girl-pink.jpg"
import BrownGirl from "@/public/girl-brown.jpg"
import SpringFlowers from "@/public/spring.jpg"


export default function Home() {
  return (
		<main className={styles.photography}>
			<section>
				<h2>🖼️ Introduction</h2>
				<p>
					I take photos of nature and of people (usually my friends)
				</p>
				<p>	
					Upload at <Link href="https://unsplash.com/@kuzminklk" target="_blank" rel="noopener noreferrer">Unsplash</Link> and in my <Link href="https://t.me/kuzminklkk" target="_blank" rel="noopener noreferrer">Telegram-channel</Link>
				</p>
			</section>
			<section>
				<Image src={PinkGril} alt="Girl in pink clothes" placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
				<Image src={BrownGirl} alt="Girl in forest during authumn" placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
				<Image src={SpringFlowers} alt="Spring flowers" placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
			</section>
		</main>
	)
}
