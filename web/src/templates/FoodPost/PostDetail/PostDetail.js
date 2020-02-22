import styles from './PostDetail.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import NonStretchedImage from '../../../components/general/NonStretchedImage';

const PostDetail = ({
  post: { pictures, price, title, visitDate, description },
}) => {
  return (
    <div>
      <header className={styles.header}>
        <h2>{title}</h2>
        <p>store name</p>
      </header>

			<NonStretchedImage className={styles.highlightWrapper} fluid={pictures[0].asset.fluid} />

      <div className={styles.listWrapper}>
        <article className={styles.activeCard}>
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
        </article>
      </div>
    </div>
  );
};

PostDetail.propTypes = {};
PostDetail.defaultProps = {};

export default PostDetail;
