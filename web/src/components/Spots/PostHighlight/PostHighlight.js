import styles from './PostHighlight.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import NonStretchedImage from '../../general/NonStretchedImage';

const PostHighlight = ({ pictures }) => {
	return (
		<NonStretchedImage
			className={styles.highlightImage}
			fluid={pictures[0].asset.fluid}
		/>
	);
};

PostHighlight.propTypes = {};
PostHighlight.defaultProps = {};

export default PostHighlight;
