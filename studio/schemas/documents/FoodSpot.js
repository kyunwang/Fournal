export default {
	name: 'spot',
	title: 'Spot',
	type: 'document',
	initialValue: {
		recommended: false,
		favorite: false,
	},
	fields: [
		{
			name: 'name',
			title: 'Spot Name',
			type: 'string',
		},
		{
			name: 'recommended',
			title: 'Recommended',
			type: 'boolean',
		},
		{
			name: 'favorite',
			title: 'Favorite',
			type: 'boolean',
		},
		{
			name: 'location',
			title: 'Location',
			type: 'foodSpotLocation',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
		},
		{
			name: 'url',
			title: 'Store URL',
			type: 'url',
		},
		{
			// Sort to earliest
			name: 'post',
			title: 'Posts',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'foodPost' }] }],
		},
		// TODO: REMOVE
		{
			// Sort to earliest
			name: 'visits',
			title: 'Visits (old - migrate)',
			type: 'array',
			of: [{ type: 'visitPost' }],
		},
	],
};
