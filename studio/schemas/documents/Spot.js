export default {
	name: 'spot',
	title: 'Spot',
	type: 'document',
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
		// {
		// 	name: 'coordinates',
		// 	title: 'Coordinates',
		// 	type: 'geopoint',
		// },
		// {
		// 	name: 'rating',
		// 	title: 'Rating',
		// 	type: 'number',
		// validation: Rule =>
		// 	Rule.custom(rating => {
		// 		if (rating % 0.5) {
		// 			return Rule.min(1)
		// 				.max(10)
		// 				.error('Ratings should be between 1 and 10');
		// 		}

		// 		return Rule.error('Ratings should be in steps of 0.5');
		// 	}),
		// type: 'string',
		// options: {
		// 	list: [
		// 		{title: 'one star'}
		// 	]
		// }
		// },
		// {
		// 	name: 'pricing',
		// 	title: 'Pricing',
		// 	type: 'number',
		// 	validation: Rule =>
		// 		Rule.required()
		// 			.min(1)
		// 			.max(5)
		// 			.error('Pricings should be between 1 and 5'),
		// },
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
	initialValue: {
		recommended: false,
		favorite: false,
	},
};
