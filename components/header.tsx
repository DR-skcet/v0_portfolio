"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, MenuIcon, XIcon, DownloadIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Experience", href: "#experience" },
	{ name: "Projects", href: "#projects" },
	{ name: "Certifications", href: "#certifications" },
	{ name: "Achievements", href: "#achievements" },
	{ name: "Contact", href: "#contact" },
]

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [activeSection, setActiveSection] = useState("home")
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			setIsScrolled(scrollPosition > 10)

			// Update active section based on scroll position
			const sections = navItems.map((item) => item.href.substring(1))
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section)
				if (element) {
					const rect = element.getBoundingClientRect()
					return rect.top <= 100 && rect.bottom >= 100
				}
				return false
			})

			if (currentSection) {
				setActiveSection(currentSection)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const handleNavClick = (href: string) => {
		setMobileMenuOpen(false)
		// Only delay scroll if mobile menu is open
		if (window.innerWidth < 1024) {
			setTimeout(() => {
				const element = document.querySelector(href)
				if (element) {
					element.scrollIntoView({ behavior: "smooth" })
				}
			}, 350)
		} else {
			const element = document.querySelector(href)
			if (element) {
				element.scrollIntoView({ behavior: "smooth" })
			}
		}
	}

	const downloadResume = () => {
		// Create a temporary link to download resume
		const link = document.createElement("a")
		link.href = "Durairaj_S_Resume.pdf" // You'll need to add your resume file to the public folder
		link.download = "Durairaj_S_Resume.pdf"
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	if (!mounted) {
		return null
	}

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className={cn(
				"fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out",
				isScrolled
					? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-gray-700/20 py-2"
					: "bg-transparent py-4",
			)}
		>
			<div className="container mx-auto px-4 flex justify-between items-center">
				<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
					<Link
						href="#home"
						className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 font-poppins"
						data-cursor-hover
					>
						Durairaj S
					</Link>
					<motion.div
						className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500"
						initial={{ width: 0 }}
						whileHover={{ width: "100%" }}
						transition={{ duration: 0.3 }}
					/>
				</motion.div>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex items-center space-x-1">
					{navItems.map((item, index) => (
						<motion.div
							key={item.name}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Link
								href={item.href}
								onClick={(e) => {
									e.preventDefault()
									handleNavClick(item.href)
								}}
								className={cn(
									"px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative overflow-hidden group",
									activeSection === item.href.substring(1)
										? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
										: "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800",
								)}
								data-cursor-hover
							>
								<span className="relative z-10">{item.name}</span>
								{activeSection === item.href.substring(1) && (
									<motion.div
										layoutId="activeSection"
										className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full"
										transition={{ type: "spring", stiffness: 380, damping: 30 }}
									/>
								)}
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100"
									initial={{ scale: 0 }}
									whileHover={{ scale: 1 }}
									transition={{ duration: 0.3 }}
								/>
							</Link>
						</motion.div>
					))}

					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						className="flex items-center space-x-2 ml-4"
					>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								variant="outline"
								size="sm"
								onClick={downloadResume}
								className="hidden md:flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 border-blue-200 dark:border-blue-800 group"
								data-cursor-hover
							>
								<DownloadIcon className="h-4 w-4 group-hover:animate-bounce" />
								Resume
							</Button>
						</motion.div>
					</motion.div>
				</nav>

				{/* Mobile Menu Button */}
				<div className="flex lg:hidden items-center space-x-2">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="rounded-full"
						data-cursor-hover
					>
						<motion.div animate={{ rotate: mobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
							{mobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
						</motion.div>
					</Button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.nav
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-700/20"
					>
						<div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
							{navItems.map((item, index) => (
								<motion.div
									key={item.name}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: index * 0.05 }}
								>
									<Link
										href={item.href}
										onClick={(e) => {
											e.preventDefault()
											handleNavClick(item.href)
										}}
										className={cn(
											"block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 group",
											activeSection === item.href.substring(1)
												? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
												: "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800",
										)}
										data-cursor-hover
									>
										<span className="flex items-center">
											<motion.div
												className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"
												initial={{ scale: 0 }}
												animate={{ scale: activeSection === item.href.substring(1) ? 1.2 : 1 }}
											/>
											{item.name}
										</span>
									</Link>
								</motion.div>
							))}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.4 }}
								className="pt-4 border-t border-gray-200 dark:border-gray-700"
							>
								<Button
									variant="outline"
									size="sm"
									onClick={downloadResume}
									className="w-full flex items-center justify-center gap-2 group"
									data-cursor-hover
								>
									<DownloadIcon className="h-4 w-4 group-hover:animate-bounce" />
									Download Resume
								</Button>
							</motion.div>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</motion.header>
	)
}
