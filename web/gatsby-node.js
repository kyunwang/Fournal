/**
import { replaceAllNonCharacters } from './src/utils/utils';
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

    actions.createPage({
      path: `foodspot/${spotSlug}`,
      component: path.resolve(`./src/templates/FoodSpot/FoodSpot.js`),
      context: {
        foodSpotId: id,
      },
    });

    posts.forEach(post => {
      const visitSlug = replaceAllNonCharacters(post.title, '-');

      actions.createPage({
        path: `foodspot/${spotSlug}/${visitSlug}`,
        component: path.resolve(`./src/templates/FoodPost/FoodPost.js`),
        context: {
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