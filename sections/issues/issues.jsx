import React from 'react';
import styles from './issues.module.css';

export default function Issues() {
  return (
    <section className={styles.wrapper} aria-labelledby='issues-title'>
      <div className={styles.container}>
        <h2 id='issues-title' className={styles.title}>Problèmes rencontrées et solutions</h2>

        <p className={styles.paragraph}>
          En tant qu’agence de voyage française spécialisée dans l’accompagnement au Hajj, nous avons constaté plusieurs obstacles techniques et humains récurrents depuis la mise en place de la plateforme Nusuk. Nos constats reposent sur des retours concrets de clients ainsi que sur les observations partagées au sein des réseaux professionnels.
        </p>

        <h3 className={styles.subheading}>Volume important de comptes… mais conversion imparfaite</h3>
        <p className={styles.paragraph}>
          Nous avons entendu que près de 100 000 comptes ont été créés en France sur la plateforme Nusuk durant la période d’ouverture des inscriptions. Ce chiffre reste à être confirmé officiellement, mais il illustre une forte mobilisation initiale.
        </p>
        <p className={styles.paragraph}>
          Toutefois, en 2023, seuls 7 000 à 8 000 pèlerins français ont effectivement pu accomplir le Hajj — selon les statistiques recueillies (tourn0search7)).
        </p>
        <p className={styles.paragraph}>
          En conséquence : un grand nombre d’inscriptions restent non finalisées, qu’il s’agisse d’erreurs techniques, de validation stoppée, ou de paiement non abouti.
        </p>

        <h3 className={styles.subheading}>Difficultés techniques rencontrées</h3>
        <p className={styles.paragraph}>Nos clients nous ont rapporté plusieurs cas problématiques, notamment :</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Connexion interrompue au moment du paiement ou de la validation du forfait.</li>
          <li className={styles.listItem}>Forfait visible comme disponible, qui devient soudainement inaccessible au final.</li>
          <li className={styles.listItem}>Dépôt dans l’e-wallet effectué, sans validation immédiate ni retour clair, générant une incertitude dommageable.</li>
        </ul>

        <h3 className={styles.subheading}>Stress généralisé et absence de soutien francophone</h3>
        <p className={styles.paragraph}>
          Certains candidats ont dû recommencer tout le processus à plusieurs reprises.
        </p>
        <p className={styles.paragraph}>
          D’autres ont vu leur réservation validée… puis annulée sans explication.
        </p>
        <p className={styles.paragraph}>
          L’absence ou la lenteur d’un support en français a fait perdre un temps précieux à plusieurs d’entre eux.
        </p>

        <p className={styles.paragraph}>
          Ces observations traduisent une réalité : le passage de l’inscription à l’accès effectif au Hajj reste trop aléatoire, même pour des candidats préparés. Cela justifie pleinement la valeur ajoutée de votre agence — une présence rassurante, opérationnelle et parfaitement alignée sur les attentes des pèlerins français.
        </p>
      </div>
    </section>
  );
}
