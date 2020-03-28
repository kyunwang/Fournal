const mapScene = {
	import: [
		'https://www.nextzen.org/carto/refill-style/12/refill-style.zip',
		'https://www.nextzen.org/carto/refill-style/12/themes/color-blue.zip',
		// 'https://www.nextzen.org/carto/refill-style/12/themes/refill-icons.zip',
		'https://www.nextzen.org/carto/refill-style/12/themes/label-10.zip'
	],
	sources: {
		mapzen: {
			url:
				'https://tile.nextzen.org/tilezen/vector/v1/256/all/{z}/{x}/{y}.mvt',
			url_params: {
				api_key: 'tsINU1vsQnKLU1jjCimtVw',
			},
			tile_size: 256,
			max_zoom: 16,
		},
	},
	// layer: {
	// 	'my-layer': {
	// 		draw: {
	// 			mapzen_icon_library: { sprite: 'zoo' },
	// 		},
	// 	},
	// },
};

export default mapScene;
