// components/Header.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { navLinks } from "../../constants";

export default function Header() {
	const [active, setActive] = useState("");
	return (
		<header className="flex items-center justify-center py-8 px-8 bg-white">
			{/* Logo */}
			<div className="flex items-center space-x-2 absolute left-[3vw]">
				<Link href="/">Logo</Link>
				<Link href="/">SentinelGuardAI</Link>
			</div>

			{/* Navigation Links */}
			<nav>
				<ul className="list-none hidden sm:flex flex-row space-x-6 items-center gap-3">
					{navLinks.map((link, index) => (
						<Link key={index} href={link.href}>
							<li
								className={`${
									active === link.text
										? "text-black font-semibold scale-105"
										: "text-gray-700"
								} hover:text-black hover:scale-105 transition-all`}
								onClick={() => setActive(link.text)}
							>
								{link.text}
							</li>
						</Link>
					))}
				</ul>
			</nav>
		</header>
	);
}
// text-gray-700 hover:text-black hover:scale-105 transition-all
