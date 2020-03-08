import styles from './FoodPage.module.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from '../components/layout/Container';
import PostList from '../components/Spots/PostList/PostList';
import SpotList from '../components/Spots/SpotList/SpotList';
import PostHighlight from '../components/Spots/PostHighlight/PostHighlight';

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

const FoodPostPage = ({ data: { spots, foodSpot, foodPost }, pathContext }) => {
	const {
		name,
		location: {
			city,
			country: { country },
			coordinates,
		},
		posts,
	} = foodSpot;

	const { spotPath, foodPostId, foodSpotId } = pathContext;

	// TODO: Possibly need context depending on what I want to do
	const [activeImageIndex, setActiveImageIndex] = useState(null);
	const [isHoveringImage, setIsHoveringImage] = useState(false);

	return (
		<Container title={foodPost.title} subTitle={name}>
			<div className={`${styles.container}`}>
				<div className={`${styles.listWrapper} ${styles.spotList}`}>
					<SpotList spots={spots.edges} currentSpotId={foodSpotId} />
				</div>

				<div className={styles.postsWrapper}>
					{foodPost.pictures.length > 0 && (
						<div className={`${styles.listWrapper} ${styles.highlight}`}>
							<PostHighlight
								isHoveringImage={isHoveringImage}
								activeImageIndex={activeImageIndex}
								pictures={foodPost.pictures}
							/>
						</div>
					)}
					<div className={styles.listWrapper}>
						<PostList
							posts={posts}
							currentPath={spotPath}
							currentFoodPostId={foodPostId}
							currentPost={foodPost}
							handleHoverImage={setIsHoveringImage}
							handleClickImage={setActiveImageIndex}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

FoodPostPage.propTypes = {};
FoodPostPage.defaultProps = {};

export default FoodPostPage;
