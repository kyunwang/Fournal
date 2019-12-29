const listSelector = S.listItem()
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

export default listSelector;
