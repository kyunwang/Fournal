import styles from '../List.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ListCard from '../ListCard/ListCard';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

export const query = graphql`
	fragment FoodSpotInformation on SanityFoodSpot {
		id
		name
		url
		description
		location {
			city {
				name
			}
		}
		slug {
			current
		}
	}

	fragment FoodSpotLocation on SanityFoodSpot {
		location {
			city {
				name
			}
			country: city {
				country {
					name
				}
			}
			coordinates {
				lat
				lng
			}
		}
	}

	fragment FoodSpotPost on SanityFoodSpot {
		posts: post {
			...PostInformation
			# ...PostInformationPicture
		}
	}
`;

const SpotList = ({ spots, currentSpotId }) => {
	return (
		<ul className={styles.list}>
			{spots
				.filter(spot => spot.node.posts.length > 0)
				.map(spot => {
					const {
						name,
						description,
						location,
						id,
						slug: { current: slug },
					} = spot.node;

					const linkClasses = currentSpotId
						? `${
								id === currentSpotId
									? styles.isSelected
									: styles.notSelected
						  }`
						: '';

					return (
						<Link
							key={id}
							to={`/foodspot/${slug}`}
							className={linkClasses}
						>
							<ListCard
								info={location.city.name}
								title={name}
								description={description}
							/>
						</Link>
					);
				})}
		</ul>
	);
};

SpotList.propTypes = {
	// spots: PropTypes.string.isRequired,
	currentSpotId: PropTypes.string,
};
SpotList.defaultProps = {
	currentSpotId: '',
};

export default SpotList;
