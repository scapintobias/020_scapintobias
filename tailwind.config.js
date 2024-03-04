module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			'sm': '320px',
			// => @media (min-width: 640px) { ... }
			'p': '500px',
			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		fontSize: {
			'xs': '.75rem',
			'sm': '.875rem',
			'tiny': '.875rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
		},
		extend: {
			colors: {
				navy: '#0f172a', // Replace this with your desired color
			},
			fontFamily: {
				sans: ['Unica77 LL', 'sans-serif'],
				// serif: ['Cormorant', 'normal'],
				mono: ['Unica77 Mono LL', 'mono'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
