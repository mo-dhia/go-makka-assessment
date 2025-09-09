import React from 'react';
import styles from './serenite.module.css';

const bullets = [
  "Notre option hajj sérénité : pour ceux qui veulent :",
  "Augmenter votre chance de réserver la formule de votre choix",
  "Ne pas vivre tout le stress de l’utilisation la plateforme Nusuk, nos techniciens s’occupent de tout à votre place.",
  "Ne rien rater, nous faisons la veille sur Nusuk à votre place (nouveaux vols, nouvelle formule, nouveaux prix, etc.)",
  "Comment ça se passe ?",
  "Nous créons un compte NUSUK pour vous, vous n’avez rien à faire",
  "Nous nous occupons de toutes les étapes sur Nusuk en étroite coordination avec vous",
  "Le jour j, laissez nous gérer la réservation finale",
  "Ce n’est pas fini : Avec le pack sérénité, vous avez droit à :",
  "Assistance 24h/24, 7j/7 un conseiller vous répond au téléphone de manière personnalisée",
  "L’inscription à notre série de réunions Zoom privées :",
];

const weeks = [
  'Semaine 1 : Hajj 2026 mode d’emploi ?',
  'Semaine 2 : Comment choisir votre formule hajj',
  'Semaine 3 : Présentation de Nusuk, comment ça fonctionne ?',
  'Semaine 4 : Présentation de nos formules hajj 2026',
  'Semaine 5 : Questions/Réponses avant réservation finale',
  'Semaine 6 : Préparation à la deuxième phase de réservation sur Nusuk',
];

const extras = [
  "Inscription à un stage de 8 séances de formation Hajj en présentiel dans nos locaux animés par des cheikh, accompagnateurs, médecins, imams,…pour une préparation maximale (technique, spirituelle, religieuse, médicale, etc.)",
  "Notre Pack cadeau avec la Valise du hajj et tout ce qu’il vous faut pour un hajj en toute sérénité.",
];

export default function Serenite() {
  return (
    <section className={styles.wrapper} aria-labelledby='serenite-title'>
      <div className={styles.container}>
        <h2 id='serenite-title' className={styles.title}>Notre option hajj sérénité</h2>

        <ul className={styles.list}>
          {bullets.map((b, i) => (
            <li key={i} className={styles.item}>
              <img src='/imgs/checked.png' alt='' className={styles.icon} />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <ul className={`${styles.list} ${styles.weeks}`}>
          {weeks.map((w, i) => (
            <li key={i} className={styles.item}>
              <img src='/imgs/plus.png' alt='' className={styles.iconAlt} />
              <span>{w}</span>
            </li>
          ))}
        </ul>

        <ul className={styles.list}>
          {extras.map((e, i) => (
            <li key={i} className={styles.item}>
              <img src='/imgs/checked.png' alt='' className={styles.icon} />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
