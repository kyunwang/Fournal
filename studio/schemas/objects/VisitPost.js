export default {
	name: 'visitPost',
	title: 'Visit Post',
	type: 'object',
	fields: [
		{
			name: 'Author',
			name: 'author',
			type: 'reference',
			to: { type: 'author' },
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		// {
		// 	name: 'tags',
		// 	title: 'Tags',
		// 	type: '',
		// },
		{
			name: 'visitDate',
			title: 'VisitDate',
			type: 'date',
			options: {
				dateFormat: 'MM-YYYY',
				calenderTodayLabel: 'Today',
			},
		},
		{
			name: 'numberOfPeople',
			title: 'Number of People',
			type: 'number',
			// validation: Rule => {
			// 	Rule.required()
			// 		.positive()
			// 		.integer()
			// 		.warning('Should be a non-decimal positive number');
			// },
		},
		{
			name: 'pictures',
			title: 'Pictures',
			type: 'array',
			of: [{ type: 'picture' }],
		},
		// {
		//   type: 'array',
		//   name: 'slides',
		//   title: 'Slides',
		//   of: [{ type: 'image' }],
		//   options: {
		//     layout: 'grid'
		//   }
		// },
		{
			name: 'description',
			title: 'Description',
			type: 'markdown',
		},
		{
			name: 'order',
			title: 'Order',
			type: 'array',
			of: [{ type: 'orderItem' }],
		},
		{
			name: 'price',
			title: 'Price',
			type: 'number',
			// Validation to two decimals
		},
	],
};
