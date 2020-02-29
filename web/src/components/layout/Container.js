import styles from './Container.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
import BackButton from '../general/Buttons/BackButton/BackButton';


const Container = props => {
	const {
		children,
		backURL,
		hasBackButton
	} = props;

	return (
		<section className={styles.container}>
			{children}
			{/* <BackButton
				backURL={backURL}
				hasBackButton={hasBackButton}
			/> */}
		</section>
)};

Container.propTypes = {
	hasBackButton: PropTypes.bool,
	backURL: PropTypes.string,
}

Container.defaultPropr = {
	hasBackButton: false,
	backURL: '/',
}

export default Container;
