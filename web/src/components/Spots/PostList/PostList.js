import styles from '../List.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ListCard from '../ListCard/ListCard';

const PostList = ({ posts }) => {
  // if posts.length === 1 => open
  return (
    <ul className={styles.list}>
      {posts.map(post => (
        <ListCard
          key={post.id}
          info={post.date}
          title={post.title}
          description={post.description}
        />
      ))}
    </ul>
  );
};

PostList.propTypes = {};
PostList.defaultProps = {};

export default PostList;
