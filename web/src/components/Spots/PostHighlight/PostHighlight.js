import styles from './PostHighlight.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import NonStretchedImage from '../../general/NonStretchedImage';

const PostHighlight = ({ pictures, isHoveringImage, activeImageIndex }) => {
	console.log(activeImageIndex);
	// Show map

	return (
		<NonStretchedImage
			className={styles.highlightImage}
			fluid={pictures[0].asset.fluid}
			// fluid={pictures[activeImageIndex].asset.fluid}
		/>
	);
};

PostHighlight.propTypes = {
	pictures: PropTypes.array,
	isHoveringImage: PropTypes.bool.isRequired,
	activeImageIndex: PropTypes.number,
};

PostHighlight.defaultProps = {
	// pictures: '',
	activeImageIndex: 0,
};

export default PostHighlight;
