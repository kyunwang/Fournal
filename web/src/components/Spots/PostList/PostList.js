import styles from '../List.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ListCard from '../ListCard/ListCard';
import { replaceAllNonCharacters } from '../../../utils/utils';
import InternalLink from '../../general/InternalLink';
import { Link } from 'gatsby';

const PostList = ({ posts, currentPath, setActiveSpotId }) => {
	// if posts.length === 1 => open

	return (
		<ul className={styles.list}>
			{posts.map(post => {
				const { title, id, visitDate, description } = post;
				const slug = replaceAllNonCharacters(title, '-');

				return (
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
