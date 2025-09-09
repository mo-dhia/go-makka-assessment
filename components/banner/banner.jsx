import React from 'react';
import styles from './banner.module.css';

/**
 * Banner hero for side pages
 * Background image set in CSS; this component focuses on content
 */
const Banner = ({ title, highlight, subtitle }) => {
  return (
    <section className={styles.banner} role='img' aria-label='Hero banner'>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.titleLight}>{title}</span>
          {' '}<span className={styles.titleBlue}>{highlight}</span>
        </h1>
        {subtitle ? (
          <p className={styles.subtitle}>{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
};

export default Banner;
