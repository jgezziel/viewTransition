/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': '576px',
			'md': '768px',
			'lg': '992px',
			'xl': '1200px',
			'xxl': '1400px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2.25rem',
				md: '3rem',
				lg: '2rem',
				xl: '3.75rem',
				'xxl': '5rem',
			},
		},
		extend: {
			maxWidth: {
				'1/12': '8.333333%',
				'2/12': '16.666667%',
				'3/12': '25%',
				'4/12': '33.333333%',
				'5/12': '41.666667%',
				'6/12': '50%',
				'7/12': '58.333333%',
				'8/12': '66.666667%',
				'9/12': '75%',
				'10/12': '83.333333%',
				'11/12': '91.666667%',
			}
		},
	},
	plugins: [],
}
