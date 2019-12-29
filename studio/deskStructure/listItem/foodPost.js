import S from '@sanity/desk-tool/structure-builder';

// Posts
// Posts by Country
// Posts by City
// Posts by Spot??? should just og to spot then

const foodPost = S.listItem()
	.title('Food Posts')
	.schemaType('foodPost')
	.child(S.documentTypeList('foodPost'));

export default foodPost;
