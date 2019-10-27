import styles from './Container.module.scss';
import React from 'react';

const Container = props => (
  <section {...props} className={styles.container}>
    {props.children}
  </section>
);

export default Container;
