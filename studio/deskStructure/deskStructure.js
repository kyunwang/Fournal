// About Structure Builder: https://www.sanity.io/docs/how-it-works
import S from '@sanity/desk-tool/structure-builder';

import foodSpot from './listItem/foodSpot';
import listSelector from './listItem/listSelector';
import foodPost from './listItem/foodPost';

const fieldsToFilterOut = [
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
			foodPost,
			// Filter out lists and put rest of the documents in
			...S.documentTypeListItems().filter(
				listItem => !fieldsToFilterOut.includes(listItem.getId())
			),
		]);

export default deskStructure;
