import styles from './PostHighlight.module.scss';
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import NonStretchedImage from '../../general/NonStretchedImage';
import mapScene from './mapScene';
// import icons from './map/refill-icons.yaml';
// import color from './map/color-blue.yaml';

const PostHighlight = ({
	coordinates,
	pictures,
	isHoveringImage,
	activeImageIndex,
}) => {
	console.log(activeImageIndex, coordinates);
	// Show map
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

		// map.setView([40.70531887544228, -74.00976419448853], 15);
		map.setView([coordinates.lat, coordinates.lng], 15);
	}, []);

	// useEffect(() => {});

	return (
		<div className={styles.highlightImage} style={{
			position: 'relative',
			
		}}>
			{activeImageIndex !== null && (
				<NonStretchedImage
					className={styles.highlightImage}
					fluid={pictures[activeImageIndex].asset.fluid}
					// fluid={pictures[activeImageIndex].asset.fluid}
				/>
			)}
			<div ref={mapRef} className={styles.highlightMap}></div>
		</div>
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
	// pictures: '',
	activeImageIndex: 0,
};

export default PostHighlight;
