import styles from './List.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

const SpotList = ({ spots }) => {
  return (
    <ul className={styles.spotsList}>
      {/* Cards */}
      {spots.map(spot => {
        const { name } = spot.node;

        return (
          <li className={styles.spot}>
            <h2>{name}</h2>
          </li>
        );
      })}
    </ul>
  );
};

SpotList.propTypes = {};
SpotList.defaultProps = {};

export default SpotList;
