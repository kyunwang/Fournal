export default {
	name: 'foodSpotLocation',
	title: 'Food Spot Location',
	type: 'object',
	fields: [
		{
			name: 'city',
			title: 'City',
			type: 'reference',
			to: [{ type: 'city' }], // Includes country
		},
		{
			name: 'coordinates',
			title: 'Coordinates',
			type: 'geopoint',
			required: false,
		},
	],
};
