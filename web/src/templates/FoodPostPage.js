import styles from './FoodPage.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from '../components/layout/Container';
import PostList from '../components/Spots/PostList/PostList';
import PostDetail from '../components/Spots/PostDetail/PostDetail';
import Header from '../components/layout/Header/Header';
import { replaceAllNonCharacters } from '../utils/utils';
import SpotList from '../components/Spots/SpotList/SpotList';

export const query = graphql`
	query foodPostPageQuery($foodPostId: String!, $foodSpotId: String!) {
		spots: allSanityFoodSpot {
			totalCount
			edges {
				node {
					...FoodSpotInformation
					...FoodSpotPost
				}
			}
		}

		foodSpot: sanityFoodSpot(id: { eq: $foodSpotId }) {
			...FoodSpotInformation
			...FoodSpotLocation
			...FoodSpotPost
		}

		# Soo sad I have to repeat atm

		foodPost: sanityFoodPost(id: { eq: $foodPostId }) {
			...PostInformation
			...PostInformationPicture
		}
	}
`;

const FoodPostPage = ({
	data: { spots, foodSpot, foodPost },
	location,
	pathContext,
}) => {
	const {
		name,
		location: {
			city,
			country: { country },
			coordinates,
		},
		posts,
	} = foodSpot;

	const { spotPath, foodPostId } = pathContext;

	const spotSlug = replaceAllNonCharacters(name, '-');

	return (
		<Container hasBackButton backURL={`/foodspot/${spotSlug}`}>
			<Header title={foodPost.title} subTitle={name} />
			<div className={`${styles.container}`}>
				<div className={`${styles.listWrapper} ${styles.spotList}`}>
					<SpotList spots={spots.edges} />
				</div>
				<div className={`${styles.listWrapper}`}>
					<PostList
						posts={posts}
						currentPath={spotPath}
						currentFoodPostId={foodPostId}
						currentPost={foodPost}
					/>
				</div>
			</div>
		</Container>
	);
};

FoodPostPage.propTypes = {};
FoodPostPage.defaultProps = {};

export default FoodPostPage;
