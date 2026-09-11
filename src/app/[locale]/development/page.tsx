

import Image from "next/image"
import Link from "next/link"

import styles from "./page.module.css"
import mobyDick from "@/public/moby-dick.png"
import strawberryVendor from "@/public/strawberry-vendor.png"
import tsender from "@/public/tsender.png"
import buyMeACoffee from "@/public/buy-me-a-coffee.png"


export default function Home() {
  return (
		<main className={styles.development}>
			<h2>👨🏻‍💻 Introduction</h2>
			<section>
				<p>
					I study computer-science and science in general for few years by myself. I learn from AIs, courses, books, curriculums, documentations…
				</p>
				<p>
					I've built <Link href="https://kuzminklk.notion.site/31154d4de03580d7b5ceca5b187846be" target="blank" rel="noopener noreferrer">cool study structure in Notion<span className="emoji">📔</span></Link> which includes curriculum, study materials, workbooks, etc
				</p>
				<p>
					I develop web interfaces, applications, smart-contracts 
				</p>
				<p>
					You could explore my <Link href="https://github.com/kuzminklk" target="blank" rel="noopener noreferrer">GitHub<span className="emoji">👀</span></Link>
				</p>
			</section>
			<h2>🧰 Skills</h2>
			<section>
				<ul>
					<li><strong>Fundamentals:</strong> C, Operational Systems (Windows, Linux, Android), Algorithms, Data Structures, Web (IP/TCP, HTTPS), Hardware</li>
					<li><strong>Front-end:</strong> HTML, CSS, JavaScript → React, TypeScript, Tailwind, Next.js, Playwright</li>
					<li><strong>Back-end:</strong> Python → Django, JavaScript → Node.js, Express → Next.js</li>
					<li><strong>Blockchain:</strong> Solidity, Foundry, Hardhat</li>
					<li><strong>Web-3 Front-end:</strong> viem, wagmi, ethers.js, RaibowKit</li>
					<li><strong>Tools:</strong> Docker, Git, GitHub, Notion, VS Code</li>
					<li><strong>AI:</strong> LLMs (Gemini, ChatGPT, DeepSeek, Claude), Codex, Claude Code, GitHub Copilot</li>
					<li><strong>Soft-skills:</strong> Communication, Discipline, Education, Health and Activity, Information Diving</li>
					<li><em><strong>Additional:</strong> Design → Photos, Web-design, Drawing Music → Guitar Sports → Wrestling Writing → Poetry, Philosophy essays</em></li>
				</ul>
			</section>
			<h1><span className={styles.emoji}>💾</span> Projects</h1>
			<p>
				<em>All the projects you can explore in my <Link href="https://github.com/kuzminklk" target="blank" rel="noopener noreferrer">GitHub<span className="emoji">👀</span></Link>, here are the favorite ones!</em>
			</p>
			<section>
				<h2>💻 Web Interfaces</h2>
				<div className={styles.grid}>
					<section>
						<Link href="https://github.com/kuzminklk/erc-20" target="blank" rel="noopener noreferrer">
							<h3>Strawberry Vendor</h3>
						</Link>
						<p>Vendor for Strawberry token (ERC-20). Fully works in Ethereum Sepolia</p>
						<Link href="https://strawberry-vendor.vercel.app/" target="blank" rel="noopener noreferrer">
							<Image src={strawberryVendor} placeholder="blur" alt="Strawberry vendor website screenshot"/>
						</Link>
					</section>
					<section>
						<Link href="https://github.com/kuzminklk/buy-me-a-coffee" target="blank" rel="noopener noreferrer">
							<h3>Buy me a coffee!</h3>
						</Link>
						<p>Donation interface.  Fully works in Ethereum Sepolia</p>
						<Link href="https://buy-me-a-coffee-pixelated.vercel.app/" target="blank" rel="noopener noreferrer">
							<Image src={buyMeACoffee} placeholder="blur" alt="Buy me a coffe donation website screenshot"/>
						</Link>
					</section>
					<section>
						<Link href="https://github.com/kuzminklk/moby-dick" target="blank" rel="noopener noreferrer">
							<h3>Moby-Dick</h3>
						</Link>
						<p>Site, where you can read such an intresting book</p>
						<Link href="https://moby-dick-pi.vercel.app/" target="blank" rel="noopener noreferrer">
							<Image src={mobyDick} placeholder="blur" alt="Moby-Dick web-book screenshot"/>
						</Link>
					</section>
					<section>
						<Link href="https://github.com/kuzminklk/tsender" target="blank" rel="noopener noreferrer">
							<h3>Tsender</h3>
						</Link>
						<p>User interface for efficient airdrop sender smart-contract</p>
						<Link href="https://tsender-taupe.vercel.app/" target="blank" rel="noopener noreferrer">
							<Image src={tsender} placeholder="blur" alt="Tsender website screenshot"/>
						</Link>
					</section>
				</div>
			</section>
		</main>
	)
}
