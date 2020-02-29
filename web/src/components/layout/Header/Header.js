import styles from './Header.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subTitle }) => {
	return (
		<header className={styles.wrapper}>
			{title && <h2>{title}</h2>}
			{subTitle && <p>{subTitle}</p>}
		</header>
	)
}

Header.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
}

Header.defaultProps = {
	title: '',
	subTitle: '',
}

export default Header;
