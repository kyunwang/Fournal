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
		// {
		// 	name: 'country',
		// 	title: 'Country',
		// 	type: 'string',
		// },
		{
			name: 'city',
			title: 'City',
			type: 'string',
		},
		{
			name: 'url',
			title: 'Store URL',
			type: 'url',
		},
		{
			name: 'coordinates',
			title: 'Coordinates',
			type: 'geopoint',
			required: false,
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
		},
		{
			// Sort to earliest
			name: 'visits',
			title: 'Visits',
			type: 'array',
			of: [{ type: 'visitPost' }],
		},
		// {
		// 	name: 'keywords',
		// 	title: 'Keywords',
		// 	type: 'array',
		// 	of: [{ type: 'string' }],
		// },
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
	],
};
