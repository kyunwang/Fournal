import styles from './PostDetail.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import NonStretchedImage from '../../components/general/NonStretchedImage';
import Header from '../../components/layout/Header/Header';
import PostList from '../../components/Spots/PostList/PostList';

export const query = graphql`
	fragment PostInformation on SanityFoodPost {
		id
		price
		title
		visitDate(formatString: "MM-YYYY")
		description
	}

	fragment PostInformationPicture on SanityFoodPost {
		pictures {
			asset {
				fluid(maxWidth: 700) {
					...GatsbySanityImageFluid
				}
			}
		}
	}
`;

const PostDetail = ({
	post: { pictures, price, title, visitDate, description },
	posts,
	currentPath,
	spotPath,
}) => {
	return (
		<>
			<div className={styles.wrapper}>
				{pictures.length > 0 && (
					<div className={styles.highlightImageWrapper}>
						<NonStretchedImage
							className={styles.highlightImage}
							fluid={pictures[0].asset.fluid}
						/>
					</div>
				)}

				<div className={styles.listWrapper}>
					<section className={`${styles.card} ${styles.active}`}>
						<span>{visitDate}</span>
						<h3>{title}</h3>
						<p>{description}</p>

						<footer className={styles.footerImageWrapper}>
							{pictures.map(image => (
								<NonStretchedImage
									className={styles.footerImage}
									fluid={image.asset.fluid}
								/>
							))}
						</footer>
						{/* button to expand and show ordered items? */}
					</section>
				</div>
				<PostList posts={posts} currentPath={spotPath} />
			</div>
		</>
	);
};

PostDetail.propTypes = {};
PostDetail.defaultProps = {};

export default PostDetail;
