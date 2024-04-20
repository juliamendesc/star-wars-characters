/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx,ts}'],
	theme: {
		extend: {
			colors: {
				lightGray: '#9095A1',
			},
			fontFamily: {
				heading: 'Lexend',
				body: 'Manrope',
			},
			boxShadow: {
				xs: '0px 0px 1px rgba(23, 26, 31, 0.07), 0px 0px 2px rgba(23, 26, 31, 0.12)',
				s: '0px 2px 5px rgba(23, 26, 31, 0.09), 0px 0px 2px rgba(23, 26, 31, 0.12)',
				m: '0px 4px 9px rgba(23, 26, 31, 0.11), 0px 0px 2px rgba(23, 26, 31, 0.12)',
				l: '0px 8px 17px rgba(23, 26, 31, 0.15), 0px 0px 2px rgba(23, 26, 31, 0.12)',
				xl: '0px 17px 35px rgba(23, 26, 31, 0.24), 0px 0px 2px rgba(23, 26, 31, 0.12)',
			},
		},
	},
	plugins: [],
};
