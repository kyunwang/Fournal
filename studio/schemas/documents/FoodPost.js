import { getSlug } from '../../helpers';

export default {
	name: 'foodPost',
	title: 'Food Post',
	type: 'document',
	// initial
	fields: [
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: { type: 'author' },
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: getSlug('title')
		},
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
		},
		{
			name: 'pictures',
			title: 'Pictures',
			type: 'array',
			of: [{ type: 'picture' }],
		},
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
		},
	],
};
