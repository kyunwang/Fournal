
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';


const InternalLink = ({ children, onClick, newInternalPath, newTitle, newPath }) => {
	// If there is JS enabled - use in page navigating
	const handleOnClick = event => {
		navigate(newInternalPath);
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

InternalLink.defaultProps = {
	onClick: () => {}
};

export default InternalLink;
