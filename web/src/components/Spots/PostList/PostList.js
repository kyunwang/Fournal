import styles from '../List.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ListCard from '../ListCard/ListCard';
import InternalLink from '../../general/InternalLink';

const PostList = props => {
	const {
		activeImageIndex,
		posts,
		currentPath,
		currentPost,
		handleHoverImage,
		handleClickImage,
	} = props;

	return (
		<ul className={styles.list}>
			{posts.map(post => {
				const {
					title,
					id,
					visitDate,
					description,
					slug: { current: slug },
				} = post;

				const linkClasses = currentPost.id
					? `${
							id === currentPost.id
								? styles.isSelected
								: styles.notSelected
					  }`
					: '';

				return id === currentPost.id ? (
					<div className={linkClasses} key={currentPost.id}>
						<ListCard
							activeImageIndex={activeImageIndex}
							info={currentPost.visitDate}
							title={currentPost.title}
							description={currentPost.description}
							isActive
							pictures={currentPost.pictures}
							handleHoverImage={handleHoverImage}
							handleClickImage={handleClickImage}
						/>
					</div>
				) : (
					<InternalLink
						// className={linkClasses}
						key={id}
						// to={`${currentPath}/${slug}`}
						// state={{ fromList: true }}
						newPath={`${currentPath}/${slug}`}
						newInternalPath={`?post=${slug}`}
					>
						<ListCard
							info={visitDate}
							title={title}
							description={description}
						/>
					</InternalLink>
				);
			})}
		</ul>
	);
};

PostList.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.object).isRequired,
	currentPath: PropTypes.string.isRequired,
	currentFoodPostId: PropTypes.string,
	// currentPost: PropTypes.object,
};
PostList.defaultProps = {
	currentFoodPostId: '',
	currentPost: {},
};

export default PostList;
