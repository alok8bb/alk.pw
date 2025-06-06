"use client";

import React from "react";
import { motion } from "motion/react"
import { Github, Send, Linkedin, Mail, Twitter } from "lucide-react";
import Navbar from "./components/Navbar";
import AnimatedText from "./components/AnimatedText";
import Card from "./components/Card";
import projectsData from "./data/projects.json";
import { ExperienceEntry } from "./components/ExperienceEntry";

export default function Component() {
	return (
		<div className="min-h-screen bg-black text-gray-200 relative overflow-hidden ">
			<div className="fixed inset-0 overflow-hidden">
				<div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
				<div className="absolute top-3/4 left-1/2 w-1/2 h-1/2 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
				<div className="absolute -top-1/4 left-1/2 w-1/2 h-1/2 bg-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
			</div>

			<div className="max-w-5xl mx-auto px-4 py-8 relative z-10">
				<Navbar />

				<main className="text-lg sm:text-xl">
					<motion.section
						id="home"
						className="mb-20 flex flex-col sm:flex-row items-center gap-10 mt-20"
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.03 }}
					>
						<motion.div
							className="w-24 h-24 flex-shrink-0 relative group sm:hidden mb-4"
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.06 }}
						>
							<img
								src="https://i.imgur.com/SZ360h1.png"
								alt="Profile Picture"
								className="w-full h-full rounded-full object-cover relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
							/>
						</motion.div>
						<motion.div
							className="flex-1"
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.09 }}
						>
							<AnimatedText />
							<motion.div
								className="glitch-wrapper mb-10"
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, delay: 0.12 }}
							>
								<p
									className="text-xl sm:text-2xl text-gray-400 glitch layers text-center sm:text-left"
									data-text="programmer | web & web3"
								>
									<span>Welcome to my personal website!</span>
								</p>
							</motion.div>
							<motion.p
								id="about"
								className="mb-8 text-center sm:text-left leading-relaxed"
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, delay: 0.15 }}
							>
								I'm a 20-year-old CS Student based in India. My primary focus is
								on <b>TypeScript, Rust, and Python</b> with past experience in
								Android app development. <br />
								Currently, I'm learning and building on <b>Solana & EVM</b>. I
								have experience building, deploying, and managing websites,
								bots, apps, and services. <br />
								Looking forward to new opportunities and collaborations!
							</motion.p>
						</motion.div>
						<motion.div
							className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 self-center relative group hidden sm:block"
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.18 }}
						>
							<img
								src="https://i.imgur.com/SZ360h1.png"
								alt="Profile Picture"
								className="w-full h-full rounded-full object-cover relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
							/>
						</motion.div>
					</motion.section>

					<motion.section id="recent-writings" className="mb-20" initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.21 }}>
						<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
							<h2 className="text-3xl font-semibold mb-3 sm:mb-0">
								Recent Writings
							</h2>
							<a
								href="https://blog.alk.pw"
								target="_blank"
								rel="noopener noreferrer"
								className="text-base text-gray-400 hover:text-white hover:underline"
							>
								Explore all
							</a>
						</div>
						<div className="grid sm:grid-cols-2 gap-8">
							<a
								href="https://blog.alk.pw/blog/actions-and-blinks-on-solana/"
								target="_blank"
								rel="noopener noreferrer"
								className="block h-full"
							>
								<Card
									key={1}
									title="Actions & Blinks on Solana"
									date="13 Sep 2024"
									description="A quick overview of Solana's Actions and Blinks and how they're changing the game."
								/>
							</a>
							<a
								href="https://blog.alk.pw/blog/lessons-from-hack/"
								target="_blank"
								rel="noopener noreferrer"
								className="block h-full"
							>
								<Card
									key={2}
									title="Lessons from a Hack: Securing Systems"
									date="04 Jun 2024"
									description="Why you should always double-check your SSH and firewall settings to avoid a security nightmare."
								/>
							</a>
						</div>
					</motion.section>

					<motion.section id="projects" className="mb-20" initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.24 }}>
						<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
							<h2 className="text-3xl font-semibold mb-3 sm:mb-0">Projects</h2>
							<a
								href="https://github.com/alok8bb/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-base text-gray-400 hover:text-white hover:underline"
							>
								View all
							</a>
						</div>
						<div className="grid sm:grid-cols-2 gap-8">
							{projectsData.map((project, index) => (
								<Card
									key={index}
									title={project.title}
									description={project.description}
									tags={project.tags}
									liveDemo={project.liveDemo}
									source={project.source}
								/>
							))}
						</div>
					</motion.section>

					<motion.section id="experience" className="mb-20" initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.27 }}>
						<h2 className="text-3xl font-semibold mb-8">Experience</h2>
						<div className="space-y-6 relative">
							{/* Vertical Line */}
							<div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700"></div>

							<ExperienceEntry title="Developer, Paystream Finance" duration="Mar 2025 - Current" />
							<ExperienceEntry title="Web Developer, 株式会社HumAIn" duration="Oct 2024 - Feb 2025" />
							<ExperienceEntry title="Blockchain & Bot Developer, Freelance" duration="2023-2024" description={
								<div>
									<ul className="list-none">
										<li className="relative pl-4 before:content-['-'] before:absolute before:left-0">Created an online gaming DApp and other decentralized applications for gaming tokens</li>
										<li className="relative pl-4 before:content-['-'] before:absolute before:left-0">Developed various Telegram bots (gaming, token-gated, group-management) and utility bots like <a href="https://dexscreener.com/ethereum/0xdc7d16b1e7c54f35a67af95d5a6eecaec27b2a62"
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-400 hover:underline" >$PULSE AI</a>, that surpassed $1M in total market cap</li>
									</ul>
								</div>
							} />
							<ExperienceEntry title="Web Developer, Freelance" duration="2022-2023" description={"Created and deployed websites for clients, focusing on responsive design and optimal user experience"} />
							<ExperienceEntry title="Mobile Developer, Freelance" duration="2021-2022" description={"Built various mobile apps using Kotlin and Android SDK with video streaming, chat, calling, etc. features for small startups"}
							/>
						</div>
					</motion.section>

					<motion.section id="contacts" className="mb-20" initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.30 }}>
						<h2 className="text-3xl font-semibold mb-8">Contacts</h2>
						<p className="mb-8 text-left">
							Feel free to drop me an email or a message on Telegram. Always
							open to interesting conversations and collaborations!
						</p>
						<div className="flex justify-start space-x-8">
							<a
								href="https://github.com/alok8bb"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Github size={28} />
							</a>
							<a
								href="mailto:alok8bb@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Mail size={28} />
							</a>
							<a
								href="https://twitter.com/alok8bb"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Twitter size={28} />
							</a>
						</div>
					</motion.section>
				</main>
			</div>
		</div>
	);
}
