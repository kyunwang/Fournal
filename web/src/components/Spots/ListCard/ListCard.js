import styles from '../Card.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

const ListCard = ({ info, title, description }) => {
  return (
    <li className={styles.card}>
      {info && <span>{info}</span>}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </li>
  );
};

ListCard.propTypes = {
  info: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

ListCard.defaultProps = {
  info: '',
  description: '',
};

export default ListCard;
