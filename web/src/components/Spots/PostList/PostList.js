import styles from '../List.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ListCard from '../ListCard/ListCard';
import { replaceAllNonCharacters } from '../../../utils/utils';
import { Link } from 'gatsby';

const PostList = props => {
	const { posts, currentPath, currentFoodPostId, currentPost } = props;

	return (
		<ul className={styles.list}>
			{posts.map(post => {
				const { title, id, visitDate, description, pictures, price } = post;

				const slug = replaceAllNonCharacters(title, '-');

				return id === currentFoodPostId ? (
					<ListCard
						info={currentPost.visitDate}
						title={currentPost.title}
						description={currentPost.description}
						isActive
						pictures={currentPost.pictures}
					/>
				) : (
					<Link
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

PostList.propTypes = {};
PostList.defaultProps = {};

export default PostList;
