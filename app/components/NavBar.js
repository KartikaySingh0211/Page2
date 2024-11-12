// components/Header.js

import Link from "next/link";

export default function Header() {
	return (
		<header className="flex items-center justify-center py-8 px-8 bg-white">
			{/* Logo */}
			<div className="flex items-center space-x-2 absolute left-[3vw]">
				<Link href="/">Logo</Link>
				<Link href="/">SentinelGuardAI</Link>
			</div>

			{/* Navigation Links */}
			<nav className="flex space-x-6 items-center gap-3">
				<Link
					href="/"
					className="text-gray-700 hover:text-black hover:scale-105 transition-all"
				>
					Home
				</Link>
				<Link
					href="/services"
					className="text-gray-700 hover:text-black hover:scale-105 transition-all"
				>
					Services
				</Link>
				<Link
					href="/contact"
					className="text-gray-700 hover:text-black hover:scale-105 transition-all"
				>
					Contact
				</Link>
				<Link
					href="/apply"
					className="text-gray-700 hover:text-black hover:scale-105 transition-all"
				>
					Apply
				</Link>
			</nav>
		</header>
	);
}
