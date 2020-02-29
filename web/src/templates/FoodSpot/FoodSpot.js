import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from '../../components/layout/Container';
import PostList from '../../components/Spots/PostList/PostList';
import Header from '../../components/layout/Header/Header';

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
        visitDate(formatString: "MM-YYYY")
        _createdAt
      }
    }
  }
`;

const FoodSpotPage = (props) => {
	const { data: { foodSpot }, location } = props;

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
			<Header
				title={name}
				subTitle='Visits'
			/>
      <PostList posts={posts} currentPath={location.pathname} />
    </Container>
  );
};

FoodSpotPage.propTypes = {};
FoodSpotPage.defaultProps = {};

export default FoodSpotPage;