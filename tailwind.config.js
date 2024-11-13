/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				card: "hsl(var(--card))",
				"card-foreground": "hsl(var(--card-foreground))",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"], // Use Inter as the default sans-serif font
			},
		},
	},
	plugins: [],
};
