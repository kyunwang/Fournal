import React from 'react';
import Container from '../components/layout/Container';

import { graphql } from 'gatsby';
import SpotList from '../components/Spots/List/List';

export const query = graphql`
  query indexPageQuery {
    spots: allSanitySpot {
      totalCount
      edges {
        node {
          id
          name
          description
        }
      }
    }

    spot: sanitySpot {
      id
      city
      description
      name
      _createdAt
    }
  }
`;

export default ({ data: { spots, spot }, error }) => {
  return (
    <Container>
      <h1>Title</h1>
      <p>Paragraph</p>
      <SpotList spots={spots.edges} />
    </Container>
  );
};
