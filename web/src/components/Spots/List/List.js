import styles from '../List.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ListCard from '../ListCard/ListCard';
import { replaceAllNonCharacters } from '../../../utils/utils';

const SpotList = ({ spots }) => {
  return (
    <ul className={styles.list}>
      {spots.map(spot => {
        const { name, description, location, id } = spot.node;
        const slug = replaceAllNonCharacters(name, '-');

        return (
          <Link to={`/foodspot/${slug}`} key={id}>
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
