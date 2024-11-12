// pages/contact.js
"use client";
import { useState } from "react";
import { Link, Link as ScrollLink } from "react-scroll";

import Team from "../components/Team";

const Contact = () => {
	const [message, setMessage] = useState("");
	const charLimit = 120;

	// useEffect(() => {
	// 	// Animate cards with GSAP
	// 	gsap.to(cardsRef.current.children, {
	// 		xPercent: -100 * (cardsRef.current.children.length - 1),
	// 		ease: "none",
	// 		scrollTrigger: {
	// 			trigger: cardsRef.current,
	// 			pin: true,
	// 			scrub: 1,
	// 			snap: 1 / (cardsRef.current.children.length - 1),
	// 			end: () => "+=" + cardsRef.current.offsetWidth,
	// 		},
	// 	});
	// }, []);
	// Function to handle word limit
	const handleTextChange = (e) => {
		const newText = e.target.value;
		if (newText.length <= charLimit) {
			setMessage(newText);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			{/* Contact Us Section */}
			<section className="flex items-start justify-around w-full p-8 space-y-8">
				<div className="w-1/3 mt-[8vh]">
					<h1 className="text-5xl font-normal mb-12">Contact Us</h1>
					<p className="font-normal text-2xl mb-5">
						Email, call, or complete the form to learn how SentinelGuard AI can
						solve your problems.
					</p>
					<p className="font-normal text-2xl mb-4">sentinelguardai@gmail.com</p>
					<p className="font-normal text-2xl">+91 0123456789</p>
				</div>

				{/* Form */}
				<div className="w-full max-w-2xl p-6 bg-[#d9d9d9] rounded-3xl">
					<h2 className="mb-4 text-4xl">Get in Touch</h2>
					<p className="mb-4 text-lg">You can reach us anytime</p>
					<form className="space-y-4">
						<div className="flex space-x-4">
							<input
								type="text"
								placeholder="First name"
								className="w-1/2 p-2 border-gray-600 border bg-[#d9d9d9] rounded-3xl pl-5 focus:outline-none focus:border-gray-600"
							/>
							<input
								type="text"
								placeholder="Last name"
								className="w-1/2 p-2  border-gray-600 border bg-[#d9d9d9] rounded-3xl pl-5 focus:outline-none focus:border-gray-600"
							/>
						</div>
						<input
							type="email"
							placeholder="Your email"
							className="w-full p-2  border-gray-600 border bg-[#d9d9d9] rounded-3xl pl-5 focus:outline-none focus:border-gray-600"
						/>
						<input
							type="text"
							placeholder="Phone number"
							className="w-full p-2 border-gray-600 border bg-[#d9d9d9] rounded-3xl pl-5 focus:outline-none focus:border-gray-600"
						/>
						<div className="relative">
							<textarea
								value={message}
								onChange={handleTextChange}
								placeholder="How can we help?"
								className="w-full p-2  border-gray-600 border bg-[#d9d9d9] rounded-3xl pl-5 focus:outline-none focus:border-gray-600"
								rows="4"
								cols="50"
							></textarea>
							<p className="text-sm text-gray-500 absolute z-10 right-[1vw] bottom-[1vw]">
								{message.length}/{charLimit} words
							</p>
						</div>
						<button
							type="submit"
							className="w-full p-2 text-white bg-blue-500 rounded-3xl"
						>
							Submit
						</button>
					</form>
				</div>
			</section>
			<div className="h-16 w-16 mb-10 mt-4">
				<Link
					to="team"
					spy={true}
					smooth={true}
					duration={300}
					offset={0}
					className=" cursor-pointer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
						<circle cx="50" cy="50" r="50" fill="#d9d9d9" />
						<path
							d="M50 25 L50 65 M35 50 L50 65 L65 50"
							stroke="black"
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round"
							fill="none"
						/>
					</svg>
				</Link>
			</div>

			{/* Meet Our Team Section */}
			<div className="w-full h-full" name="team">
				<Team />
			</div>
		</div>
	);
};

export default Contact;
