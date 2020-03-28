import styles from './PostHighlight.module.scss';
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import NonStretchedImage from '../../general/NonStretchedImage';
import mapScene from './mapScene';

const PostHighlight = ({
	coordinates,
	pictures,
	isHoveringImage,
	activeImageIndex,
}) => {
	const mapRef = useRef();

	useEffect(() => {
		const L = require('leaflet');
		const T = require('tangram');

		const map = L.map(mapRef.current);
		const layer = T.leafletLayer({
			scene: mapScene,
			attribution:
				'<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors',
		});

		layer.addTo(map);
		map.setView([coordinates.lat, coordinates.lng], 15);
	}, []);

	// useEffect(() => {});

	return (
		<aside
			className={styles.highlightImage}
			style={{
				position: 'relative',
			}}
		>
			<div ref={mapRef} className={styles.highlightMap} />
			<div
				className={styles.imageWrapper}
				style={{ pointerEvents: activeImageIndex !== null ? 'all' : 'none' }}
			>
				{pictures.length && activeImageIndex !== null && (
					<NonStretchedImage
						className={styles.highlightImage}
						fluid={pictures[activeImageIndex].asset.fluid}
					/>
				)}
			</div>
		</aside>
	);
};

PostHighlight.propTypes = {
	pictures: PropTypes.array,
	isHoveringImage: PropTypes.bool.isRequired,
	activeImageIndex: PropTypes.number,
	coordinates: PropTypes.shape({
		lat: PropTypes.number.isRequired,
		lng: PropTypes.number.isRequired,
	}).isRequired,
};

PostHighlight.defaultProps = {
	pictures: [],
	activeImageIndex: null,
};

export default PostHighlight;
