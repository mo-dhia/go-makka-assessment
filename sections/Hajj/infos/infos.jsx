import React from 'react';
import styles from './infos.module.css';

const items = [
  {
    title: 'Notre formule Hajj VIP',
    body: (
      <>
        Profitez d’un <strong>hébergement 5★ à Abraj Al Beit</strong> ou Jabal Omar, avec <strong>transferts en TGV</strong> pour un confort optimal. Votre séjour inclut aussi un campement à Minâ (<strong>Al Kabch</strong>), pour vivre pleinement les rites du Hajj dans les meilleures conditions.
      </>
    )
  },
  {
    title: 'Notre formule Hajj COFORT',
    body: (
      <>
        Séjournez dans des <strong>hôtels 5★ à Jabal Omar</strong>, profitez de <strong>transferts en TGV</strong> rapides et confortables, et vivez les rites du Hajj avec un campement à Minâ, dans la zone d’<strong>Al Kabch ou Mouayssem</strong>, pour une expérience spirituelle inoubliable.
      </>
    )
  },
  {
    title: 'Notre formule Hajj ECONOMIQUE',
    body: (
      <>
        Séjour en <strong>hôtels 4 ou 5★ situés à seulement 1–2 km du Haram</strong>, avec <strong>transferts en TGV ou en bus pour plus de confort</strong>. Le programme inclut également un campement à Minâ, dans la zone d’<strong>Al Mouayssem</strong>, afin de vivre pleinement les rites du Hajj.
      </>
    )
  }
];

export default function Infos() {
  return (
    <section className={styles.wrapper} aria-labelledby='infos-title'>
      <div className={styles.container}>
        <h2 id='infos-title' className={styles.title}>Tout savoir sur nos formules Hajj Go-Makkah</h2>

        <div className={styles.list}>
          {items.map((it, idx) => (
            <article key={idx} className={styles.card}>
              <div className={styles.cardTopLine} />
              <h3 className={styles.cardTitle}>{it.title}</h3>
              <p className={styles.cardText}>{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
