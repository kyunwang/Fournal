import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from '../../components/layout/Container';
import PostList from '../../components/Spots/PostList/PostList';
import PostDetail from './PostDetail/PostDetail';
import Header from '../../components/layout/Header/Header';
import { replaceAllNonCharacters } from '../../utils/utils';

export const query = graphql`
  # query foodPostPageQuery($foodSpotId: String!, $foodPostId: String!) {
  query foodPostPageQuery($foodPostId: String!, $foodSpotId: String!) {
    foodPost: sanityFoodPost(id: { eq: $foodPostId }) {
      id
      pictures {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
      price
      title
      visitDate(formatString: "MM-YYYY")
      description
    }
		foodSpot: sanityFoodSpot(id: { eq: $foodSpotId}) {
			name
		}
  }
`;

const FoodPostPage = ({ data: { foodPost, foodSpot }}) => {
	const spotSlug = replaceAllNonCharacters(foodSpot.name, '-');
	
  return (
    <Container
			hasBackButton
			backURL={`/foodspot/${spotSlug}`}
		>
			<Header
				title={foodPost.title} 
				subTitle={foodSpot.name} 
			/>
      <PostDetail post={foodPost} />
    </Container>
  );
};

FoodPostPage.propTypes = {};
FoodPostPage.defaultProps = {};

export default FoodPostPage;
