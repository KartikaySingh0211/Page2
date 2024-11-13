import { Link } from "react-scroll";

function ScrollButton() {
	return (
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
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
						fill="none"
					/>
				</svg>
			</Link>
		</div>
	);
}

export default ScrollButton;
