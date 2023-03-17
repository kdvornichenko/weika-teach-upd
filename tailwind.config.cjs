/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {},
			colors: {
				main: '#263238',
				secondary: '#8F95A5',
				white: '#fff',
			},
		},
	},
	plugins: [],
}
