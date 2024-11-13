"use client";
import { useState } from "react";

function ContactUs() {
	const [message, setMessage] = useState("");
	const charLimit = 120;

	const handleTextChange = (e) => {
		const newText = e.target.value;
		if (newText.length <= charLimit) {
			setMessage(newText);
		}
	};

	return (
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
	);
}

export default ContactUs;
