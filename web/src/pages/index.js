import styles from '../templates/FoodPage.module.scss';
import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/layout/Container';
import SpotList from '../components/Spots/SpotList/SpotList';

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

	return (
		<Container title="Fournal" subTitle="Inconsistent food journaling">
			<div className={styles.listWrapper}>
				<SpotList spots={spots.edges} />
			</div>
		</Container>
	);
};

export default HomePage;
