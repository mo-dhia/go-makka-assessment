import React from 'react';
import Image from 'next/image';
import styles from './supportTechnique.module.css';

const SupportTechniqueSection = () => {
  return (
    <section className={styles.wrapper} aria-labelledby='support-title'>
      <div className={styles.card}>
        <div className={styles.headerRow}>
          <div className={styles.iconWrap}>
            <Image src='/imgs/supportChat.png' alt='' width={42} height={42} className={styles.icon} />
          </div>
          <h3 id='support-title' className={styles.title}>Support téléphonique</h3>
        </div>

        <p className={styles.subtitle}>GO-MAKKAH vous offre hotline support NUSUK</p>

        <div className={styles.rule} />

        <div className={styles.phone}>01 49 87 70 21</div>

        <div className={styles.rule} />

        <p className={styles.caption}>Ligne ouvert 24h/2h</p>
        <p className={styles.caption}>Avec la langue Arabe et Français</p>
      </div>
    </section>
  );
};

export default SupportTechniqueSection;
