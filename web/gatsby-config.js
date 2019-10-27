/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config();
const postCssImport = require('postcss-import');
const postCssEnv = require('postcss-preset-env');
const postCssCustomProperties = require('postcss-custom-properties');

const {
  api: { projectId, dataset },
} = requireConfig('../studio/sanity.json');

module.exports = {
  // siteMetadata: { title: 'A gatsby starter' },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          postCssEnv({
            stage: 0,
          }),
          postCssImport(),
          postCssCustomProperties(),
        ],
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDraft: true,
      },
    },
  ],
};

function requireConfig(path) {
  try {
    return require(path);
  } catch (e) {
    console.error('Failed to require sanity.json');
  }

  return {
    api: {
      projectId: process.env.SANITY_PROJECT_ID || '',
      dataset: process.env.SANITY_DATASET || '',
    },
  };
}
