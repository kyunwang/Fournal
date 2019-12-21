export default {
	name: 'city',
	title: 'City',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'country',
			title: 'Country',
			type: 'reference',
			to: [{ type: 'country' }],
			// options: {
			// 	list: ['ba', 'bi'],
			// 	layout: 'radio',
			// },
		},
	],
};
