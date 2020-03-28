import styles from './Container.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header/Header';

const Container = ({ children, title, subTitle }) => (
	<main className={styles.container}>
		<Header title={title} subTitle={subTitle} />
		{children}
	</main>
);

Container.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	title: PropTypes.string,
	subTitle: PropTypes.string,
};

Container.defaultPropr = {};

export default Container;
