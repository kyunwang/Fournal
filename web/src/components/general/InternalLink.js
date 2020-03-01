import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const InternalLink = ({ children, onClick, newTitle, newPath }) => {
	// If there is JS enabled - use in page navigating
	const handleOnClick = event => {
		window.history.pushState(null, newTitle, newPath);
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
