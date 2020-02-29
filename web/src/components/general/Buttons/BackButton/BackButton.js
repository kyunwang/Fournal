import styles from './BackButton.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const BackButton = ({fromList, hasBackButton, backURL}) => {
	// if (!fromList && !hasBackButton) return null;

	return (
		<div className={styles.wrapper}>
			<Link to={`${backURL}`}>
				<img src="/icons/arrow-regular.svg" />
			</Link>
		</div>
	);
}

BackButton.propTypes = {
	backURL: PropTypes.string,
	hasBackButton: PropTypes.bool,
	fromList: PropTypes.bool,
}

BackButton.defaultProps = {
	backURL: '/',
	hasBackButton: false,
	fromList: false,
}

export default BackButton;