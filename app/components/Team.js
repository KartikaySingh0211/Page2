"use client";
import React, { useRef } from "react";
import { cards } from "../constants/index";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProfileCard from "./ui/ProfileCard";

function Team() {
	const scrollContainerRef = useRef(null);

	const scroll = (direction) => {
		const container = scrollContainerRef.current;
		if (!container) return;

		const scrollAmount = 300;
		const targetScroll =
			container.scrollLeft +
			(direction === "left" ? -scrollAmount : scrollAmount);

		container.scrollTo({
			left: targetScroll,
			behavior: "smooth",
		});
	};

	return (
		<section className="w-full h-[120vh] p-8 bg-gray-200">
			<div className="flex flex-col items-center">
				<h2 className="text-4xl font-semibold text-center mb-8">
					Meet our team
				</h2>
				<p className="text-center text-xl mb-20 w-[500px]">
					Our philosophy is simple, be great people and help great people by
					providing them the best resources.
				</p>
			</div>

			<div className="relative w-full mx-auto p-4">
				{/* Navigation buttons */}
				<button
					onClick={() => scroll("left")}
					className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
					aria-label="Scroll left"
				>
					<ChevronLeft className="w-6 h-6" />
				</button>

				<button
					onClick={() => scroll("right")}
					className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
					aria-label="Scroll right"
				>
					<ChevronRight className="w-6 h-6" />
				</button>

				{/* Cards container */}
				<div
					ref={scrollContainerRef}
					className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-pl-6 scroll-pr-6"
					style={{
						scrollbarWidth: "none",
						msOverflowStyle: "none",
					}}
				>
					<div className="flex gap-12 p-4">
						{cards.map((card) => (
							<ProfileCard
								key={card.id}
								firstName={card.firstname}
								lastName={card.lastname}
								role={card.role}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Team;
