"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Team() {
	const cardsRef = useRef(null);
	return (
		<section className="w-full p-8 bg-gray-200">
			<h2 className="text-3xl font-semibold text-center mb-6">Meet our team</h2>
			<p className="text-center mb-8">
				Our philosophy is simple, be great people and help great people by
				providing them the best resources.
			</p>

			{/* Horizontal Scrollable Cards
				<div
					ref={cardsRef}
					className="flex space-x-4 overflow-hidden w-full"
					style={{ width: "100vw", overflowX: "auto", whiteSpace: "nowrap" }}
				>
					{[1, 2, 3, 4, 5].map((_, index) => (
						<div
							key={index}
							className="inline-block flex-shrink-0 w-64 h-80 p-4 bg-white rounded-lg shadow-lg"
						>
							<div className="flex items-center justify-center h-full">
								<div className="text-center">
									<div className="w-24 h-24 mb-4 bg-gray-300 rounded-full"></div>
									<p>First Last name</p>
									<p className="text-gray-500">Company role</p>
								</div>
							</div>
						</div>
					))}
				</div> */}
		</section>
	);
}

export default Team;
