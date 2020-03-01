import styles from './index.module.scss'; // Remove later on (header to container)

import React, { useState } from 'react';
import Container from '../components/layout/Container';

import { graphql } from 'gatsby';
import SpotList from '../components/Spots/List/List';
import Header from '../components/layout/Header/Header';
import { OnePageContextConsumer } from '../components/context/OnePageContext';
import PostList from '../components/Spots/PostList/PostList';

export const query = graphql`
	query indexPageQuery {
		spots: allSanityFoodSpot {
			totalCount
			edges {
				node {
					id
					name
					description
					location {
						city {
							name
						}
					}
					posts: post {
						id
						# spotpage
						title
						description
						visitDate(formatString: "MM-YYYY")
					}
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
	console.log(props, props.location);

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

				if (activeSpotId) {
					const activeSpot = spots.edges.find(
						spot => spot.node.id === activeSpotId
					);

					if (activeSpot) {
						setActivePosts(activeSpot.node.posts);
					}
				} else if (!activeSpotId && activePosts.length) {
					setActivePosts([]);
				}

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
								windowLocation={props.location}
							/>

							{activeSpotId && activePosts.length > 0 && (
								<PostList posts={activePosts} />
							)}
						</div>
					</Container>
				);
			}}
		</OnePageContextConsumer>
	);
};

export default HomePage;
