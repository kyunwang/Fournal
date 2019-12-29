// About Structure Builder: https://www.sanity.io/docs/how-it-works
import S from '@sanity/desk-tool/structure-builder';

const fieldsTofilterOut = [
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
				S.listItem()
					.title('Spots by Country')
					.child(
						// List the spots
						S.documentTypeList('country')
							.title('Spots by Country')
							// Pass id selection down to the next pane
							.child(countryID =>
								// Load new document list
								S.documentList()
									.title('Spots')
									// Using Groq filter to get documents
									.filter(
										`_type == "spot" &&																			// Get all of type spot
											references(  																					// Which have have references of a specific city
												*[_type == "city" && references($countryID)]._id 		// Which are from a specific country
											)`
									)
									.params({ countryID })
							)
					),
				S.listItem()
					.title('Spots by City')
					.child(
						S.documentTypeList('city')
							.title('Spots by City')
							.child(cityID =>
								S.documentList()
									.title('Spots')
									.filter(`_type == "spot" && references($cityID)`)
									.params({ cityID })
							)
					),
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
				S.listItem()
					.title('Cities by Country')
					.child(
						S.documentTypeList('country')
							.title('Cities by Country')
							.child(countryID =>
								S.documentList()
									.title('Cities')
									.filter(`_type == "city" && references($countryID)`)
									.params({ countryID })
							)
					),
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
				listItem => !fieldsTofilterOut.includes(listItem.getId())
			),
		]);

export default deskStructure;
