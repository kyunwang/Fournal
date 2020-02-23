import React from 'react';
import Container from '../components/layout/Container';

import { graphql } from 'gatsby';
import SpotList from '../components/Spots/List/List';
import Header from '../components/layout/Header/Header';

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
			<Header
				hasBackButton={false}
				title="Title"
				subTitle="subtitle"
			/>
      <SpotList spots={spots.edges} />
    </Container>
  );
};
