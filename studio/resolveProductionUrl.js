// const resolveProductionUrl = document =>
// 	`https://fournal.com/preview/${document._id}`;

const isDraft = id => id.includes('drafts');

function resolveProductionUrl(document) {
	// console.log(document);

	// First, we select a specific type of document
	// if (document._type === 'page') {
	// Then we get its ID
	let id = document._id;
	// if it's a draft, we split its _id with the "drafts." substring, which will return an array,
	// and get the second item in it, which will be the isolated _id without "drafts."
	if (isDraft(id)) {
		id = document._id.split('drafts.')[1];
	}
	// And return a template string reflecting the URL structure we want. In this case, we're doing a
	// simple conditional to return '&isDraft=true' as a param for drafts as we'll query them
	// differently in the front-end
	// return `http://localhost:3000/preview?pageId=${id}${
	return `http://localhost:8000/preview?pageId=${id}${
		isDraft(document._id) ? '&isDraft=true' : ''
	}`;
	// return `https://yourUrl.com/preview?pageId=${id}${isDraft(document._id) ? '&isDraft=true' : ''}`
	// }

	return undefined;
}

export default resolveProductionUrl;
