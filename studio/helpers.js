import slugify from "slugify";

export const getSlug = (source) => ({
	source,
	maxLength: 200, // default
	slugify: (input, type) => slugify(input, {
		replacement: '-', // default
		remove: undefined,
		lower: true,
		strip: true
	})
})