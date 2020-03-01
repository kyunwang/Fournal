import styles from '../List.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ListCard from '../ListCard/ListCard';
import { replaceAllNonCharacters } from '../../../utils/utils';

const PostList = ({ posts, currentPath }) => {
  // if posts.length === 1 => open

  console.log('postl;ist');

  return (
    <ul className={styles.list}>
      {posts.map(post => {
        const { title, id, visitDate, description } = post;
        const slug = replaceAllNonCharacters(title, '-');

        return (
          <Link
            key={id}
            to={`${currentPath}/${slug}`}
            state={{ fromList: true }}
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
