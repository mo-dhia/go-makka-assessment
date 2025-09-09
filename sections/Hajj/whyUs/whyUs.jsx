import React from 'react';
import styles from './whyUs.module.css';

const leftFeatures = [
  "Nous vous inscrivons sur notre groupe whatsup d'information & assistance",
  'Nous vous envoyons nos formules Hajj 2026',
  "Vous créez par vous-même votre compte Nusuk",
  'Vous réservez une de nos formules',
  'Vous nous envoyez votre passeport et la formule confirmée',
];

const rightFeatures = [
  "Nous vous inscrivons sur notre groupe whatsup d'information & assistance",
  'Nous créons et gérons pour vous votre compte NUSUK',
  'Nous payons votre hajj pour vous si vous le demander. Vos payez votre hajj chez nous',
  'Nous vous envoyons nos formules Hajj 2026',
  "Nous gérons la réservation de votre hajj jusqu'au bout",
  'Et  Vous partez au hajj avec nos équipes accompagnateurs très expérimentés',
];

export default function WhyUs() {
  return (
    <section className={styles.wrapper} aria-labelledby='why-title'>
      <div className={styles.container}>
        <h2 id='why-title' className={styles.title}>Deux formules adaptées à vos besoins</h2>

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.cardLeft}`}>
            <header className={styles.cardHeader}>
              <div className={styles.ribbon}>
                <img className={styles.ribbonImg} src='/imgs/bookmark-green.png' alt='' />
                <div className={styles.ribbonText}><span>Pack</span><strong>Gratuit</strong></div>
              </div>
              <h3 className={styles.cardTitle}><span className={styles.blue}>Hajj Assistance</span> GO-Makkah</h3>
            </header>

            <div className={styles.bannerLeft}>7% de nos client ont le choisis</div>

            <ul className={styles.features}>
              {leftFeatures.map((f, i) => (
                <li key={i} className={styles.feature}>{f}</li>
              ))}
            </ul>

            <button className={`${styles.cta} ${styles.ctaBlue}`} type='button'>Inscrivez-vous vite !</button>
          </article>

          <article className={`${styles.card} ${styles.cardRight}`}>
            <header className={styles.cardHeader}>
              <div className={styles.priceTag}>
                <div className={styles.priceInside}>
                  <img className={styles.ribbonImg} src='/imgs/bookmark-gold.png' alt='' />
                  <div className={styles.priceNumber}>250</div>
                  <div className={styles.priceUnit}>EUR</div>
                </div>
              </div>
              <h3 className={styles.cardTitle}><span className={styles.gold}>Hajj Sérénité</span> GO-Makkah</h3>
            </header>

            <div className={styles.bannerRight}>80% de nos client ont le choisis</div>

            <ul className={styles.features}>
              {rightFeatures.map((f, i) => (
                <li key={i} className={styles.feature}>{f}</li>
              ))}
            </ul>

            <button className={`${styles.cta} ${styles.ctaGold}`} type='button'>Inscrivez-vous vite !</button>
          </article>
        </div>
      </div>
    </section>
  );
}
