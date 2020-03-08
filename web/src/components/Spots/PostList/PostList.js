import styles from '../List.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ListCard from '../ListCard/ListCard';
import { replaceAllNonCharacters } from '../../../utils/utils';
import { Link } from 'gatsby';

const PostList = props => {
	const { posts, currentPath, currentFoodPostId, currentPost } = props;
	console.log('postlist', props);

	return (
		<ul className={styles.list}>
			{posts.map(post => {
				const { title, id, visitDate, description } = post;

				const slug = replaceAllNonCharacters(title, '-');

				const linkClasses = currentPost.id
					? `${
							id !== currentPost.id
								? styles.notSelected
								: styles.isSelected
					  }`
					: '';

				return id === currentPost.id ? (
					<div className={linkClasses}>
						<ListCard
							key={currentPost.id}
							info={currentPost.visitDate}
							title={currentPost.title}
							description={currentPost.description}
							isActive
							pictures={currentPost.pictures}
						/>
					</div>
				) : (
					<Link
						className={linkClasses}
						key={id}
						to={`${currentPath}/${slug}`}
						// state={{ fromList: true }}
					>
						<ListCard
							info={visitDate}
							title={title}
							description={description}
						/>
					</Link>
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
