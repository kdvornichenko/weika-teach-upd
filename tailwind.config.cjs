const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {},
			colors: {
				cardBg: '#F5F5F5',
				main: '#263238',
				secondary: '#8F95A5',
				white: '#fff',
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant, e }) {
			addVariant('child(2)', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `.${e(`child(2)${separator}${className}`)}:nth-child(2)`
				})
			})
			addVariant('child(3)', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `.${e(`child(3)${separator}${className}`)}:nth-child(3)`
				})
			})
		}),
	],
}
