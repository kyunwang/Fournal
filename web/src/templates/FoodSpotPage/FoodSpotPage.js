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

	const { currentPath } = pathContext;

	return (
		<OnePageContextConsumer>
			{data => {
				return (
					<Container>
						<Header title={name} subTitle="Visits" />
						<div style={{ display: 'flex' }}>
							<div style={{ padding: '1.2rem' }}>
								<SpotList spots={spots.edges} />
							</div>
							<div style={{ padding: '1.2rem' }}>
								<PostList
									posts={posts}
									currentPath={pathContext.currentPath}
								/>
							</div>
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
