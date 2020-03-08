import styles from './FoodPage.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header/Header';
import SpotList from '../components/Spots/SpotList/SpotList';
import PostList from '../components/Spots/PostList/PostList';

export const query = graphql`
	query foodSpotPageQuery($foodSpotId: String!) {
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
	}
`;

const FoodSpotPage = ({ data: { spots, foodSpot }, pathContext }) => {
	const {
		name,
		location: {
			city,
			country: { country },
			coordinates,
		},
		posts,
	} = foodSpot;

	const { foodSpotId, spotPath } = pathContext;

	return (
		<Container title={name} subTitle="Visits">
			<div className={`${styles.container}`}>
				<div className={`${styles.listWrapper} ${styles.spotList}`}>
					<SpotList spots={spots.edges} currentSpotId={foodSpotId} />
				</div>
				<div className={`${styles.listWrapper} ${styles.postList}`}>
					<PostList
						posts={posts}
						currentPath={pathContext.currentPath}
						spotPath={spotPath}
					/>
				</div>
			</div>
		</Container>
	);
};

FoodSpotPage.propTypes = {};
FoodSpotPage.defaultProps = {};

export default FoodSpotPage;
