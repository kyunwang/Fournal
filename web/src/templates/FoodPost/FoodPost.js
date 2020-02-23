import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from '../../components/layout/Container';
import PostList from '../../components/Spots/PostList/PostList';
import PostDetail from './PostDetail/PostDetail';
import Header from '../../components/layout/Header/Header';

export const query = graphql`
  # query foodPostPageQuery($foodSpotId: String!, $foodPostId: String!) {
  query foodPostPageQuery($foodPostId: String!) {
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
		# foodSpot: sanityFoodSpot($foodSpotId: String!) {}
    # allFoodPosts: allSanityFoodPost(filter: {id: {ne: $foodPostId}}) {}
    # allFoodPosts: sanityFoodSpot(id: { eq: $foodSpotId }) {}
  }
`;

const FoodPostPage = (props) => {
	const { data: { foodPost }, location } = props;
	const { state = {} } = location;
	
  return (
    <Container>
			<Header
				title={foodPost.title} 
				// subTitle={foodPost} 
				fromList={state.fromList}
			/>
      <PostDetail post={foodPost} />
    </Container>
  );
};

FoodPostPage.propTypes = {};
FoodPostPage.defaultProps = {};

export default FoodPostPage;
