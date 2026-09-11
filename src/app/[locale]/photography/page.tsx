

import Image from "next/image"
import Link from "next/link"

import styles from "./page.module.css"
import pinkGril from "@/public/girl-pink.jpg"
import asyaFall from "@/public/asya-fall.jpg"
import springFlowers from "@/public/spring.jpg"
import dashaNight from "@/public/dasha-night.jpg"
import flowers from "@/public/flowers.jpg"
import dasha from "@/public/dasha.jpg"
import vova from "@/public/vova.jpg"
import misha from "@/public/misha.jpg"
import nastya from "@/public/nastya.jpg"
import asya from "@/public/asya.jpg"


const photos = [
	{ src: asya, alt: "Asya in the forest", orientation: "portrait" },
	{ src: springFlowers, alt: "Spring flowers", orientation: "landscape" },
	{ src: pinkGril, alt: "Girl in pink clothes", orientation: "portrait" },
	{ src: asyaFall, alt: "Asya in fall", orientation: "portrait" },
	{ src: vova, alt: "Vova in the forest", orientation: "portrait" },
	{ src: flowers, alt: "Flowers", orientation: "landscape" },
	{ src: dasha, alt: "Sexy girl", orientation: "portrait" },
	{ src: dashaNight, alt: "Dasha at night", orientation: "portrait" },
	{ src: misha, alt: "Misha with guitar", orientation: "portrait" },
	{ src: nastya, alt: "Sexy girl", orientation: "portrait" },
]


export default function Home() {
  return (
		<main className={styles.photography}>
			<section className={styles.introduction}>
				<h2>🎨 Introduction</h2>
				<p>
					I take photos of nature 🌿 and of people 🧘🏻 <em>(usually my friends)</em>
				</p>
				<p>	
					Upload at <Link href="https://unsplash.com/@kuzminklk" target="_blank" rel="noopener noreferrer">Unsplash</Link> <em>(there you can use my photos for free for any project)</em> and in my <Link href="https://t.me/kuzminklkk" target="_blank" rel="noopener noreferrer">Telegram-channel</Link>
				</p>
			</section>
			<h1><span className={styles.emoji}>🖼️</span> Gallery</h1>
			<section className={styles.gallery}>
				{ photos.map((photo) => {
					return (
						<Image key={photo.src.src} src={photo.src} alt={photo.alt} className={photo.orientation === "portrait" ? styles.portrait : styles.landscape} placeholder="blur" /* sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" *//>
					)
				})}
				<p><em>More of my photos you can find at <Link href="https://unsplash.com/@kuzminklk" target="_blank" rel="noopener noreferrer">Unsplash</Link> and in my <Link href="https://t.me/kuzminklkk" target="_blank" rel="noopener noreferrer">Telegram-channel</Link>!</em></p>
			</section>
		</main>
	)
}
