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
			component: path.resolve(
				`./src/templates/FoodSpotPage/FoodSpotPage.js`
			),
			context: {
				currentPath: spotPath,
				foodSpotId: id,
			},
		});

		posts.forEach(post => {
			const visitSlug = replaceAllNonCharacters(post.title, '-');
			const postPath = `foodspot/${spotSlug}/${visitSlug}`;

			actions.createPage({
				path: postPath,
				component: path.resolve(
					`./src/templates/FoodPostPage/FoodPostPage.js`
				),
				context: {
					currentPath: postPath,
					foodSpotId: id,
					foodPostId: post.id,
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
