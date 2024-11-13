// pages/contact.js
"use client";
import { useState } from "react";
import { Link, Link as ScrollLink } from "react-scroll";

import Team from "../components/Team";
import ScrollButton from "../constants/ScrollButton";
import ContactUs from "../components/ContactUs";

const Contact = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			{/* Contact Us Section */}
			<ContactUs />

			{/* Scroll Button */}
			<ScrollButton />

			{/* Meet Our Team Section */}
			<section className="w-full h-full" name="team">
				<Team />
			</section>
		</div>
	);
};

export default Contact;
