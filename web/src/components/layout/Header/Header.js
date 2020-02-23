import styles from './Header.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({fromList, hasBackButton, title, subTitle}) => {
	return (
		<header className={styles.wrapper}>
			{(fromList || hasBackButton) && (<Link>
				<img src="/icons/arrow-regular.svg" />
			</Link>)
			}
			{title && <h2>{title}</h2>}
			{subTitle && <p>{subTitle}</p>}
		</header>
	)
}

Header.propTypes = {
	hasBackButton: PropTypes.bool,
	fromList: PropTypes.bool,
	title: PropTypes.string,
	subTitle: PropTypes.string,
}

Header.defaultProps = {
	hasBackButton: false,
	fromList: false,
	title: '',
	subTitle: '',
}

export default Header;
