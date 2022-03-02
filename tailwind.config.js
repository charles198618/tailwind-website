module.exports = {
	content: {
		content: ['./public/**/*html'],
	},
	theme: {
		extend: {
			colors: {
				primary: {
					h: '#f1f5f9',
				},
				second: {
					s: '#ffc100',
				},
				tertiary: {
					t	: '#17c7be',
				},
			},

			fontFamily: {
				titre: ['Montserrat'],
			},
		},
		container: {
			center: true,
		},
	},

	variants: {
		extend: {
			scale: ['active'],
		},
	},

	plugins: [],
	darkMode: 'media',
};
