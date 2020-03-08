import styles from '../List.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ListCard from '../ListCard/ListCard';
import { replaceAllNonCharacters } from '../../../utils/utils';
import InternalLink from '../../general/InternalLink';
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

const SpotList = ({ spots, setActiveSpotId, windowLocation }) => {
	return (
		<ul className={styles.list}>
			{spots
				.filter(spot => spot.node.posts.length > 0)
				.map(spot => {
					const { name, description, location, id } = spot.node;
					const slug = replaceAllNonCharacters(name, '-');

					return (
						<Link key={id} to={`/foodspot/${slug}`}>
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

SpotList.propTypes = {};
SpotList.defaultProps = {};

export default SpotList;