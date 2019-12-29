// About Structure Builder: https://www.sanity.io/docs/how-it-works
import S from '@sanity/desk-tool/structure-builder';

import foodSpot from './listItem/foodSpot';
import listSelector from './listItem/listSelector';

const fieldsTofilterOut = [
	'spot',
	'foodPost',
	// Selectors
	'country',
	'city',
];

const deskStructure = () =>
	S.list()
		.title('Content')
		.items([
			// New list item on first level
			foodSpot,
			listSelector,
			S.listItem()
				.title('Food Posts')
				.schemaType('foodPost')
				.child(S.documentTypeList('foodPost')),
			...S.documentTypeListItems().filter(
				listItem => !fieldsTofilterOut.includes(listItem.getId())
			),
		]);

export default deskStructure;
