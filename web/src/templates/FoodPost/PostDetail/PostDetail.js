import styles from './PostDetail.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import NonStretchedImage from '../../../components/general/NonStretchedImage';
import Header from '../../../components/layout/Header/Header';

const PostDetail = ({
  post: { pictures, price, title, visitDate, description },
}) => {
  return (
    <div>
			{/* <Header/>
      <header className={styles.header}>
        <h2>{title}</h2>
        <p>store name</p>
      </header> */}

			{pictures.length > 0 &&  <NonStretchedImage className={styles.highlightWrapper} fluid={pictures[0].asset.fluid} />}

      <div className={styles.listWrapper}>
        <section className={`${styles.card} ${styles.active}`}>
          <span>{visitDate}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <footer className={styles.imageWrapper}>
            {pictures.map(image => (
              // <Img fluid={image.asset.fluid} />
              <NonStretchedImage className={styles.footerImage} fluid={image.asset.fluid} />
            ))}
          </footer>
          {/* button to expand and show ordered items? */}
        </section>
      </div>
    </div>
  );
};

PostDetail.propTypes = {};
PostDetail.defaultProps = {};

export default PostDetail;
