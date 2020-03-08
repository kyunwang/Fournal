/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import * as path from 'path';
import { replaceAllNonCharacters } from './src/utils/utils';

export const createPages = async ({ actions, graphql }) => {
	const { data } = await graphql(`
		query {
			allSanityFoodSpot {
				nodes {
					id
					name
					posts: post {
						id
						title
					}
				}
			}
		}
	`);

	data.allSanityFoodSpot.nodes.forEach(({ id, name, posts }) => {
		const spotSlug = replaceAllNonCharacters(name, '-');

		const spotPath = `foodspot/${spotSlug}`;
		actions.createPage({
			path: spotPath,
			component: path.resolve(`./src/templates/FoodSpotPage.js`),
			context: {
				currentPath: spotPath,
				foodSpotId: id,
				spotPath,
				spotSlug,
			},
		});

		posts.forEach(post => {
			const postSlug = replaceAllNonCharacters(post.title, '-');
			const postPath = `foodspot/${spotSlug}/${postSlug}`;

			actions.createPage({
				path: postPath,
				component: path.resolve(`./src/templates/FoodPostPage.js`),
				context: {
					currentPath: postPath,
					foodPostId: post.id,
					foodSpotId: id,
					postSlug,
					spotPath,
					spotSlug,
				},
			});
		});
	});

	actions.createRedirect({
		fromPath: '/foodspot',
		toPath: '/',
		isPermanent: true,
	});
};
