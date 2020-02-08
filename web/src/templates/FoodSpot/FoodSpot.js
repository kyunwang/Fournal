import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from '../../components/layout/Container';
import PostList from '../../components/Spots/PostList/PostList';

export const query = graphql`
  query foodSpotPageQuery($foodSpotId: String!) {
    foodSpot: sanityFoodSpot(id: { eq: $foodSpotId }) {
      id
      name
      url
      location {
        city {
          name
        }
        country: city {
          country {
            name
          }
        }
        coordinates {
          lat
          lng
        }
      }
      posts: post {
        id
        title
        description
        date: _updatedAt(formatString: "MM-YYYY")
        _createdAt
      }
    }
  }
`;

const FoodSpotPage = ({ data: { foodSpot } }) => {
  const {
    name,
    location: {
      city,
      country: { country },
      coordinates,
    },
    posts,
  } = foodSpot;

  return (
    <Container>
      <h1>Foodspot</h1>
      <p>{name}</p>
      <PostList posts={posts} />
    </Container>
  );
};

FoodSpotPage.propTypes = {};
FoodSpotPage.defaultProps = {};

export default FoodSpotPage;
