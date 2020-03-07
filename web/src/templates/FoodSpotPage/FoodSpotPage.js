import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header/Header';
import { OnePageContextConsumer } from '../../context/OnePageContext';
import SpotList from '../../components/Spots/SpotList/SpotList';
import PostList from '../../components/Spots/PostList/PostList';

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

const FoodSpotPage = props => {
	const {
		data: { spots, foodSpot },
		location,
		pathContext,
	} = props;

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
		<OnePageContextConsumer>
			{data => {
				console.log('spots', data, location);
				return (
					<Container>
						<Header title={name} subTitle="Visits" />
						<div style={{ display: 'flex' }}>
							<SpotList
								spots={spots.edges}
								// setActiveSpotId={setActiveSpotId}
							/>
							<PostList posts={posts} currentPath={location.pathname} />
							{/* <PostList posts={posts} currentPath={pathContext.currentPath} /> */}
						</div>
					</Container>
				);
			}}
		</OnePageContextConsumer>
	);
};

FoodSpotPage.propTypes = {};
FoodSpotPage.defaultProps = {};

export default FoodSpotPage;
