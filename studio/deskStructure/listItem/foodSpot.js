// .listItem - Define is item of a list
const foodSpot = S.listItem()
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

export default foodSpot;
