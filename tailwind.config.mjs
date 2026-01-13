/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'medical-sage': '#8da8a3',   // Darker green from header card
				'medical-bg': '#e3e5d8',     // Main background beige/grey
				'medical-pink': '#eecbc5',   // Pink accent card
				'medical-dark': '#2d3748',   // Text color
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			}
		},
	},
	plugins: [],
}