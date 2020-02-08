import React from 'react';
import Container from '../components/layout/Container';

import { graphql } from 'gatsby';
import SpotList from '../components/Spots/List/List';

export const query = graphql`
  query indexPageQuery {
    spots: allSanityFoodSpot {
      totalCount
      edges {
        node {
          id
          name
          description
          location {
            city {
              name
            }
          }
        }
      }
    }
  }
`;

export default ({ data: { spots }, error }) => {
  return (
    <Container>
      {/* Header */}
      <h1>Title</h1>
      <p>Paragraph</p>
      <SpotList spots={spots.edges} />
    </Container>
  );
};
