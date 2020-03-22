import styles from './FoodPage.module.scss';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import qs from 'query-string';
import Container from '../components/layout/Container';
import SpotList from '../components/Spots/SpotList/SpotList';
import PostList from '../components/Spots/PostList/PostList';
import PostHighlight from '../components/Spots/PostHighlight/PostHighlight';

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
			# ...FoodSpotPost
			posts: post {
				...PostInformation
				...PostInformationPicture
			}
		}
	}
`;

const FoodSpotPage = ({ data: { spots, foodSpot }, pathContext, location }) => {
	const {
		name,
		location: { coordinates },
		posts,
	} = foodSpot;

	useEffect(() => {
		const { post: postSlug } = qs.parse(location.search);

		if (postSlug && posts.length) {
			const foundPost = posts.find(
				({ slug: { current } }) => current === postSlug
			);

			if (foundPost) {
				setCurrentPost(foundPost);
			}
		}
	}, [location.search]);

	const [currentPost, setCurrentPost] = useState();
	const [activeImageIndex, setActiveImageIndex] = useState(null);
	const [isHoveringImage, setIsHoveringImage] = useState(false);
	const { foodSpotId, spotPath } = pathContext;

	return (
		<Container title={name} subTitle="Visits">
			<div className={`${styles.container}`}>
				<div className={`${styles.listWrapper} ${styles.spotList}`}>
					<SpotList spots={spots.edges} currentSpotId={foodSpotId} />
				</div>

				<div className={styles.postsWrapper}>
					<div className={`${styles.listWrapper} ${styles.highlight}`}>
						<PostHighlight
							isHoveringImage={isHoveringImage}
							activeImageIndex={activeImageIndex}
							pictures={currentPost && currentPost.pictures}
							coordinates={coordinates}
						/>
					</div>
					<div className={styles.listWrapper}>
						<PostList
							activeImageIndex={activeImageIndex}
							currentPost={currentPost}
							handleHoverImage={setIsHoveringImage}
							handleClickImage={setActiveImageIndex}
							posts={posts}
							currentPath={spotPath}
							spotPath={spotPath}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

FoodSpotPage.propTypes = {};
FoodSpotPage.defaultProps = {};

export default FoodSpotPage;
