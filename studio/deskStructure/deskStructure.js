// About Structure Builder: https://www.sanity.io/docs/how-it-works
import S from '@sanity/desk-tool/structure-builder';

const filteredFields = [
	'spot',
	'foodPost',
	// Selectors
	'country',
	'city',
];

// .listItem - Define is item of a list
const spots = S.listItem()
	.title('Food Spots')
	.child(
		// A list in the second pane
		S.list()
			.title('Food Spots (nested)')
			.items([
				// First list item
				S.listItem()
					.title('Spots')
					.schemaType('spot') // TODO: Change to foodspot
					// Open with all in a list of document type 'spot'
					.child(S.documentTypeList('spot')),
				// TODO: spots by country / city
				// Show all
				S.listItem()
					.title('Spots by Country')
					.child(countryId => {
						console.log(countryId);

						// Load new document list
						return (
							S.documentList()
								.title('Spots')
								// Using Groq filter to get documents
								// Checks for Spots with countryId in its reference array
								.filter(`_type == "spot" && $countryId in spots[]._ref`)
								// .filter(`_type == "foodPost" && $countryId in foodPosts[]._ref`)
								.params({ countryId })
						);
					}),
			])
	);

const selectors = S.listItem()
	.title('Selectors List')
	.child(
		S.list()
			.title('Selectors List')
			.items([
				S.listItem()
					.title('Countries')
					.schemaType('country')
					.child(S.documentTypeList('country')),
				S.listItem()
					.title('Cities')
					.schemaType('city')
					.child(S.documentTypeList('city')),
			])
	);

const deskStructure = () =>
	S.list()
		.title('Content')
		.items([
			// New list item on first level
			spots,
			selectors,
			S.listItem()
				.title('Food Posts')
				.schemaType('foodPost')
				.child(S.documentTypeList('foodPost')),
			...S.documentTypeListItems().filter(
				listItem => !filteredFields.includes(listItem.getId())
			),
		]);

export default deskStructure;
