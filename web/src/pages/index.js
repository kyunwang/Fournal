import styles from './index.module.scss'; // Remove later on (header to container)

import React, { useState } from 'react';
import Container from '../components/layout/Container';

import { graphql } from 'gatsby';
import SpotList from '../components/Spots/SpotList/SpotList';
import Header from '../components/layout/Header/Header';
import { OnePageContextConsumer } from '../context/OnePageContext';
import PostList from '../components/Spots/PostList/PostList';

export const query = graphql`
	query indexPageQuery {
		spots: allSanityFoodSpot {
			totalCount
			edges {
				node {
					...FoodSpotInformation
					...FoodSpotPost
				}
			}
		}
	}
`;

const HomePage = props => {
	const {
		data: { spots },
		error,
	} = props;

	const [activePosts, setActivePosts] = useState([]);

	// grab url - in effect

	return (
		<OnePageContextConsumer>
			{data => {
				const {
					setActiveSpotId,
					activePostId,
					activeSpotId,
					setActivePostId,
				} = data;

				return (
					<Container>
						<Header
							title="Fournal"
							subTitle="Inconsistent food journaling"
						/>
						<div className={styles.listWrapper}>
							<SpotList
								spots={spots.edges}
								setActiveSpotId={setActiveSpotId}
							/>
						</div>
					</Container>
				);
			}}
		</OnePageContextConsumer>
	);
};

export default HomePage;
