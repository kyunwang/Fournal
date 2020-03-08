import styles from '../Card.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import NonStretchedImage from '../../general/NonStretchedImage';

export const query = graphql`
	fragment PostInformation on SanityFoodPost {
		id
		price
		title
		visitDate(formatString: "MM-YYYY")
		description
	}

	fragment PostInformationPicture on SanityFoodPost {
		pictures {
			asset {
				fluid(maxWidth: 700) {
					...GatsbySanityImageFluid
				}
			}
		}
	}
`;

const ListCard = ({ info, title, description, pictures, isActive }) => {
	return (
		<li className={`${styles.card} ${isActive ? styles.isActive : ''}`}>
			{info && <span>{info}</span>}
			{title && <h2>{title}</h2>}
			{description && <p>{description}</p>}

			{pictures.length > 0 && (
				<footer className={styles.footerImageWrapper}>
					{pictures.map(image => (
						<NonStretchedImage
							className={styles.footerImage}
							fluid={image.asset.fluid}
						/>
					))}
				</footer>
			)}
		</li>
	);
};

ListCard.propTypes = {
	info: PropTypes.string,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	pictures: PropTypes.array,
};

ListCard.defaultProps = {
	info: '',
	description: '',
	pictures: [],
};

export default ListCard;
