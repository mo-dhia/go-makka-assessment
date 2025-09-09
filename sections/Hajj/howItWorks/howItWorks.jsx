import React from 'react';
import styles from './howItWorks.module.css';

const steps = [
  {
    n: 1,
    title: "Choisir l'agence et le type de pack",
    desc: 'VIP, confort ou économique.'
  },
  {
    n: 2,
    title: 'Créer un compte Nusuk',
    desc: 'soit vous-même avec notre assistance gratuite, soit nous le faisons pour vous avec notre pack Sérénité'
  },
  {
    n: 3,
    title: 'Découvrir les offres',
    desc: 'officielles annoncées par les autorités saoudiennes.'
  },
  {
    n: 4,
    title: 'Sélectionner votre pack Hajj',
    desc: 'nous vous aidons à comparer, décortiquer et vérifier chaque détail.'
  },
  {
    n: 5,
    title: 'Alimenter votre portefeuille client',
    desc: 'le paiement est bloqué sur Nusuk jusqu\'à validation.'
  },
  {
    n: 6,
    title: "Confirmer l’inscription dès l’ouverture",
    desc: 'une étape cruciale où la rapidité fait toute la différence.'
  }
];

export default function HowItWorks() {
  return (
    <section className={styles.wrapper} aria-labelledby='hiw-title'>
      <div className={styles.container}>
        <h2 id='hiw-title' className={styles.title}>Comment ça se passe concrètement ?</h2>
        <p className={styles.intro}>La procédure se déroule en plusieurs étapes :</p>

        <div className={styles.grid}>
          {steps.map((s) => (
            <div key={s.n} className={styles.card}>
              <div className={styles.badge}>{s.n}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
