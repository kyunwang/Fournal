import React from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from 'gatsby';

const InternalLink = ({ children, onClick, newTitle, newPath }) => {
	// If there is JS enabled - use in page navigating
	const handleOnClick = event => {
		window.history.pushState(null, newTitle, newPath);
		// navigate(newPath, {
		// state: {},
		// replace: false
		// });
		onClick();
		event.preventDefault();
	};

	return (
		<Link onClick={handleOnClick} to={newPath}>
			{children}
		</Link>
	);
};

InternalLink.propTypes = {};
InternalLink.defaultProps = {};

export default InternalLink;
