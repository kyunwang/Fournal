import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from '../../components/layout/Container';
import PostList from '../../components/Spots/PostList/PostList';
import PostDetail from '../../components/PostDetail/PostDetail';

export const query = graphql`
  # query foodPostPageQuery($foodSpotId: String!, $foodPostId: String!) {
  query foodPostPageQuery($foodPostId: String!) {
    foodPost: sanityFoodPost(id: { eq: $foodPostId }) {
      id
      title
    }
    # allFoodPosts: allSanityFoodPost(filter: {id: {ne: $foodPostId}}) {}
    # allFoodPosts: sanityFoodSpot(id: { eq: $foodSpotId }) {}
  }
`;

const FoodPostPage = ({ data: { foodPost } }) => {
  return (
    <Container>
      <p>Post</p>
      <PostDetail />
    </Container>
  );
};

FoodPostPage.propTypes = {};
FoodPostPage.defaultProps = {};

export default FoodPostPage;
