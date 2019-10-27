export default {
	name: 'picture',
	title: 'Picture',
	type: 'image',
	options: {
		hotspot: true,
	},
	fields: [
		{
			name: 'caption',
			title: 'Caption',
			type: 'string',
			options: {
				isHighlighted: true,
			},
		},
		{
			name: 'alt',
			title: 'Alternative text (for screen readers)',
			type: 'string',
			options: {
				isHighlighted: true,
			},
		},
		{
			name: 'attribution',
			title: 'Attribution',
			type: 'string',
		},
	],
};
