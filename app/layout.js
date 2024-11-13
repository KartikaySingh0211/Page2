// app/layout.js
import NavBar from "./components/ui/NavBar";
import "./globals.css"; // Make sure this imports your Tailwind styles
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "SentinelGuardAI",
	description: "Page2",
};

export default function RootLayout({ children }) {
	return (
		<>
			{
				<html lang="en" className={inter.className}>
					<body>
						<NavBar />
						{children}
					</body>
				</html>
			}
		</>
	);
}
