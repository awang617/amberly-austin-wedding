/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		screens: {
			'xs': '353px', 
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1408px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				'windsong': ['"WindSong"', "cursive"],
				'alegreya': ['"Alegreya Sans SC"', "sans-serif"],
				'abhaya': ['"Abhaya Libre"', "serif"],

			},
			textIndent: {
				'hanging-6': '-1.5rem',
				'hanging-7': '-1.75rem',
				'hanging-8': '-2rem',
			},
			colors: {
				'sage' : {
					100: '#d8f2d3',
					300: '#9cc295',
				}
			},
			height: {
				'screen25': '25vh',
			}
		},
	},
	plugins: [],
}
