

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


function App() {

	return (
		<>
			<header>
				<h3>kuzminklk</h3>
			</header>
			<Routes>
				<Route path='/' element={
					<main class="home">
						<sextion>
							<h1>
								Design, Development (Web, AI, Blockchain), Photography,
								Writing
							</h1>
							<h2 id="languages">English, Русский</h2>
						</sextion>
					</main>
				}>
				</Route>

				<Route path='/photography' element={
					<main class="photography">
						<img src="img/girl-pink.jpg" />
						<img src="img/girl-brown.jpg" />
						<img src="img/spring.jpg" />
					</main>
				}>
				</Route>

				<Route path='/development' element={
					<main class="development">
						<section>
							<h2>Moby-Dick</h2>
							<p>Site, where you can read suck an intresting book</p>
							<img src="img/moby-dick.png" />
						</section>
					</main>
				}>
				</Route>

				<Route path='/socials' element={
					<main class="socials">
						<h2>
							<a target="_blank" href="https://www.instagram.com/kuzminklk/">Instagram</a><span class="label">
								— photos of me, of nature, of people</span>
						</h2>
						<h2>
							<a target="_blank" href="https://t.me/kuzminklk">Telegram</a><span class="label"> — contact me;
								photos</span>
						</h2>
						<h2>
							<a target="_blank" href="https://github.com/kuzminklk">GitHub</a><span class="label"> — projects</span>
						</h2>
					</main>
				}>

				</Route>

			</Routes>
			<footer>
				<h3><a href="/">Home</a></h3>
				<h3><a href="/photography">Photography</a></h3>
				<h3><a href="/development">Development</a></h3>
				<h3><a href="/socials">Socials</a></h3>
				<h3>©2025 Daniil Kuzmin</h3>
				<h3>
					Contact me:
					<a target="_blank" href="https://t.me/kuzminklk">Telegram</a>
				</h3>
			</footer>
		</>
	)
}

export default App
