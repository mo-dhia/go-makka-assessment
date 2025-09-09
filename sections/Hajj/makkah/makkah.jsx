import React from 'react';
import styles from './makkah.module.css';

const cards = [
  { img: '/imgs/makkah-1.png', text: "Une expérience de plus de 10 ans dans l’organisation de voyages spirituels." },
  { img: '/imgs/makkah-2.png', text: "Des partenariats solides et fiables avec des agences saoudiennes agréées." },
  { img: '/imgs/makkah-3.png', text: "Un taux de réussite exceptionnel pour les inscriptions Hajj." },
  { img: '/imgs/makkah-4.png', text: "Accompagnement humain et spirituel avant, pendant et après le Hajj." },
  { img: '/imgs/makkah-5.png', text: "La garantie d’un suivi premium et personnalisé." },
];

export default function Makkah() {
  return (
    <section className={styles.wrapper} aria-labelledby='makkah-title'>
      <div className={styles.container}>
        <h2 id='makkah-title' className={styles.title}>Pourquoi choisir GO Makkah ?</h2>

        <div className={styles.grid}>
          {cards.map((c, i) => (
            <figure key={i} className={styles.card}>
              <img src={c.img} alt='' className={styles.image} />
              <figcaption className={styles.caption}>{c.text}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
