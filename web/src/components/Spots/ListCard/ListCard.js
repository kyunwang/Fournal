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

const ListCard = ({
	description,
	info,
	isActive,
	handleHoverImage,
	handleClickImage,
	pictures,
	title,
}) => {
	const onEnterImage = () => {
		handleHoverImage(true);
	};

	const onExitImage = () => {
		handleHoverImage(false);
	};

	const onClickImage = index => {
		handleClickImage(index);
	};
	return (
		<li className={`${styles.card} ${isActive ? styles.isActive : ''}`}>
			{info && <span>{info}</span>}
			{title && <h2>{title}</h2>}
			{description && <p>{description}</p>}

			{pictures.length > 0 && (
				<footer className={styles.footerImageWrapper}>
					{pictures.map((image, index) => (
						<button
							key={image.asset.fluid.src}
							onClick={() => onClickImage(index)}
							onMouseEnter={onEnterImage}
							onMouseLeave={onExitImage}
						>
							{/* <button> */}
							<NonStretchedImage
								className={styles.footerImage}
								fluid={image.asset.fluid}
							/>
						</button>
					))}
				</footer>
			)}
		</li>
	);
};

ListCard.propTypes = {
	description: PropTypes.string,
	info: PropTypes.string,
	handleHoverImage: PropTypes.func,
	handleClickImage: PropTypes.func,
	pictures: PropTypes.array,
	title: PropTypes.string.isRequired,
};

ListCard.defaultProps = {
	description: '',
	info: '',
	handleHoverImage: () => {},
	handleClickImage: () => {},
	pictures: [],
};

export default ListCard;
