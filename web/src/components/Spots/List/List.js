import styles from '../List.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ListCard from '../ListCard/ListCard';
import { replaceAllNonCharacters } from '../../../utils/utils';
import InternalLink from '../../general/InternalLink';

const SpotList = ({ spots, setActiveSpotId, windowLocation }) => {
	return (
		<ul className={styles.list}>
			{spots
				.filter(spot => spot.node.posts.length > 0)
				.map(spot => {
					const { name, description, location, id } = spot.node;
					const slug = replaceAllNonCharacters(name, '-');

					return (
						<InternalLink
							newPath={`/foodspot/${slug}`}
							newTitle={`Fournal - ${name}`}
							key={id}
							onClick={() => setActiveSpotId(id)}
						>
							<ListCard
								info={location.city.name}
								title={name}
								description={description}
							/>
						</InternalLink>
					);
				})}
		</ul>
	);
};

SpotList.propTypes = {};
SpotList.defaultProps = {};

export default SpotList;
