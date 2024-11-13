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
					<div class="relative">
						<input
							type="email"
							placeholder="Your email"
							class="w-full pl-10 py-2 border border-gray-600 bg-[#d9d9d9] rounded-3xl focus:outline-none focus:border-gray-600"
						/>
						<span class="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
						</span>
					</div>
					<div class="relative">
						<div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-black">
							<select className="bg-inherit focus:outline-none">
								<option value="India">+91</option>
								<option value="USA">+1</option>
								<option value="UK">+44</option>
								<option value="Australia">+61</option>
								<option value="Canada">+1</option>
							</select>
						</div>
						<input
							type="tel"
							placeholder="Phone number"
							class="w-full pl-20 pr-4 py-2 border-gray-600 border bg-[#d9d9d9] rounded-3xl focus:outline-none focus:border-gray-600"
						/>
					</div>
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
